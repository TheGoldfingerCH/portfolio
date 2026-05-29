import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';
import { buildSystemPrompt } from '../src/lib/chatContext.js';
import { locales, type Locale } from '../src/i18n/ui.js';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_OUTPUT_TOKENS = 600;
const MODEL_ID = 'gemini-2.5-flash';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const rateBucket = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateBucket.get(ip);
  if (!entry || entry.reset < now) {
    rateBucket.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function applyCors(req: VercelRequest, res: VercelResponse) {
  const allowed = (process.env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const origin = req.headers.origin ?? '';
  if (allowed.length === 0 || allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Access-Control-Max-Age', '86400');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfigured: missing GEMINI_API_KEY' });
  }

  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests, please slow down.' });
  }

  const payload = (req.body ?? {}) as { locale?: string; messages?: ChatMessage[] };

  const locale = (locales as readonly string[]).includes(payload.locale ?? '')
    ? (payload.locale as Locale)
    : 'fr';

  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  if (messages.length === 0 || messages.length > MAX_MESSAGES) {
    return res.status(400).json({ error: 'Invalid messages array' });
  }

  const cleaned: ChatMessage[] = [];
  for (const m of messages) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant')) {
      return res.status(400).json({ error: 'Invalid message role' });
    }
    if (typeof m.content !== 'string' || m.content.length === 0) {
      return res.status(400).json({ error: 'Empty message content' });
    }
    if (m.content.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({ error: 'Message too long' });
    }
    cleaned.push({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) });
  }

  if (cleaned[cleaned.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'Last message must be from user' });
  }

  const history = cleaned.slice(0, -1).map((m) => ({
    role: m.role === 'assistant' ? ('model' as const) : ('user' as const),
    parts: [{ text: m.content }],
  }));
  const latestUserMessage = cleaned[cleaned.length - 1].content;

  try {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: MODEL_ID,
      history,
      config: {
        systemInstruction: buildSystemPrompt(locale),
        maxOutputTokens: MAX_OUTPUT_TOKENS,
      },
    });

    const response = await chat.sendMessage({ message: latestUserMessage });
    const reply = (response.text ?? '').trim();

    if (!reply) {
      return res.status(502).json({ error: 'Empty response from model' });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat error', error);
    return res.status(502).json({ error: 'Upstream model error' });
  }
}
