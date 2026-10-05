import { Kicker } from '@/components/brand'
import { AmazonButton, DiscountTag } from '@/components/ProductCard'
import { articleProducts, priceNote, WEIHNACHTEN } from '@/data/content'
import { Countdown } from '@/components/Countdown'
import type { Navigate } from '@/types'

function Disclosure() {
  return (
    <p className="border border-ink/15 bg-paper-2/60 px-4 py-3 font-mono text-[11.5px] leading-relaxed text-ink-faint">
      Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Für dich entstehen keine Mehrkosten.
    </p>
  )
}

const recipients: Record<number, string> = {
  1: 'Familie & Hobbyköche',
  2: 'Partner & Pendler',
  3: 'Sie, Mama, Kollegin',
  4: 'Leseratten',
  5: 'Beauty-Fans',
  6: 'Wichteln & Studenten',
  7: 'Die ganze Familie',
}

export default function Article({ go }: { go: Navigate }) {
  return (
    <main className="mx-auto max-w-[1360px] px-6 py-12 md:px-8">
      {/* Article header */}
      <div className="mx-auto max-w-[44rem]">
        <button onClick={() => go('tests')} className="font-mono text-[12px] text-ink-faint hover:text-ink">
          ← Alle Guides & Tests
        </button>
        <div className="mt-8">
          <Kicker>Geschenkefinder · Weihnachten 2026</Kicker>
        </div>
        <h1 className="mt-5 font-serif text-[clamp(34px,4.6vw,54px)] leading-[1.05] tracking-[-0.02em] text-ink">
          Die 7 besten Weihnachtsgeschenke 2026 für jedes Budget:{' '}
          <em className="italic text-sun-deep">Von 27 bis 199 Euro</em>
        </h1>
        <p className="mt-4 font-mono text-[12px] text-ink-faint">
          Letzte Aktualisierung: 05.10.2026 · ca. 9 Min. Lesezeit · Kategorie: Geschenkefinder
        </p>
        <div className="mt-6">
          <Disclosure />
        </div>
        <p className="mt-8 text-[18px] leading-[1.75] text-ink">
          Jedes Jahr dasselbe Spiel: Der Advent beginnt, die Geschäfte sind voll – und du hast noch keine einzige
          Idee. Damit 2026 alles anders wird, haben wir die meistverschenkten und bestbewerteten Produkte auf
          Amazon.de verglichen: sieben Geschenke, die wirklich ankommen, von 27 bis 199 Euro.
        </p>
        <p className="mt-5 text-[16px] leading-[1.75] text-ink">
          Unser Fokus: Produkte mit mindestens 4,4 Sternen, guter Verfügbarkeit und fairen Preisen – inklusive
          ehrlicher Nachteile, damit unter dem Baum nichts schiefgeht.
        </p>
      </div>

      {/* Overview table */}
      <div className="mx-auto mt-12 max-w-[62rem] overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse border border-ink/15 bg-card text-left">
          <thead>
            <tr className="bg-ink text-paper">
              <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em]">Platz</th>
              <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em]">Geschenk</th>
              <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em]">Preis (ca.)</th>
              <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em]">Für wen?</th>
              <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em]">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {articleProducts.map((p) => (
              <tr key={p.sku} className="hover:bg-paper-2/50">
                <td className="px-4 py-3.5 font-serif text-[22px] text-sun-deep">{p.rank}</td>
                <td className="px-4 py-3.5 text-[14.5px] font-semibold text-ink">{p.name}</td>
                <td className="px-4 py-3.5 font-mono text-[13px] text-ink">{p.price.replace('ca. ', '')}</td>
                <td className="px-4 py-3.5 text-[13.5px] text-ink-faint">{recipients[p.rank!]}</td>
                <td className="px-4 py-3.5 font-mono text-[13px] text-ink">★ {p.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 font-mono text-[11px] text-ink-faint">{priceNote}</p>
      </div>

      {/* Product blocks */}
      <div className="mx-auto mt-16 max-w-[44rem] space-y-16">
        {articleProducts.map((p) => (
          <section key={p.sku} className="scroll-mt-24">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-[56px] leading-none text-sun-deep">{p.rank}</span>
              <div>
                <h2 className="font-serif text-[clamp(24px,3vw,32px)] leading-tight text-ink">
                  {p.name} – <em className="italic">{p.tagline}</em>
                </h2>
                <p className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[12px] text-ink-faint">
                  ★ {p.rating} / 5 · {p.price} · {recipients[p.rank!]}
                  {p.badge && <DiscountTag label={p.badge} tilt={2} />}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="border border-ink/12 bg-card p-5">
                <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">
                  + Vorteile
                </p>
                <ul className="space-y-2">
                  {p.pros.map((pro) => (
                    <li key={pro} className="flex gap-2 text-[14px] leading-relaxed text-ink">
                      <span className="mt-0.5 shrink-0 font-mono text-mint">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-ink/12 bg-paper-2/60 p-5">
                <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
                  − Nachteile
                </p>
                <ul className="space-y-2">
                  {p.cons.map((con) => (
                    <li key={con} className="flex gap-2 text-[14px] leading-relaxed text-ink">
                      <span className="mt-0.5 shrink-0 font-mono text-ink-faint">−</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink">
              <strong className="font-semibold">Für wen?</strong> {p.forWhom}
            </p>
            <div className="mt-5">
              <AmazonButton label={`${p.name}: Preis bei Amazon prüfen`} />
            </div>
          </section>
        ))}
      </div>

      {/* Timing-Ratgeber */}
      <div className="mx-auto mt-20 max-w-[44rem]">
        <h2 className="font-serif text-[clamp(28px,3.6vw,40px)] leading-[1.05] text-ink">
          Wann bestellen? Der <em className="italic text-sun-deep">Fahrplan</em> für stressfreies Schenken
        </h2>
        <div className="mt-8 space-y-6">
          {[
            ['Bis Mitte November', 'Adventskalender und gefragte LEGO-Sets sichern – die sind erfahrungsgemäß als Erstes ausverkauft. Preise beobachten, Wunschliste anlegen.'],
            ['Black Week (23.–29. November)', 'Der größte Preissturz des Jahres: Elektronik, Küchengeräte und Smart Home sind hier oft 20–40 % günstiger. Nicht jede „Ersparnis" ist echt – Preisverlauf prüfen.'],
            ['Cyber Monday (30. November)', 'Zweite Chance für Technik-Deals. Manche Angebote sind sogar besser als am Black Friday.'],
            ['1. Adventswoche', 'Der beste Zeitpunkt, um alle Bestellungen abzuschließen – danach wird es bei Lieferzeiten und Verfügbarkeit eng.'],
            ['Ab 20. Dezember', 'Nur noch Last-Minute: digital per E-Mail (Gutscheine) oder Produkte mit Express-Versand und Liefergarantie bis Heiligabend.'],
          ].map(([title, text], i) => (
            <div key={title} className="flex gap-5 border-b border-ink/10 pb-6">
              <span className="font-mono text-[13px] font-semibold text-sun-deep">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-serif text-[20px] text-ink">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-[1.7] text-ink">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fazit */}
      <div className="mx-auto mt-16 max-w-[62rem]">
        <div className="bg-ink p-8 text-paper md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-sun">Fazit</p>
          <p className="mt-4 max-w-2xl font-serif text-[clamp(20px,2.6vw,28px)] leading-[1.4]">
            Das sicherste Geschenk 2026? <em className="italic text-sun">Kabellose Kopfhörer</em> – sie passen zu
            fast jedem Empfänger. Das beste Preis-Leistungs-Verhältnis liefert die{' '}
            <em className="italic text-sun">Heißluftfritteuse</em>, und für den persönlichen Wow-Moment sorgt der{' '}
            <em className="italic text-sun">LEGO-Blumenstrauß</em>.
          </p>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-paper/80">
            Unser Tipp: Kaufe die teuren Geschenke in der Black Week, den Rest in der ersten Adventswoche. So sparst
            du am meisten – und verschenkst stressfrei.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AmazonButton label="Alle Geschenke bei Amazon entdecken" />
            <AmazonButton label="Zur Black-Friday-Deal-Übersicht" />
          </div>
          <div className="mt-8 border-t border-paper/15 pt-5">
            <Countdown target={WEIHNACHTEN} label="Noch bis Heiligabend" />
          </div>
          <p className="mt-5 font-mono text-[10.5px] leading-relaxed text-paper/50">
            {priceNote} Als Amazon-Partner verdiene ich an qualifizierten Verkäufen – für dich entstehen keine
            Mehrkosten.
          </p>
        </div>
      </div>
    </main>
  )
}
