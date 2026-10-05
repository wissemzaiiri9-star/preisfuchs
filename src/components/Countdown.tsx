import { useEffect, useState } from 'react'

function diff(target: string) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now())
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms % 86_400_000) / 3_600_000),
    m: Math.floor((ms % 3_600_000) / 60_000),
    s: Math.floor((ms % 60_000) / 1000),
  }
}

export function Countdown({ target, label, dark = true }: { target: string; label: string; dark?: boolean }) {
  const [t, setT] = useState(() => diff(target))
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const cells = [
    { v: t.d, u: 'Tage' },
    { v: t.h, u: 'Std' },
    { v: t.m, u: 'Min' },
    { v: t.s, u: 'Sek' },
  ]
  return (
    <div className="flex items-center gap-4">
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.08em] ${dark ? 'text-paper/60' : 'text-ink-faint'}`}
      >
        {label}
      </span>
      <div className="flex gap-1.5">
        {cells.map((c) => (
          <div
            key={c.u}
            className={`flex min-w-[52px] flex-col items-center border px-2 py-1.5 ${
              dark ? 'border-paper/20 bg-paper/5' : 'border-ink/15 bg-card'
            }`}
          >
            <span className={`font-mono text-[18px] font-semibold leading-none tabular-nums ${dark ? 'text-sun' : 'text-ink'}`}>
              {String(c.v).padStart(2, '0')}
            </span>
            <span className={`mt-1 font-mono text-[9px] uppercase tracking-[0.1em] ${dark ? 'text-paper/50' : 'text-ink-faint'}`}>
              {c.u}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
