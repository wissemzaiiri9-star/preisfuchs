export type Product = {
  rank?: number
  name: string
  tagline: string
  price: string
  uvp?: string
  discount?: string
  rating: string
  category: string
  sku: string
  badge?: string
}

export type GuideArticle = {
  title: string
  keyword: string
  status: 'online' | 'bald'
  category: string
}

export type Recipient = {
  name: string
  desc: string
  picks: string[]
}

export const priceNote =
  'Preise vom 05.10.2026, ca.-Angaben. Preise und Verfügbarkeiten können sich ändern. Alle Angaben ohne Gewähr.'

export const BLACK_FRIDAY = '2026-11-27T00:00:00+01:00'
export const WEIHNACHTEN = '2026-12-24T18:00:00+01:00'

/* ── Deals de saison (produits réellement demandés en nov./déc. en Allemagne) ── */
export const deals: Product[] = [
  {
    name: 'Apple AirPods Pro',
    tagline: 'DAS Tech-Geschenk 2026 · Noise Cancelling',
    price: '199 €',
    uvp: '279 €',
    discount: '-29 %',
    rating: '4,7',
    category: 'Technik',
    sku: 'PF-TEC-0199',
    badge: 'Bestseller',
  },
  {
    name: 'Amazon Kindle Paperwhite',
    tagline: 'Für Leseratten · wasserdicht, wochenlanger Akku',
    price: '129 €',
    uvp: '169 €',
    discount: '-24 %',
    rating: '4,6',
    category: 'Technik',
    sku: 'PF-TEC-0129',
  },
  {
    name: 'Echo Dot (neueste Gen.)',
    tagline: 'Smart-Home-Einstieg · Alexa in jedem Zimmer',
    price: '34 €',
    uvp: '64 €',
    discount: '-47 %',
    rating: '4,6',
    category: 'Technik',
    sku: 'PF-TEC-0034',
  },
  {
    name: 'Heißluftfritteuse XXL',
    tagline: 'Küchen-Bestseller · 5,5 l, 8 Programme',
    price: '89 €',
    uvp: '139 €',
    discount: '-36 %',
    rating: '4,5',
    category: 'Küche & Genuss',
    sku: 'PF-KUE-0089',
    badge: 'Deal der Woche',
  },
  {
    name: 'LEGO Icons Blumenstrauß',
    tagline: 'Kult-Geschenk für Erwachsene · 939 Teile',
    price: '44 €',
    uvp: '59 €',
    discount: '-25 %',
    rating: '4,8',
    category: 'Spielzeug',
    sku: 'PF-SPI-0044',
  },
  {
    name: 'Beauty-Adventskalender',
    tagline: '24 Überraschungen · Kult im November',
    price: '59 €',
    uvp: '85 €',
    discount: '-31 %',
    rating: '4,5',
    category: 'Beauty & Wellness',
    sku: 'PF-BEA-0059',
  },
  {
    name: 'Massagepistole Mini',
    tagline: 'Wellness-Geschenk · 4 Aufsätze, nur 450 g',
    price: '49 €',
    uvp: '79 €',
    discount: '-38 %',
    rating: '4,5',
    category: 'Beauty & Wellness',
    sku: 'PF-REC-0049',
  },
  {
    name: 'Duftkerzen-Set Winter',
    tagline: 'Zimt, Tanne & Vanille · 3er-Geschenkbox',
    price: '29 €',
    rating: '4,4',
    category: 'Wohnen & Deko',
    sku: 'PF-WOH-0029',
  },
  {
    name: 'Gesellschaftsspiel des Jahres',
    tagline: 'Familien-Hit · ab 8 Jahren, 2–6 Spieler',
    price: '27 €',
    uvp: '39 €',
    discount: '-31 %',
    rating: '4,7',
    category: 'Spielzeug',
    sku: 'PF-SPI-0027',
  },
]

