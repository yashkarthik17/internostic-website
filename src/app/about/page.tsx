import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About — Internostic",
  description:
    "Learn about Internostic, the technology company building Blast Tax to democratize tax resolution for millions of Americans.",
};

export default function AboutPage() {
  return <AboutContent />;
}
