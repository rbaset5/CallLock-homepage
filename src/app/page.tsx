import { DoTheMath } from "@/components/site/do-the-math";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Included } from "@/components/site/included";
import { Pricing } from "@/components/site/pricing";
import { TopBar } from "@/components/site/top-bar";
import { WhoItsFor } from "@/components/site/who-its-for";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="stencil sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <TopBar />
      <main id="main" className="flex-1 scroll-mt-32">
        <Hero />
        <HowItWorks />
        <WhoItsFor />
        <DoTheMath />
        <Pricing />
        <Included />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