/* ── Article principal : produits classés ── */
export const articleProducts: (Product & {
  pros: string[]
  cons: string[]
  forWhom: string
})[] = [
  {
    rank: 1,
    name: 'Heißluftfritteuse XXL',
    tagline: 'Der Küchen-Bestseller',
    price: 'ca. 89 €',
    rating: '4,5',
    category: 'Küche & Genuss',
    sku: 'PF-KUE-0089',
    badge: 'Preis-Tipp',
    pros: [
      'Knusprige Ergebnisse mit bis zu 80 % weniger Öl',
      'XXL-Korb (5,5 l) reicht für die ganze Familie',
      '8 Automatikprogramme – auch für Anfänger einfach',
      'Am Black Friday regelmäßig 30–40 % reduziert',
    ],
    cons: [
      'Nimmt viel Platz auf der Arbeitsfläche weg',
      'Korb und Einsatz müssen nach jeder Nutzung gereinigt werden',
      'Lüftergeräusch ist deutlich hörbar',
    ],
    forWhom: 'Für Hobbyköche, Familien und alle, die schnell und fettarm kochen wollen.',
  },
  {
    rank: 2,
    name: 'Kabellose Kopfhörer (ANC)',
    tagline: 'Das sicherste Tech-Geschenk',
    price: 'ca. 199 €',
    rating: '4,7',
    category: 'Technik',
    sku: 'PF-TEC-0199',
    badge: 'Bestseller',
    pros: [
      'Aktives Noise Cancelling – ideal für Büro und Bahn',
      'Bis zu 30 Stunden Akkulaufzeit mit Ladecase',
      'Bequemer Sitz auch über mehrere Stunden',
      'Universell beliebt: passt zu fast jedem Empfänger',
    ],
    cons: [
      'Premium-Modelle sind teuer (150–280 €)',
      'Kleine Ohrstöpsel gehen leicht verloren',
      'Akkus lassen sich nicht austauschen',
    ],
    forWhom: 'Für Partner, Teenager und Berufspendler – das Geschenk, mit dem man fast nichts falsch macht.',
  },
  {
    rank: 3,
    name: 'LEGO Icons Blumenstrauß',
    tagline: 'Der Überraschungs-Hit',
    price: 'ca. 44 €',
    rating: '4,8',
    category: 'Spielzeug',
    sku: 'PF-SPI-0044',
    pros: [
      'Kreatives Geschenk, das nie verwelkt',
      '939 Teile – entspanntes Bauerlebnis für Erwachsene',
      'Dekorativ: sieht in jeder Wohnung gut aus',
      'LEGO behält den Wert – oft sogar steigend',
    ],
    cons: [
      'Nichts für Menschen ohne Bastel-Geduld',
      'Beliebte Sets sind vor Weihnachten oft ausverkauft',
      'Kleinteile – ungeeignet für Haushalte mit Kleinkindern',
    ],
    forWhom: 'Für Freundin, Mama oder Kollegin – das Geschenk, über das sich fast jede/r freut.',
  },
  {
    rank: 4,
    name: 'E-Reader (Kindle Paperwhite)',
    tagline: 'Für Leseratten',
    price: 'ca. 129 €',
    rating: '4,6',
    category: 'Technik',
    sku: 'PF-TEC-0129',
    pros: [
      'Blendfreies Display – liest sich wie Papier',
      'Wasserdicht (IPX8): Badewanne und Strand inklusive',
      'Ein Akku hält mehrere Wochen',
      'Tausende Bücher immer dabei, trotzdem federleicht',
    ],
    cons: [
      'Bücher müssen zusätzlich gekauft werden',
      'Kein Farbdisplay – ungeeignet für Comics',
      'Fest im Amazon-Ökosystem verankert',
    ],
    forWhom: 'Für Vielleser, Eltern und alle, die im Urlaub keine Koffer voller Bücher schleppen wollen.',
  },
  {
    rank: 5,
    name: 'Beauty-Adventskalender',
    tagline: 'Der November-Klassiker',
    price: 'ca. 59 €',
    rating: '4,5',
    category: 'Beauty & Wellness',
    sku: 'PF-BEA-0059',
    pros: [
      '24 Türchen = 24 Tage Vorfreude',
      'Warenwert meist deutlich höher als der Kaufpreis',
      'Ideale Größe zum Ausprobieren neuer Marken',
      'Fertig verpackt – kein Einpack-Stress',
    ],
    cons: [
      'Ab November oft schnell ausverkauft',
      'Nicht jedes Produkt passt zu jedem Hauttyp',
      'Preis-Leistung variiert stark je nach Marke',
    ],
    forWhom: 'Für Beauty-Fans – aber früh bestellen, die besten Kalender sind im November weg.',
  },
  {
    rank: 6,
    name: 'Smart Speaker (Echo Dot)',
    tagline: 'Der Preis-Kracher',
    price: 'ca. 34 €',
    rating: '4,6',
    category: 'Technik',
    sku: 'PF-TEC-0034',
    pros: [
      'Am Black Friday oft unter 35 €',
      'Musik, Wecker, Smart Home per Sprache',
      'Kompakt – passt in jeden Raum',
      'Perfektes Wichtel- oder Zusatzgeschenk',
    ],
    cons: [
      'Datenschutz-Bedenken bei Mikrofon-Geräten beachten',
      'Voller Funktionsumfang nur mit Amazon-Konto',
      'Klang reicht nicht für echte Musikliebhaber',
    ],
    forWhom: 'Für Studenten, Wichtelrunden und alle, die ihr Zuhause smarter machen wollen.',
  },
  {
    rank: 7,
    name: 'Gesellschaftsspiel des Jahres',
    tagline: 'Für die ganze Familie',
    price: 'ca. 27 €',
    rating: '4,7',
    category: 'Spielzeug',
    sku: 'PF-SPI-0027',
    pros: [
      'Gemeinsame Zeit statt Bildschirm',
      'Ab 8 Jahren, 2–6 Spieler – passt überall',
      'Unter 30 €: starkes Geschenk fürs kleine Budget',
      'Wird garantiert am Heiligabend ausgepackt',
    ],
    cons: [
      'Regeln brauchen 15 Minuten Einarbeitung',
      'Nicht jedes Spiel trifft jeden Familiengeschmack',
      'Erweiterungen kosten später extra',
    ],
    forWhom: 'Für Familien und Freundesgruppen – das Geschenk, das sofort benutzt wird.',
  },
]

