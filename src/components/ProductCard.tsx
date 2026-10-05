import type { Product } from '@/data/content'

export function DiscountTag({ label, tilt = -3 }: { label: string; tilt?: number }) {
  return (
    <span
      className="inline-block bg-sun px-2 py-0.5 font-mono text-[11px] font-semibold text-ink"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {label}
    </span>
  )
}

export function PriceRow({ price, uvp, discount }: { price: string; uvp?: string; discount?: string }) {
  return (
    <div className="flex items-end gap-2.5">
      <span className="font-serif text-[28px] leading-none text-ink">{price}</span>
      {uvp && <span className="font-mono text-[13px] text-ink-faint line-through">{uvp}</span>}
      {discount && <DiscountTag label={discount} />}
    </div>
  )
}

export function AmazonButton({ label = 'Preis bei Amazon prüfen', small = false }: { label?: string; small?: boolean }) {
  return (
    /* TODO: href durch deinen Amazon-PartnerNet-Affiliate-Link (SiteStripe) ersetzen */
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className={`card-lift inline-flex items-center justify-center gap-2 rounded-full bg-sun font-semibold text-ink ${
        small ? 'px-4 py-2 text-[13px]' : 'px-6 py-3 text-[15px]'
      }`}
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17 L17 7 M9 7 h8 v8" />
      </svg>
    </a>
  )
}

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  return (
    <article
      className={`card-lift relative flex flex-col border border-ink/12 bg-card p-6 ${
        featured ? 'md:col-span-2 md:row-span-1' : ''
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
          {product.category} · {product.sku}
        </span>
        {product.badge && <DiscountTag label={product.badge} tilt={2} />}
      </div>
      <h3 className="font-serif text-[24px] leading-tight text-ink">{product.name}</h3>
      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-faint">{product.tagline}</p>
      <div className="mt-3 flex items-center gap-1.5 font-mono text-[12px] text-ink-faint">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#FCA311">
          <path d="M12 2 L15 9 L22 9.5 L16.5 14 L18.5 21 L12 17 L5.5 21 L7.5 14 L2 9.5 L9 9 Z" />
        </svg>
        {product.rating} / 5 · Amazon-Bewertung
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-4">
        <PriceRow price={product.price} uvp={product.uvp} discount={product.discount} />
        <AmazonButton small />
      </div>
    </article>
  )
}
