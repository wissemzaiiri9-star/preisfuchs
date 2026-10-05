import { Kicker } from '@/components/brand'
import { guides } from '@/data/content'
import type { Navigate } from '@/types'

export default function Tests({ go }: { go: Navigate }) {
  const groups = ['Geschenkefinder', 'Technik', 'Küche & Genuss', 'Spielzeug', 'Beauty & Wellness', 'Wohnen & Deko', 'Deals']
  return (
    <main className="mx-auto max-w-[1360px] px-6 py-12 md:px-8 md:py-16">
      <Kicker>Redaktion · Weihnachten 2026</Kicker>
      <h1 className="mt-5 max-w-2xl font-serif text-[clamp(36px,5vw,60px)] leading-[1.02] tracking-[-0.028em] text-ink">
        Alle <em className="italic text-sun-deep">Guides</em> & Tests zur Saison
      </h1>
      <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-faint">
        20 Artikel sind geplant – jede Woche kommt ein neuer Geschenke-Guide oder Deal-Ticker dazu. Der große
        Geschenkefinder 2026 ist bereits online, der Rest folgt bis zum Advent.
      </p>

      <div className="mt-14 space-y-14">
        {groups.map((group) => {
          const items = guides.filter((g) => g.category === group)
          if (items.length === 0) return null
          return (
            <section key={group}>
              <h2 className="mb-4 flex items-baseline gap-3 font-serif text-[26px] text-ink">
                {group}
                <span className="font-mono text-[12px] font-normal text-ink-faint">
                  {items.length} Artikel
                </span>
              </h2>
              <div className="divide-y divide-ink/12 border-y border-ink/12">
                {items.map((g) => (
                  <button
                    key={g.title}
                    onClick={() => g.status === 'online' && go('article')}
                    className={`group flex w-full flex-wrap items-baseline gap-x-5 gap-y-1 py-4 text-left ${
                      g.status === 'online' ? '' : 'cursor-default opacity-70'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 self-center rounded-full ${
                        g.status === 'online' ? 'animate-pulse-dot bg-sun' : 'bg-ink/25'
                      }`}
                    />
                    <span className="min-w-0 flex-1 text-[16px] font-medium text-ink transition-colors group-hover:text-sun-deep">
                      {g.title}
                    </span>
                    <span className="font-mono text-[11px] text-ink-faint">Keyword: {g.keyword}</span>
                    {g.status === 'online' ? (
                      <span className="font-mono text-[12px] font-semibold text-sun-deep">Lesen →</span>
                    ) : (
                      <span className="font-mono text-[12px] text-ink-faint">Bald</span>
                    )}
                  </button>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
