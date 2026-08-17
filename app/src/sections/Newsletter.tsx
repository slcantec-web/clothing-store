import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="reveal relative overflow-hidden bg-sand px-7 py-16 text-center md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(168,127,91,0.35), transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(27,24,21,0.12), transparent 70%)' }}
        />
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-camel">
          The Sunday List
        </p>
        <h2 className="mx-auto max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
          First access to drops, <span className="italic">zero spam</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink/60">
          One letter a week: new pieces, atelier stories, and early access before collections go
          public. Unsubscribe anytime.
        </p>

        {done ? (
          <p className="mx-auto mt-9 inline-flex items-center gap-2.5 border border-ink/20 bg-ivory px-6 py-4 text-sm text-ink">
            <Check className="h-4 w-4 text-camel" strokeWidth={2} />
            You're on the list — see you Sunday.
          </p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-9 flex max-w-md items-stretch border border-ink/25 bg-ivory p-1.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-ink outline-none placeholder:text-ink/35"
            />
            <button
              type="submit"
              className="group flex items-center gap-2 bg-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-camel"
            >
              Join
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
