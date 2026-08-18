import { useLanguage } from '@/lib/i18n'

export default function Marquee() {
  const { t } = useLanguage()
  const row = [...t.marquee, ...t.marquee]
  return (
    <div className="overflow-hidden border-y border-line bg-ink py-3.5 text-ivory">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {row.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.3em]"
          >
            {text}
            <span className="inline-block h-1 w-1 rotate-45 bg-camel" />
          </span>
        ))}
      </div>
    </div>
  )
}
