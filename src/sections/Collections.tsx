import { ArrowUpRight } from 'lucide-react'

const collections = [
  {
    name: 'Women',
    note: '34 pieces · coats, knits, tailoring',
    image: 'images/collection-women.jpg',
  },
  {
    name: 'Men',
    note: '28 pieces · shirting, outerwear, denim',
    image: 'images/collection-men.jpg',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="bg-sand/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="reveal mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-camel">
            02 — Collections
          </p>
          <h2 className="reveal font-display text-5xl leading-none text-ink md:text-6xl">
            Two wardrobes, <span className="italic">one language</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {collections.map((c, idx) => (
            <a
              key={c.name}
              href="#new-in"
              className="reveal group relative block aspect-[4/3] overflow-hidden md:aspect-[3/2]"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <img
                src={c.image}
                alt={`${c.name} collection`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/25 transition-colors duration-700 group-hover:bg-ink/10" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 md:p-9">
                <div>
                  <h3 className="font-display text-4xl italic text-ivory md:text-5xl">{c.name}</h3>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory/75">
                    {c.note}
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/50 text-ivory transition-all duration-500 group-hover:border-ivory group-hover:bg-ivory group-hover:text-ink">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
