import { EvidencePacket } from '@/components/ui/EvidencePacket'
import { Reveal } from '@/components/ui/Reveal'

export function PacketWalkthrough() {
  return (
    <section
      id="packet"
      aria-labelledby="packet-heading"
      className="bg-stone-50 py-20 dark:bg-stone-950 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="packet-heading"
            className="max-w-[18ch] text-3xl font-semibold tracking-tight text-trust md:text-5xl dark:text-stone-50"
          >
            One packet. The facts the shop needs.
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-stone-600 dark:text-stone-400">
            Call time, homeowner, property, loss type, claim facts, street
            photo, slope photo, next action. Photos stay pending until they
            arrive.
          </p>
        </Reveal>
        <Reveal className="mt-10" delay={0.06}>
          <EvidencePacket titleId="walkthrough-packet-title" />
        </Reveal>
      </div>
    </section>
  )
}