/* ── Catégories saisonnières ── */
export const categories = [
  { name: 'Technik', count: 9, desc: 'Kopfhörer, E-Reader, Smart Home' },
  { name: 'Küche & Genuss', count: 7, desc: 'Airfryer, Kaffee, Gewürz-Sets' },
  { name: 'Spielzeug', count: 8, desc: 'LEGO, Spiele, Kreativsets' },
  { name: 'Beauty & Wellness', count: 6, desc: 'Adventskalender, Pflege-Sets' },
  { name: 'Wohnen & Deko', count: 5, desc: 'Duftkerzen, Lichter, Kuschelzeit' },
]

/* ── Geschenkefinder par destinataire ── */
export const recipients: Recipient[] = [
  {
    name: 'Für Sie',
    desc: 'Beauty, Wellness & Persönliches',
    picks: ['Beauty-Adventskalender', 'Duftkerzen-Set Winter', 'Wellness-Geschenkbox', 'Schmuck mit Gravur'],
  },
  {
    name: 'Für Ihn',
    desc: 'Technik & Praktisches',
    picks: ['Kabellose Kopfhörer', 'Smart Speaker', 'Grill- & Barware-Sets', 'Multi-Tool'],
  },
  {
    name: 'Für Kinder',
    desc: 'Spielen, Bauen, Staunen',
    picks: ['LEGO-Sets', 'Gesellschaftsspiele', 'Kreativ- & Bastelboxen', 'Hörspiel-Boxen'],
  },
  {
    name: 'Wichteln unter 20 €',
    desc: 'Klein, clever, originell',
    picks: ['Duftkerzen', 'Witzige Gadgets', 'Tee- & Schoko-Sets', 'Mini-Spiele'],
  },
]

