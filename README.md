# CallLock homepage

A redesign of the CallLock private-preview homepage. CallLock answers the hail
and wind calls a roofing shop cannot reach, runs intake, and sends one evidence
packet to the shop inbox.

## Run it locally

```bash
npm install
npm run dev -- --port 43711
```

Then open http://127.0.0.1:43711.

No environment variables, credentials, or services are needed. The page is
static and renders entirely from content in `src/components/site`.

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Dev server with hot reload            |
| `npm run build` | Production build                      |
| `npm start`     | Serve the production build            |
| `npm run lint`  | ESLint, including the React Hooks rules |

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4, and shadcn/ui for button
primitives. Fonts load through `next/font`.

## Design notes

The palette comes from the weather the product exists for. Hail-filled clouds
scatter green, so the paper is a cold green-grey (`#e8ebe4`) rather than a warm
cream, over wet-slate ink (`#171a17`). The single accent (`#c9006a`) is the
magenta a hail core throws on weather radar, and it is spent only on what is
missing or lost: unanswered calls, the pending phone number, the packet stamp.

Insurance work is document work, so the page is laid out as a field-issued claim
form — lettered sections, a binder-spine gutter, and a hairline margin rule.
Numbering appears only where sequence is real: the eight packet fields in the
order intake asks for them, and the four steps of a call.

Type is Big Shoulders (a condensed face built for Chicago municipal signage) for
display, Public Sans (the US Web Design System face, so prose carries
government-form DNA) for body, and IBM Plex Mono for field labels, timestamps,
and form fill.

The signature element is the packet in section B. As it scrolls into view it
fills its labels top to bottom in intake order, then refuses to fill a single
value — every value line stays ruled and empty, stamped `NO COMPLETED JOB
SHOWN`. The preview's honesty constraint is the memorable moment rather than a
disclaimer buried in small print.

## Content constraints

The live preview has rules that the design has to hold to:

- No completed job, real claim, or real call record is shown anywhere.
- Packet values stay empty and photo slots stay pending.
- The Google Voice number is not assigned, so nothing on the page dials. The
  phone number is drawn as an unfilled field in the same language as the packet.
- The trial is $0 for 90 days, with no public rate card.
