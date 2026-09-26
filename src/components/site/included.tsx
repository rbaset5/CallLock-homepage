import { Section, SectionHead } from "./primitives";

const items = [
  "Answers your missed, overflow, and after-hours calls as your business",
  "You keep your own number (it works through call forwarding)",
  "Up to 10 calls at once, 24/7 if you want it",
  "Caller's name, number, address, what they need, and when, every time",
  "Answers common questions from your business's own info",
  "Shares your price ranges if you want it to (final price is always set on site)",
  "Emergency handling: 911 line and ringing several of your people at once",
  "Email summary of every call, plus text alerts if you want them",
  "Every call recorded, with logs, transcripts, and recordings on your dashboard",
  "Details pushed into your CRM if you use one",
  "Setup done for you, with about 100 test calls before it goes live, and we watch your calls for the first month or two",
  "Later, it gets set up around your process: text-back to hang-ups, booking straight onto your calendar, live transfer, dispatch",
];

export function Included() {
  return (
    <Section id="included" marker="What's included">
      <SectionHead title="What's included" />

      <ul className="mt-12 columns-1 border-t border-rule-strong lg:columns-2 lg:gap-x-16">
        {items.map((item) => (
          <li
            key={item}
            className="break-inside-avoid border-b border-rule py-4 text-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
