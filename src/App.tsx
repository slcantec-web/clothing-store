import { Routes, Route } from 'react-router'
import { CartProvider } from '@/lib/cart'
import { LanguageProvider } from '@/lib/i18n'
import Home from './pages/Home'

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CartProvider>
    </LanguageProvider>
  )
}
