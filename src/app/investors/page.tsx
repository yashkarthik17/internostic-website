import type { Metadata } from "next";
import { InvestorsContent } from "./investors-content";

export const metadata: Metadata = {
  title: "Investors — Internostic",
  description:
    "Explore the investment opportunity behind Blast Tax. $20B+ market, 10M+ delinquent accounts, and a revolutionary DTC software approach.",
};

export default function InvestorsPage() {
  return <InvestorsContent />;
}
