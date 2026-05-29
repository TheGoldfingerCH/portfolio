import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    ok: true,
    runtime: process.version,
    geminiKey: process.env.GEMINI_API_KEY ? 'set' : 'missing',
    allowedOrigins: process.env.ALLOWED_ORIGINS ?? 'unset',
    now: new Date().toISOString(),
  });
}
