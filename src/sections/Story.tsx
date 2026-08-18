import { useLanguage } from '@/lib/i18n'

export default function Story() {
  const { t } = useLanguage()

  return (
    <section id="atelier" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative order-2 lg:order-1">
          <div className="aspect-[2/3] max-h-[640px] w-full overflow-hidden">
            <img
              src="images/look-1.jpg"
              alt="Detail of the Sculpted Overcoat in camel wool"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden bg-ink px-8 py-6 text-ivory sm:block md:-right-8">
            <p className="font-display text-4xl italic text-camel">{t.story.estSince}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/60">
              {t.story.places}
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="reveal mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-camel">
            {t.story.eyebrow}
          </p>
          <h2 className="reveal font-display text-5xl leading-[1.02] text-ink md:text-6xl">
            {t.story.titleLine1}
            <br />
            <span className="italic">{t.story.titleItalic}</span>
          </h2>
          <p className="reveal mt-7 max-w-lg text-[15px] leading-relaxed text-ink/65">
            {t.story.para1}
          </p>
          <p className="reveal mt-4 max-w-lg text-[15px] leading-relaxed text-ink/65">
            {t.story.para2}
          </p>

          <div className="reveal mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {t.story.stats.map((s) => (
              <div key={s.label} className="border-t border-ink/15 pt-4">
                <p className="font-display text-3xl text-ink md:text-4xl">{s.value}</p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
