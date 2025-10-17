# CallLock Homepage

A professional, high-converting landing page for CallLock - the intelligent text-back system that recovers revenue from missed calls.

## Features

- **Modern Design**: Clean, professional design with Trust Blue (#0A2540) and Action Green (#00D084) color scheme
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Interactive**: Smooth animations and scroll effects using Framer Motion
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Performance**: Built with Next.js 14 for optimal performance and SEO

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics (ready for deployment)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Update the demo phone number in `.env.local` when available.

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with SEO meta tags
│   └── page.tsx           # Main homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Header and Footer
│   └── sections/         # Homepage sections
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Sections

1. **Hero**: Main headline, sub-headline, and primary CTAs
2. **Guarantee**: The CallLock guarantee promise
3. **Positioning**: Comparison between answering services and CallLock
4. **How It Works**: 3-step process explanation
5. **ROI**: Revenue recovery math breakdown
6. **Pricing**: Two-tier pricing plans (Capture/Convert)
7. **FAQ**: Interactive accordion with common questions
8. **Final CTA**: Three clear paths to conversion

## Customization

- **Colors**: Update `tailwind.config.ts` to modify the color scheme
- **Content**: Edit individual section components in `/components/sections/`
- **Styling**: Modify global styles in `app/globals.css`

## Deployment

The site is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

Analytics are already configured and will start tracking once deployed.

## Performance

- Lighthouse score target: 90+ across all metrics
- Optimized images and fonts
- Code splitting and lazy loading
- Mobile-first responsive design
