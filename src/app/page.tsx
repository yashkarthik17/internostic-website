import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { MarketStats } from "@/components/sections/market-stats";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { PeopleSection } from "@/components/sections/people-section";
import { Team } from "@/components/sections/team";
import { WhyInternostic } from "@/components/sections/why-internostic";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Wave transition into dark problem section */}
      <div className="wave-separator wave-separator-dark" />
      <ProblemSection />
      {/* Problem section has its own wave-separator-to-light at bottom */}
      <MarketStats />
      {/* Gold accent divider */}
      <div className="gold-divider max-w-3xl mx-auto" />
      <ProductsShowcase />
      <PeopleSection />
      <Team />
      {/* Gold accent divider before Why Internostic */}
      <div className="gold-divider max-w-3xl mx-auto" />
      <WhyInternostic />
      <CTASection />
    </>
  );
}
