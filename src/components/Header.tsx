import { FoxLogo } from './brand'
import type { Navigate, Page } from '@/types'

export function Header({ current, go }: { current: Page; go: Navigate }) {
  const items: { label: string; page: Page }[] = [
    { label: 'Deals', page: 'home' },
    { label: 'Guides & Tests', page: 'tests' },
    { label: 'Top-Geschenke 2026', page: 'article' },
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-ink/12 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-3.5 md:px-8">
        <button onClick={() => go('home')} className="flex items-center gap-2.5">
          <FoxLogo size={34} />
          <span className="text-[20px] font-semibold tracking-tight text-ink">
            Preis<span className="font-serif italic text-sun-deep">fuchs</span>
          </span>
        </button>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {items.map((item) => (
            <button
              key={item.page + item.label}
              onClick={() => go(item.page)}
              className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                current === item.page ? 'bg-ink text-paper' : 'text-ink hover:bg-paper-2'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint lg:block">
          Weihnachten 2026 · Amazon.de
        </span>
      </div>
    </header>
  )
}
