import { ArrowDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="images/hero.png"
          alt="Model wearing the Sculpted Overcoat in a sunlit concrete space"
          className="h-full w-full scale-105 object-cover object-[70%_center] animate-[hero-drift_18s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/60 to-ivory/5" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pb-24 pt-32 sm:px-8 md:justify-center md:pb-32">
        <div className="max-w-2xl">
          <p className="reveal mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/60">
            <span className="inline-block h-px w-10 bg-camel" />
            Autumn — Winter 2025 · Drop 01
          </p>
          <h1 className="font-display text-[13vw] leading-[0.95] text-ink sm:text-7xl md:text-[6.5rem]">
            <span className="reveal block">Dress in</span>
            <span className="reveal block italic text-camel" style={{ transitionDelay: '120ms' }}>
              quiet luxury
            </span>
          </h1>
          <p
            className="reveal mt-7 max-w-md text-[15px] leading-relaxed text-ink/65"
            style={{ transitionDelay: '240ms' }}
          >
            Considered essentials cut from natural fibres — wool, cashmere, flax — made in small
            batches by ateliers we know by name. No logos. No noise. Just clothes that last.
          </p>
          <div
            className="reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ transitionDelay: '360ms' }}
          >
            <a
              href="#new-in"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-camel"
            >
              Shop new in
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
            <a
              href="#atelier"
              className="inline-flex items-center gap-3 border border-ink/30 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
            >
              Our story
            </a>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <a
        href="#new-in"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/50 transition-colors hover:text-ink md:flex"
        aria-label="Scroll to new arrivals"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  )
}
