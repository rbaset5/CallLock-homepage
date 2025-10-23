import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProofSection } from '@/components/sections/ProofSection'
import { Positioning } from '@/components/sections/Positioning'
import { ROI } from '@/components/sections/ROI'
import { DoneForYou } from '@/components/sections/DoneForYou'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProofSection />
      <Positioning />
      <ROI />
      <DoneForYou />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
