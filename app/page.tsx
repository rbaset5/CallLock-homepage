import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Guarantee } from '@/components/sections/Guarantee'
import { Positioning } from '@/components/sections/Positioning'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ROI } from '@/components/sections/ROI'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Guarantee />
      <Positioning />
      <HowItWorks />
      <ROI />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
