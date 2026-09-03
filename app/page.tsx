import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { MissedCallProblem } from '@/components/sections/MissedCallProblem'
import { PacketWalkthrough } from '@/components/sections/PacketWalkthrough'
import { FourStepFlow } from '@/components/sections/FourStepFlow'
import { WhoItsFor } from '@/components/sections/WhoItsFor'
import { TrialOffer } from '@/components/sections/TrialOffer'
import { CallRashid } from '@/components/sections/CallRashid'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <MissedCallProblem />
        <PacketWalkthrough />
        <FourStepFlow />
        <WhoItsFor />
        <TrialOffer />
        <CallRashid />
      </main>
      <Footer />
    </>
  )
}
