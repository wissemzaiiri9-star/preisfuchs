export function FoxLogo({ variant = 'ink', size = 40 }: { variant?: 'ink' | 'sun'; size?: number }) {
  const main = variant === 'ink' ? '#14213D' : '#FCA311'
  const accent = variant === 'ink' ? '#FCA311' : '#14213D'
  const paper = variant === 'ink' ? '#F4EFE2' : '#14213D'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="Preisfuchs Logo" role="img">
      {/* ears */}
      <path d="M10 7 L29 24 L12 31 Z" fill={main} />
      <path d="M54 7 L35 24 L52 31 Z" fill={main} />
      <path d="M15 14 L24 23 L16 26 Z" fill={accent} />
      <path d="M49 14 L40 23 L48 26 Z" fill={accent} />
      {/* angular face */}
      <path d="M14 28 L26 22 L32 27 L38 22 L50 28 L46 43 L32 59 L18 43 Z" fill={main} />
      {/* cheeks */}
      <path d="M19 40 L27 41 L23 47 Z" fill={paper} />
      <path d="M45 40 L37 41 L41 47 Z" fill={paper} />
      {/* eyes */}
      <path d="M23 33 L29 34.5 L28 38 L22.5 36 Z" fill={paper} />
      <path d="M41 33 L35 34.5 L36 38 L41.5 36 Z" fill={paper} />
      {/* nose */}
      <path d="M29.5 49 L34.5 49 L32 54 Z" fill={accent} />
    </svg>
  )
}

export function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] ${
        dark ? 'border-paper/30 text-paper' : 'border-ink/25 text-ink'
      }`}
    >
      <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-sun" />
      {children}
    </span>
  )
}

export function DealSticker({ size = 120, text = 'DEAL DER WOCHE • PREISFUCHS CHECK • ' }: { size?: number; text?: string }) {
  return (
    <div className="relative" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
        <defs>
          <path id="sticker-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <circle cx="50" cy="50" r="49" fill="#FCA311" />
        <circle cx="50" cy="50" r="26" fill="#14213D" />
        <text fill="#14213D" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fontFamily="'Geist Mono', monospace">
          <textPath href="#sticker-circle">{text}</textPath>
        </text>
        {/* fox nose star in center */}
        <path d="M50 38 L54 46 L63 47 L56 53 L58 62 L50 57 L42 62 L44 53 L37 47 L46 46 Z" fill="#FCA311" />
      </svg>
    </div>
  )
}
