import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { MissedCallProblem } from '@/components/sections/MissedCallProblem'
import { PacketWalkthrough } from '@/components/sections/PacketWalkthrough'
import { FourStepFlow } from '@/components/sections/FourStepFlow'
import { WhoItsFor } from '@/components/sections/WhoItsFor'
import { TrialOffer } from '@/components/sections/TrialOffer'
import { CallRashid } from '@/components/sections/CallRashid'
import { assignedGoogleVoiceNumber } from '@/lib/phone-server'

export default function Home() {
  const assignedDigits = assignedGoogleVoiceNumber()

  return (
    <>
      <Header assignedDigits={assignedDigits} />
      <main id="main">
        <Hero assignedDigits={assignedDigits} />
        <MissedCallProblem />
        <PacketWalkthrough />
        <FourStepFlow />
        <WhoItsFor />
        <TrialOffer />
        <CallRashid assignedDigits={assignedDigits} />
      </main>
      <Footer assignedDigits={assignedDigits} />
    </>
  )
}
