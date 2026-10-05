import { FoxLogo } from './brand'
import type { Navigate } from '@/types'

export function Footer({ go }: { go: Navigate }) {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1360px] px-6 pb-10 pt-16 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10 border-b border-paper/15 pb-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <FoxLogo variant="sun" size={44} />
              <span className="font-serif text-[34px] italic leading-none">Preisfuchs</span>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-paper/70">
              Der Fuchs riecht den besten Preis: ehrliche Geschenke-Guides, Tests und Deals zur Weihnachtszeit –
              recherchiert auf Amazon.de, ohne Markengehorsam.
            </p>
          </div>
          <nav className="flex gap-16" aria-label="Footer">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-paper/50">Inhalte</p>
              <ul className="space-y-2 text-[14px]">
                <li><button className="hover:text-sun" onClick={() => go('home')}>Aktuelle Deals</button></li>
                <li><button className="hover:text-sun" onClick={() => go('tests')}>Guides & Tests</button></li>
                <li><button className="hover:text-sun" onClick={() => go('article')}>Top-Geschenke 2026</button></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-paper/50">Rechtliches</p>
              <ul className="space-y-2 text-[14px]">
                <li><button className="hover:text-sun" onClick={() => go('impressum')}>Impressum</button></li>
                <li><button className="hover:text-sun" onClick={() => go('datenschutz')}>Datenschutz</button></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="pt-8">
          <p className="max-w-3xl text-[13px] leading-relaxed text-paper/60">
            <strong className="text-paper/90">Transparenz-Hinweis:</strong> Als Amazon-Partner verdiene ich an
            qualifizierten Verkäufen. Wenn du über einen Link auf dieser Seite einkaufst, erhalte ich eine kleine
            Provision – für dich ändert sich der Preis nicht. Alle Preisangaben sind ca.-Werte und können abweichen.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-paper/40">
            © 2026 Preisfuchs · Made with 🦊 in Germany
          </p>
        </div>
      </div>
    </footer>
  )
}
