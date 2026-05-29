import type { APIRoute } from 'astro';
import { GoogleGenAI } from '@google/genai';
import { buildSystemPrompt } from '../../lib/chatContext';
import { locales, type Locale } from '../../i18n/ui';

export const prerender = false;

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_OUTPUT_TOKENS = 600;
const MODEL_ID = 'gemini-2.5-flash';

// Very small in-memory rate limit (per process, per IP). Good enough for a
// single-instance portfolio container; replace with a shared store if scaled.
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
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if ((process.env.CHATBOT_ENABLED ?? 'false') !== 'true') {
    return json({ error: 'Chatbot disabled' }, 503);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ error: 'Server misconfigured: missing GEMINI_API_KEY' }, 500);
  }

  const ip = clientAddress || request.headers.get('x-forwarded-for') || 'unknown';
  if (rateLimited(ip)) {
    return json({ error: 'Too many requests, please slow down.' }, 429);
  }

  let payload: { locale?: string; messages?: ChatMessage[] };
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const locale = (locales as readonly string[]).includes(payload.locale ?? '')
    ? (payload.locale as Locale)
    : 'fr';

  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  if (messages.length === 0 || messages.length > MAX_MESSAGES) {
    return json({ error: 'Invalid messages array' }, 400);
  }

  const cleaned: ChatMessage[] = [];
  for (const m of messages) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant')) {
      return json({ error: 'Invalid message role' }, 400);
    }
    if (typeof m.content !== 'string' || m.content.length === 0) {
      return json({ error: 'Empty message content' }, 400);
    }
    if (m.content.length > MAX_MESSAGE_LENGTH) {
      return json({ error: 'Message too long' }, 400);
    }
    cleaned.push({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) });
  }

  if (cleaned[cleaned.length - 1].role !== 'user') {
    return json({ error: 'Last message must be from user' }, 400);
  }

  // Gemini uses { role: 'user' | 'model', parts: [{ text }] }.
  // History excludes the latest user message — that one is sent via sendMessage.
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
      return json({ error: 'Empty response from model' }, 502);
    }

    return json({ reply });
  } catch (error) {
    console.error('Chat error', error);
    return json({ error: 'Upstream model error' }, 502);
  }
};
