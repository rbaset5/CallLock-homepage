import { CallRashid, Section, SectionHead } from "./primitives";

export function FinalCta() {
  return (
    <Section marker="Call Rashid" tone="ink" texture>
      <SectionHead
        tone="ink"
        title="Find out how many calls you're missing."
        lede="Call Rashid. Tell him what you do and roughly how many calls go to voicemail. He'll tell you straight whether CallLock makes sense."
      />
      <div className="mt-10">
        <CallRashid tone="ink" note="Live number. It rings Rashid." />
      </div>
    </Section>
  );
}