/* ── Plan éditorial saisonnier (20 articles) ── */
export const guides: GuideArticle[] = [
  { title: 'Die 7 besten Weihnachtsgeschenke 2026 für jedes Budget', keyword: 'beste Weihnachtsgeschenke 2026', status: 'online', category: 'Geschenkefinder' },
  { title: 'Die 10 besten Tech-Geschenke unter 100 Euro', keyword: 'Technik Geschenke unter 100 Euro', status: 'bald', category: 'Technik' },
  { title: 'Die 5 besten Beauty-Adventskalender 2026 im Vergleich', keyword: 'Beauty Adventskalender 2026', status: 'bald', category: 'Beauty & Wellness' },
  { title: 'Black Friday 2026: Die besten Amazon-Deals im Ticker', keyword: 'Black Friday 2026 Amazon Deals', status: 'bald', category: 'Deals' },
  { title: 'Die 7 besten Heißluftfritteusen im Vergleich', keyword: 'Heißluftfritteuse Test', status: 'bald', category: 'Küche & Genuss' },
  { title: 'Weihnachtsgeschenke für Männer: 10 Ideen, die ankommen', keyword: 'Weihnachtsgeschenke für Männer', status: 'bald', category: 'Geschenkefinder' },
  { title: 'Weihnachtsgeschenke für Frauen: 10 Ideen mit Wow-Effekt', keyword: 'Weihnachtsgeschenke für Frauen', status: 'bald', category: 'Geschenkefinder' },
  { title: 'Die 10 besten Geschenke für Kinder 2026 (nach Alter)', keyword: 'Geschenke für Kinder 2026', status: 'bald', category: 'Spielzeug' },
  { title: 'Die 5 besten LEGO-Sets für Erwachsene 2026', keyword: 'LEGO Sets für Erwachsene', status: 'bald', category: 'Spielzeug' },
  { title: 'Wichtelgeschenke unter 20 Euro: 12 originelle Ideen', keyword: 'Wichtelgeschenke unter 20 Euro', status: 'bald', category: 'Geschenkefinder' },
  { title: 'Kindle Paperwhite im Test: Das perfekte Geschenk für Leser?', keyword: 'Kindle Paperwhite Test', status: 'bald', category: 'Technik' },
  { title: 'Die 5 besten Gesellschaftsspiele für die Familie 2026', keyword: 'Gesellschaftsspiele Familie 2026', status: 'bald', category: 'Spielzeug' },
  { title: 'Geschenke für Eltern: 8 Ideen, die wirklich Freude machen', keyword: 'Geschenke für Eltern Weihnachten', status: 'bald', category: 'Geschenkefinder' },
  { title: 'Die 7 besten Duftkerzen & Winterdüfte im Vergleich', keyword: 'Duftkerzen Winter Test', status: 'bald', category: 'Wohnen & Deko' },
  { title: 'Last-Minute-Geschenke: 10 Ideen mit Express-Lieferung', keyword: 'Last Minute Weihnachtsgeschenke', status: 'bald', category: 'Geschenkefinder' },
  { title: 'Die 5 besten Smartwatches unter 200 Euro', keyword: 'Smartwatch unter 200 Euro', status: 'bald', category: 'Technik' },
  { title: 'Personalisierte Geschenke: 8 Ideen mit Gravur & Foto', keyword: 'personalisierte Geschenke Weihnachten', status: 'bald', category: 'Geschenkefinder' },
  { title: 'Cyber Monday 2026: Lohnt er sich nach dem Black Friday?', keyword: 'Cyber Monday 2026 Deals', status: 'bald', category: 'Deals' },
  { title: 'Die 5 besten Kaffeemaschinen als Geschenk 2026', keyword: 'Kaffeemaschine Geschenk', status: 'bald', category: 'Küche & Genuss' },
  { title: 'Geschenke für Gamer: 10 Ideen von 20 bis 200 Euro', keyword: 'Geschenke für Gamer', status: 'bald', category: 'Technik' },
]
