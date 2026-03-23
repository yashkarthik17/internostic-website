"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A1C2E] via-[#6A1828] to-[#4A1020]" />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C4956A]/[0.08] rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[80px]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative top element */}
          <div className="mx-auto mb-8 w-12 h-1 bg-gradient-to-r from-[#C4956A] to-[#C4956A]/40 rounded-full" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Join the Tax Resolution
            <br className="hidden sm:block" /> Revolution
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Be part of a movement to bring affordable, technology-driven tax
            resolution to millions of Americans who need it most.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://blasttax.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-[#7A1C2E] hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-200 cursor-pointer">
                Try Blast Tax
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/investors">
              <Button
                variant="outline"
                className="border-2 border-[#C4956A]/60 text-[#C4956A] hover:bg-[#C4956A]/10 hover:border-[#C4956A] rounded-full px-8 h-12 text-base font-semibold bg-transparent transition-all duration-200 cursor-pointer"
              >
                Contact Investors
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {["Licensed Tax Attorneys", "SOC 2 Compliant", "IRS Authorized"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#C4956A]" />
                <span className="text-xs sm:text-sm text-white/40 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
