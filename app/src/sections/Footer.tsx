import { useLanguage } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="font-display text-2xl uppercase tracking-[0.32em] text-ink">
              {t.footer.brand}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/55">{t.footer.blurb}</p>
          </div>
          {t.footer.cols.map((c) => (
            <div key={c.title}>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/45">
                {c.title}
              </p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-ink/70 transition-colors hover:text-camel"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 text-xs text-ink/45 sm:flex-row">
          <p>{t.footer.copyright}</p>
          <p className="tracking-[0.2em] uppercase">{t.footer.places}</p>
        </div>
      </div>
    </footer>
  )
}
