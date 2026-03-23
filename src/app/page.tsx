import { Hero } from "@/components/sections/hero";
import { MarketStats } from "@/components/sections/market-stats";
import { Team } from "@/components/sections/team";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketStats />
      <Team />
      <CTASection />
    </>
  );
}
