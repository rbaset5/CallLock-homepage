import { Fit } from "@/components/site/fit";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Intake } from "@/components/site/intake";
import { Loss } from "@/components/site/loss";
import { Packet } from "@/components/site/packet";
import { TopBar } from "@/components/site/top-bar";
import { Trial } from "@/components/site/trial";

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
      <main id="main" className="flex-1 scroll-mt-20">
        <Hero />
        <Loss />
        <Packet />
        <Intake />
        <Fit />
        <Trial />
      </main>
      <Footer />
    </>
  );
}
