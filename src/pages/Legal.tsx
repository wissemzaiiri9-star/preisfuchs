import { Kicker } from '@/components/brand'

function LegalLayout({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[44rem] px-6 py-12 md:py-16">
      <Kicker>{kicker}</Kicker>
      <h1 className="mt-5 font-serif text-[clamp(34px,4.5vw,52px)] leading-[1.05] tracking-[-0.02em] text-ink">
        {title}
      </h1>
      <div className="mt-8 space-y-8 text-[15px] leading-[1.75] text-ink [&_h2]:font-serif [&_h2]:text-[22px] [&_h2]:text-ink [&_strong]:font-semibold">
        {children}
      </div>
      <p className="mt-10 border border-sun/60 bg-sun/15 px-4 py-3 font-mono text-[11.5px] leading-relaxed text-ink">
        Hinweis: Dies ist ein Muster ohne Gewähr für Richtigkeit und Vollständigkeit. Bitte vor Veröffentlichung
        mit einem Generator (z. B. e-recht24.de) oder einer Rechtsberatung finalisieren.
      </p>
    </main>
  )
}

export function Impressum() {
  return (
    <LegalLayout kicker="Rechtliches · § 5 DDG" title="Impressum">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Preisfuchs
          <br />
          [Vor- und Nachname]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
        </p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>
          E-Mail: [deine@mail.de]
          <br />
          Telefon: [optional]
        </p>
      </section>
      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [DE …, sofern vorhanden]
        </p>
      </section>
      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>[Vor- und Nachname, Anschrift wie oben]</p>
      </section>
      <section>
        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse findest du oben im Impressum.
        </p>
      </section>
      <section>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
      <section>
        <h2>Affiliate-Hinweis</h2>
        <p>
          <strong>Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.</strong> Links zu Amazon.de auf
          dieser Website sind Affiliate-Links (Werbung). Für dich entstehen dabei keine Mehrkosten.
        </p>
      </section>
    </LegalLayout>
  )
}

export function Datenschutz() {
  return (
    <LegalLayout kicker="Rechtliches · DSGVO" title="Datenschutzerklärung">
      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist: [Name, Anschrift, E-Mail – wie im
          Impressum].
        </p>
      </section>
      <section>
        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei [Hoster, z. B. IONOS / Hostinger] gehostet. Der Hoster verarbeitet Verbindungsdaten
          (IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite) in Server-Logfiles. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
        </p>
      </section>
      <section>
        <h2>3. Cookies und Einwilligung</h2>
        <p>
          Diese Website verwendet technisch notwendige Cookies. Optionale Cookies (z. B. für Statistik) werden nur
          nach deiner Einwilligung über unser Consent-Tool gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Du kannst deine
          Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
      </section>
      <section>
        <h2>4. Amazon PartnerNet</h2>
        <p>
          Wir nehmen am Partnerprogramm von Amazon EU (Amazon PartnerNet) teil. Wenn du auf einen Amazon-Link
          klickst, setzt Amazon Cookies, um die Herkunft der Bestellung nachvollziehen zu können. Dadurch erhalten
          wir eine Werbekostenerstattung. Verantwortlicher dafür ist Amazon EU S.à r.l., 38 avenue John F. Kennedy,
          L-1855 Luxemburg. Details findest du in der Datenschutzerklärung von Amazon.
        </p>
      </section>
      <section>
        <h2>5. Newsletter</h2>
        <p>
          Wenn du unseren Newsletter abonnierst, verarbeiten wir deine E-Mail-Adresse auf Grundlage deiner
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) im Double-Opt-in-Verfahren. Du kannst dich jederzeit über den
          Abmeldelink in jeder E-Mail austragen.
        </p>
      </section>
      <section>
        <h2>6. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21).
          Außerdem besteht ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
        </p>
      </section>
      <section>
        <h2>7. Stand</h2>
        <p>Oktober 2026</p>
      </section>
    </LegalLayout>
  )
}
