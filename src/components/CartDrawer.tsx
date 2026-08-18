import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { useLanguage } from '@/lib/i18n'

export default function CartDrawer() {
  const { items, total, isOpen, closeCart, removeItem, setQty } = useCart()
  const { t } = useLanguage()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-500 ease-smooth ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-line px-7 py-6">
          <h2 className="font-display text-2xl italic">{t.cart.title}</h2>
          <button
            onClick={closeCart}
            aria-label={t.cart.close}
            className="rounded-full p-2 transition-colors hover:bg-sand"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-10 w-10 text-ink/30" strokeWidth={1} />
              <p className="font-display text-xl italic text-ink/70">{t.cart.empty}</p>
              <p className="max-w-[26ch] text-sm leading-relaxed text-ink/50">{t.cart.emptyBody}</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map(({ product, qty }) => {
                const copy = t.products[product.id as keyof typeof t.products]
                return (
                  <li key={product.id} className="flex gap-4">
                    <div className="h-28 w-20 shrink-0 overflow-hidden bg-sand">
                      <img src={product.image} alt={copy.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium tracking-wide">{copy.name}</p>
                          <p className="mt-0.5 text-xs text-ink/50">{copy.detail}</p>
                        </div>
                        <button
                          onClick={() => removeItem(product.id)}
                          aria-label={`${t.cart.remove} ${copy.name}`}
                          className="text-ink/40 transition-colors hover:text-ink"
                        >
                          <X className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-line">
                          <button
                            onClick={() => setQty(product.id, qty - 1)}
                            className="px-2.5 py-1.5 transition-colors hover:bg-sand"
                            aria-label={t.cart.decrease}
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">{qty}</span>
                          <button
                            onClick={() => setQty(product.id, qty + 1)}
                            className="px-2.5 py-1.5 transition-colors hover:bg-sand"
                            aria-label={t.cart.increase}
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-sm font-medium tabular-nums">
                          ${(product.price * qty).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-7 py-6">
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-ink/60">{t.cart.subtotal}</span>
              <span className="font-medium tabular-nums">${total.toLocaleString()}</span>
            </div>
            <p className="mb-5 text-xs text-ink/45">{t.cart.shippingNote}</p>
            <button className="group relative w-full overflow-hidden bg-ink py-4 text-xs font-semibold uppercase tracking-[0.25em] text-ivory transition-colors">
              <span className="relative z-10">{t.cart.checkout}</span>
              <span className="absolute inset-0 -translate-x-full bg-camel transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
