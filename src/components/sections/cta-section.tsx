"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A1C2E] via-[#5A1522] to-[#1A1A2E]" />

      {/* Animated pulsing grid */}
      <div
        className="absolute inset-0 cta-grid-animate"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C4956A]/[0.08] rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#7A1C2E]/[0.15] rounded-full blur-[80px]" />

      {/* Radial glow at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C4956A]/[0.04] rounded-full blur-[60px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative top element */}
          <div className="mx-auto mb-6 sm:mb-8 w-16 h-1 bg-gradient-to-r from-[#C4956A]/40 via-[#C4956A] to-[#C4956A]/40 rounded-full" />

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Join the Tax Resolution
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-bold bg-gradient-to-r from-[#C4956A] via-white to-[#C4956A] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
              Revolution
            </span>
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Be part of a movement to bring affordable, technology-driven tax
            resolution to millions of Americans who need it most.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://blasttax.com" target="_blank" rel="noopener noreferrer">
              <Button className="btn-glow bg-white text-[#7A1C2E] hover:bg-white/90 rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg font-semibold transition-all duration-200 cursor-pointer">
                Try Blast Tax
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="/investors">
              <Button
                variant="outline"
                className="border-2 border-[#C4956A]/60 text-[#C4956A] hover:bg-[#C4956A]/10 hover:border-[#C4956A] rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg font-semibold bg-transparent transition-all duration-200 cursor-pointer"
              >
                Contact Investors
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {["Licensed Tax Attorneys", "SOC 2 Compliant", "IRS Authorized"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#C4956A]" />
                <span className="text-xs sm:text-sm text-white/40 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
