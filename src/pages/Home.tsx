import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import NewArrivals from '@/sections/NewArrivals'
import Collections from '@/sections/Collections'
import Story from '@/sections/Story'
import Testimonials from '@/sections/Testimonials'
import Newsletter from '@/sections/Newsletter'
import Footer from '@/sections/Footer'
import CartDrawer from '@/components/CartDrawer'
import { useReveal } from '@/hooks/useReveal'

export default function Home() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="min-h-screen bg-ivory font-body text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <NewArrivals />
        <Collections />
        <Story />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
