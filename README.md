# CallLock Homepage (private preview branch)

Private preview of the CallLock homepage for insurance-storm roofing owners
and operators. Live `calllock.co` is not replaced by this branch.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS 3
- Framer Motion

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Verification

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## CTA note

The Google Voice number is not assigned. The page shows
`[GOOGLE VOICE NUMBER PENDING]` as a disabled control that does not dial.
`NEXT_PUBLIC_GOOGLE_VOICE_NUMBER` is read only when real digits exist. Do
not set a private cell or +13126463816.
