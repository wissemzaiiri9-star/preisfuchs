import { useState } from 'react'
import { Kicker, DealSticker } from '@/components/brand'
import { ProductCard, AmazonButton, DiscountTag } from '@/components/ProductCard'
import { Countdown } from '@/components/Countdown'
import { deals, categories, guides, recipients, priceNote, BLACK_FRIDAY, WEIHNACHTEN } from '@/data/content'
import type { Navigate } from '@/types'

function SectionHead({
  kicker,
  title,
  linkLabel,
  onLink,
}: {
  kicker: string
  title: React.ReactNode
  linkLabel?: string
  onLink?: () => void
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-4 max-w-xl font-serif text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.02em] text-ink">
          {title}
        </h2>
      </div>
      {linkLabel && onLink && (
        <button onClick={onLink} className="group flex items-center gap-2 font-mono text-[13px] font-medium text-ink">
          {linkLabel}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      )}
    </div>
  )
}

export default function Home({ go }: { go: Navigate }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const dealOfWeek = deals[3]
  const published = guides.filter((g) => g.status === 'online')
  const upcoming = guides.filter((g) => g.status === 'bald').slice(0, 5)

  return (
    <main>
      {/* ── Black Friday strip ───────────────────────────── */}
      <div className="border-b border-ink/12 bg-sun">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-center gap-x-6 gap-y-1 px-6 py-2.5 md:px-8">
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-ink">
            Black Friday: 27. November 2026
          </span>
          <span className="hidden font-mono text-[11px] text-ink/70 md:inline">
            Wir tickern die besten Amazon-Deals live · Black Week 23.–29.11.
          </span>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="border-b border-ink/12">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-6 py-16 md:grid-cols-[1.25fr_1fr] md:px-8 md:py-24">
          <div className="flex flex-col justify-center">
            <Kicker>Weihnachten 2026 · Deals · Geschenkefinder</Kicker>
            <h1 className="mt-6 font-serif text-[clamp(46px,5.6vw,68px)] leading-[1.02] tracking-[-0.028em] text-ink">
              Der Fuchs findet dein <em className="italic text-sun-deep">Weihnachts&shy;geschenk</em> zum{' '}
              <em className="italic">besten Preis.</em>
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-faint">
              Preisfuchs durchkämmt Amazon.de nach den besten Geschenken und Deals der Saison – von Technik über
              Küche bis Spielzeug. Ehrlich verglichen, täglich aktualisiert, ohne Marketing-Blabla.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => go('article')}
                className="card-lift rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-paper"
              >
                Zu den Top-Geschenken 2026
              </button>
              <a href="#deals" className="group flex items-center gap-2 font-mono text-[13px] font-medium text-ink">
                Alle Deals ansehen
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="mt-10">
              <Countdown target={WEIHNACHTEN} label="Noch bis Heiligabend" dark={false} />
            </div>
          </div>

          {/* Deal of the week card */}
          <div className="relative flex items-center">
            <div className="relative w-full border border-ink/15 bg-ink p-8 text-paper">
              <div className="absolute -right-6 -top-8 hidden md:block">
                <DealSticker size={118} />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/50">
                {dealOfWeek.category} · {dealOfWeek.sku}
              </p>
              <h3 className="mt-3 font-serif text-[34px] leading-tight">{dealOfWeek.name}</h3>
              <p className="mt-2 text-[14px] text-paper/70">{dealOfWeek.tagline}</p>
              <div className="mt-6 border-t border-paper/15 pt-5">
                <div className="flex items-end gap-3">
                  <span className="font-serif text-[40px] leading-none text-sun">{dealOfWeek.price}</span>
                  {dealOfWeek.uvp && (
                    <span className="font-mono text-[14px] text-paper/50 line-through">{dealOfWeek.uvp}</span>
                  )}
                  {dealOfWeek.discount && <DiscountTag label={dealOfWeek.discount} />}
                </div>
                <div className="mt-5">
                  <AmazonButton label="Jetzt Preis prüfen" />
                </div>
                <div className="mt-6 border-t border-paper/15 pt-4">
                  <Countdown target={BLACK_FRIDAY} label="Bis zum Black Friday" />
                </div>
                <p className="mt-4 font-mono text-[10.5px] leading-relaxed text-paper/40">{priceNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Geschenkefinder ──────────────────────────────── */}
      <section className="border-b border-ink/12">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-8 md:py-20">
          <SectionHead
            kicker="Geschenkefinder"
            title={<>Für wen suchst du <em className="italic text-sun-deep">etwas</em>?</>}
            linkLabel="Alle Guides"
            onLink={() => go('tests')}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recipients.map((r, i) => (
              <button
                key={r.name}
                onClick={() => go('tests')}
                className={`card-lift group border border-ink/12 p-6 text-left ${
                  i === 0 ? 'bg-ink text-paper' : 'bg-card'
                }`}
              >
                <p className={`font-mono text-[11px] uppercase tracking-[0.08em] ${i === 0 ? 'text-paper/50' : 'text-ink-faint'}`}>
                  {r.desc}
                </p>
                <h3 className={`mt-3 font-serif text-[26px] leading-tight ${i === 0 ? 'text-paper' : 'text-ink'}`}>
                  {r.name}
                </h3>
                <ul className={`mt-3 space-y-1.5 text-[13.5px] ${i === 0 ? 'text-paper/75' : 'text-ink-faint'}`}>
                  {r.picks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className={i === 0 ? 'text-sun' : 'text-sun-deep'}>✦</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <span className={`mt-5 inline-block font-mono text-[12px] transition-transform group-hover:translate-x-1 ${i === 0 ? 'text-sun' : 'text-ink'}`}>
                  Entdecken →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aktuelle Deals ───────────────────────────────── */}
      <section id="deals" className="border-b border-ink/12 bg-paper-2/50">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-8 md:py-20">
          <SectionHead kicker="Frisch gewittert" title={<>Die besten <em className="italic text-sun-deep">Deals</em> der Woche</>} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deals.map((p) => (
              <ProductCard key={p.sku} product={p} />
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-ink-faint">{priceNote}</p>
        </div>
      </section>

      {/* ── Kategorien ───────────────────────────────────── */}
      <section className="border-b border-ink/12">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-8 md:py-20">
          <SectionHead kicker="Kategorien" title={<>Stöbern wie ein <em className="italic text-sun-deep">Fuchs</em></>} linkLabel="Alle Tests & Ratgeber" onLink={() => go('tests')} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => go('tests')}
                className={`card-lift group border border-ink/12 p-6 text-left ${
                  i === 0 ? 'bg-ink text-paper sm:col-span-2 lg:col-span-2' : 'bg-card'
                }`}
              >
                <p className={`font-mono text-[11px] uppercase tracking-[0.08em] ${i === 0 ? 'text-paper/50' : 'text-ink-faint'}`}>
                  {String(cat.count).padStart(2, '0')} Artikel
                </p>
                <h3 className={`mt-3 font-serif text-[26px] leading-tight ${i === 0 ? 'text-paper' : 'text-ink'}`}>
                  {cat.name}
                </h3>
                <p className={`mt-1.5 text-[13.5px] ${i === 0 ? 'text-paper/70' : 'text-ink-faint'}`}>{cat.desc}</p>
                <span className={`mt-5 inline-block font-mono text-[12px] transition-transform group-hover:translate-x-1 ${i === 0 ? 'text-sun' : 'text-ink'}`}>
                  Entdecken →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guides ───────────────────────────────────────── */}
      <section className="border-b border-ink/12">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-8 md:py-20">
          <SectionHead
            kicker="Redaktion"
            title={<>Neueste <em className="italic">Guides</em> zur Saison</>}
            linkLabel="Alle 20 Artikel"
            onLink={() => go('tests')}
          />
          <div className="divide-y divide-ink/12 border-y border-ink/12">
            {[...published, ...upcoming].map((g, i) => (
              <button
                key={g.title}
                onClick={() => g.status === 'online' && go('article')}
                className={`group flex w-full flex-wrap items-baseline gap-x-6 gap-y-1 py-5 text-left ${
                  g.status === 'online' ? '' : 'cursor-default opacity-70'
                }`}
              >
                <span className="font-mono text-[13px] text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                <span className="min-w-0 flex-1 font-serif text-[clamp(20px,2.4vw,28px)] leading-snug text-ink transition-colors group-hover:text-sun-deep">
                  {g.title}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">{g.category}</span>
                {g.status === 'online' ? (
                  <span className="font-mono text-[12px] font-semibold text-sun-deep">Jetzt lesen →</span>
                ) : (
                  <span className="font-mono text-[12px] text-ink-faint">In Vorbereitung</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodik ─────────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-8 md:py-20">
          <Kicker dark>So arbeiten wir</Kicker>
          <h2 className="mt-4 max-w-2xl font-serif text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.02em]">
            Vier Nasenlängen <em className="italic text-sun">voraus.</em>
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 md:grid-cols-4">
            {[
              { n: '01', t: 'Wittern', d: 'Wir beobachten Bestseller-Listen, Preisverläufe und Bewertungen auf Amazon.de – täglich.' },
              { n: '02', t: 'Prüfen', d: 'Echte Ersparnis oder Mogelpackung? Wir vergleichen mit dem Preisverlauf, nicht mit der UVP.' },
              { n: '03', t: 'Bewerten', d: 'Klare Vor- und Nachteile pro Produkt. Keine gekauften Plätze, keine Schönfärberei.' },
              { n: '04', t: 'Aktualisieren', d: 'Gerade im Advent ändern sich Preise stündlich. Wir halten unsere Empfehlungen frisch.' },
            ].map((s) => (
              <div key={s.n} className="bg-ink p-7">
                <p className="font-mono text-[12px] text-sun">{s.n}</p>
                <h3 className="mt-3 font-serif text-[24px]">{s.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-paper/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────── */}
      <section className="border-b border-ink/12 bg-sun">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-8 px-6 py-14 md:px-8">
          <div className="max-w-md">
            <h2 className="font-serif text-[clamp(28px,3.4vw,40px)] leading-[1.05] text-ink">
              Der <em className="italic">Fuchs-Alarm</em> zur Black Week.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
              Kein Deal verpassen: Ab dem 23. November schicken wir die besten Amazon-Angebote direkt ins Postfach.
              Kein Spam, jederzeit abbestellbar.
            </p>
          </div>
          {subscribed ? (
            <p className="border border-ink/25 bg-paper px-6 py-4 font-mono text-[13px] font-medium text-ink">
              ✓ Fast geschafft – bitte bestätige deine E-Mail (Double-Opt-in).
            </p>
          ) : (
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                if (email.includes('@')) setSubscribed(true)
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@mail.de"
                className="min-w-0 flex-1 rounded-full border border-ink/25 bg-paper px-5 py-3 text-[14px] text-ink placeholder:text-ink-faint"
                aria-label="E-Mail-Adresse"
              />
              <button type="submit" className="card-lift rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-paper">
                Anmelden
              </button>
            </form>
          )}
        </div>
        <p className="mx-auto max-w-[1360px] px-6 pb-6 font-mono text-[10.5px] text-ink/60 md:px-8">
          Mit der Anmeldung akzeptierst du unsere Datenschutzerklärung. Abmeldung jederzeit möglich.
        </p>
      </section>
    </main>
  )
}
