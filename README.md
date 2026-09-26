# CallLock homepage

CallLock answers the calls you miss, gets the caller's details, and sends them
to you right away so you can lock in the job. For trade and service businesses.

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

Paper is a cold green-grey (`#e8ebe4`) over ink (`#171a17`). The single accent
(`#c9006a`) marks the live phone line. Type is Big Shoulders for display,
Public Sans for body, and IBM Plex Mono for labels and figures.

## Content

Page copy lives in `src/components/site`. Call Rashid is live at (734) 331-0162
(`tel:+17343310162`). The header, footer, and Call Rashid plates dial that
number.
