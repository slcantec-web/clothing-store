const items = [
  'Free shipping over $150',
  'New drop — AW25',
  'Natural fibres only',
  'Small-batch ateliers',
  '30-day easy returns',
  'Carbon-neutral delivery',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-line bg-ink py-3.5 text-ivory">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.3em]"
          >
            {t}
            <span className="inline-block h-1 w-1 rotate-45 bg-camel" />
          </span>
        ))}
      </div>
    </div>
  )
}
