import { useLanguage } from '@/lib/i18n'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="journal" className="bg-ink py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-camel">
              {t.testimonials.eyebrow}
            </p>
            <h2 className="reveal font-display text-5xl leading-none md:text-6xl">
              {t.testimonials.titlePlain}{' '}
              {t.testimonials.titleItalic && <span className="italic text-camel">{t.testimonials.titleItalic}</span>}
            </h2>
          </div>
          <p className="reveal max-w-xs text-sm leading-relaxed text-ivory/50">{t.testimonials.body}</p>
        </div>

        <div className="grid gap-px overflow-hidden bg-ivory/10 md:grid-cols-3">
          {t.testimonials.quotes.map((q, idx) => (
            <figure
              key={q.name}
              className="reveal flex flex-col bg-ink p-9 transition-colors duration-500 hover:bg-[#262119] md:p-11"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="font-display text-6xl leading-none text-camel">&ldquo;</span>
              <blockquote className="mt-4 flex-1 font-display text-[22px] leading-snug text-ivory/90">
                {q.text}
              </blockquote>
              <figcaption className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/50">
                {q.name} <span className="mx-2 text-camel">·</span> {q.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
