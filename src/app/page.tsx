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
      <ProblemSection />
      <MarketStats />
      <ProductsShowcase />
      <PeopleSection />
      <Team />
      <WhyInternostic />
      <CTASection />
    </>
  );
}
