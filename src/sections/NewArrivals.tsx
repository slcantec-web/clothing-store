import { Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/lib/cart'

export default function NewArrivals() {
  const { addItem } = useCart()

  return (
    <section id="new-in" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="reveal mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-camel">
            01 — The Edit
          </p>
          <h2 className="reveal font-display text-5xl leading-none text-ink md:text-6xl">
            New <span className="italic">arrivals</span>
          </h2>
        </div>
        <p className="reveal max-w-xs text-sm leading-relaxed text-ink/55">
          Four essentials for the season. Cut close to the body of work — never close to the trend.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, idx) => (
          <article key={p.id} className="reveal group" style={{ transitionDelay: `${idx * 90}ms` }}>
            <div className="relative aspect-[2/3] overflow-hidden bg-sand">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] ${
                  p.photo ? '' : 'opacity-95'
                }`}
              />
              {!p.photo && (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl italic text-ivory/90 drop-shadow-md">
                    {p.name.split(' ').slice(-1)}
                  </span>
                </span>
              )}
              {p.tag && (
                <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
                  {p.tag}
                </span>
              )}
              <button
                onClick={() => addItem(p)}
                aria-label={`Add ${p.name} to bag`}
                className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-ivory text-ink opacity-0 shadow-lg transition-all duration-400 hover:bg-ink hover:text-ivory group-hover:translate-y-0 group-hover:opacity-100"
              >
                <Plus className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[15px] font-medium tracking-wide text-ink">{p.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink/50">{p.detail}</p>
              </div>
              <p className="pt-0.5 text-sm font-medium tabular-nums text-ink">${p.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
