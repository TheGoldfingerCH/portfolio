import { useEffect, useRef, useState } from 'react';
import type { Locale } from '../i18n/ui';
import { ui } from '../i18n/ui';

type Role = 'user' | 'assistant';
type Message = { role: Role; content: string };

interface Props {
  locale: Locale;
}

export default function ChatBot({ locale }: Props) {
  const t = ui[locale].chatbot;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: t.initial },
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || sending) return;
    setError(null);
    const next = [...messages, { role: 'user' as const, content: trimmed }];
    setMessages(next);
    setInput('');
    setSending(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          locale,
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || res.statusText);
      }
      const data = (await res.json()) as { reply: string };
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error(err);
      setError(t.error);
    } finally {
      setSending(false);
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
          aria-label={t.buttonLabel}
        >
          <span aria-hidden="true">✦</span>
          <span>{t.buttonLabel}</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
          className="fixed inset-x-3 bottom-3 z-50 flex max-h-[80vh] flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-2xl md:inset-auto md:bottom-5 md:right-5 md:max-h-[600px] md:w-96"
        >
          <header className="flex items-start justify-between gap-3 border-b border-[color:var(--color-border)] p-4">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                {t.title}
              </div>
              <p className="mt-1 text-xs text-[color:var(--color-text-muted)]">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-[color:var(--color-text-muted)] transition hover:bg-[color:var(--color-surface-2)] hover:text-white"
              aria-label={t.close}
            >
              ✕
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === 'user'
                    ? 'ml-8 rounded-2xl rounded-tr-sm bg-indigo-500/15 border border-indigo-400/20 p-3 text-[color:var(--color-text)]'
                    : 'mr-8 rounded-2xl rounded-tl-sm bg-[color:var(--color-bg-soft)] border border-[color:var(--color-border)] p-3 text-[color:var(--color-text-soft)]'
                }
              >
                {m.content}
              </div>
            ))}
            {sending && (
              <div className="mr-8 rounded-2xl rounded-tl-sm border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] p-3 text-[color:var(--color-text-muted)]">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                  <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse [animation-delay:240ms]" />
                </span>
              </div>
            )}
            {error && (
              <div className="mr-8 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-3 text-rose-300">
                {error}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
            className="border-t border-[color:var(--color-border)] p-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder={t.placeholder}
                rows={1}
                maxLength={2000}
                className="flex-1 resize-none rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] px-3 py-2 text-sm outline-none focus:border-indigo-400/60"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? t.sending : t.send}
              </button>
            </div>
            <p className="mt-2 text-[10px] leading-tight text-[color:var(--color-text-muted)]">
              {t.disclaimer}
            </p>
          </form>
        </div>
      )}
    </>
  );
}
