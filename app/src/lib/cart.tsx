import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '@/data/products'

export interface CartItem {
  product: Product
  qty: number
}

interface CartContextValue {
  items: CartItem[]
  count: number
  total: number
  isOpen: boolean
  lastAdded: string | null
  openCart: () => void
  closeCart: () => void
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  setQty: (id: string, qty: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'noir-atelier-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as CartItem[]) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)
  const [lastAdded, setLastAdded] = useState<string | null>(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable */
    }
  }, [items])

  useEffect(() => {
    if (!lastAdded) return
    const t = setTimeout(() => setLastAdded(null), 2600)
    return () => clearTimeout(t)
  }, [lastAdded])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0)
    const total = items.reduce((s, i) => s + i.qty * i.product.price, 0)
    return {
      items,
      count,
      total,
      isOpen,
      lastAdded,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (product) => {
        setItems((prev) => {
          const found = prev.find((i) => i.product.id === product.id)
          if (found) {
            return prev.map((i) => (i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i))
          }
          return [...prev, { product, qty: 1 }]
        })
        setLastAdded(product.name)
      },
      removeItem: (id) => setItems((prev) => prev.filter((i) => i.product.id !== id)),
      setQty: (id, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => i.product.id !== id)
            : prev.map((i) => (i.product.id === id ? { ...i, qty } : i)),
        ),
    }
  }, [items, isOpen, lastAdded])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
