import { useEffect, useState } from 'react'
import { ShoppingBag, Menu, X, Check, Languages } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { useLanguage } from '@/lib/i18n'

export default function Navbar() {
  const { count, openCart, lastAddedId } = useCart()
  const { t, language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: t.nav.newIn, href: '#new-in' },
    { label: t.nav.collections, href: '#collections' },
    { label: t.nav.atelier, href: '#atelier' },
    { label: t.nav.journal, href: '#journal' },
  ]

  const lastAddedName = lastAddedId
    ? t.products[lastAddedId as keyof typeof t.products]?.name
    : null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-line/70 bg-ivory/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button
            className="rounded-full p-2 transition-colors hover:bg-ink/5 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>

          <nav className="hidden flex-1 items-center gap-8 lg:flex">
            {links.slice(0, 2).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a href="#top" className="flex-1 text-center lg:flex-none">
            <span className="font-display text-[22px] font-medium uppercase tracking-[0.32em] sm:text-2xl">
              Noir&nbsp;Atelier
            </span>
          </a>

          <div className="flex flex-1 items-center justify-end gap-3 sm:gap-8">
            <nav className="hidden items-center gap-8 lg:flex">
              {links.slice(2).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-ink"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 rounded-full border border-ink/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/70 transition-colors hover:border-ink hover:text-ink"
              aria-label="Switch language"
            >
              <Languages className="h-3.5 w-3.5" strokeWidth={1.5} />
              {language === 'en' ? 'සිං' : 'EN'}
            </button>

            <button
              onClick={openCart}
              className="relative rounded-full p-2 transition-colors hover:bg-ink/5"
              aria-label="Open bag"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-camel px-1 text-[10px] font-bold text-ivory">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`overflow-hidden border-b border-line/70 bg-ivory/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
            menuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink/80"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* added-to-bag toast */}
      <div
        className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-ivory shadow-xl transition-all duration-500 ${
          lastAddedId ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <Check className="h-4 w-4 text-camel" strokeWidth={2} />
        <span className="text-xs tracking-wide">
          <span className="font-medium">{lastAddedName}</span> {t.nav.addedToBag}
        </span>
      </div>
    </>
  )
}
