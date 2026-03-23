"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, DollarSign, Users, ShieldAlert } from "lucide-react";

const stats = [
  {
    icon: ShieldAlert,
    value: "800+",
    label: "FTC complaints about tax resolution scams annually",
  },
  {
    icon: Users,
    value: "50%",
    label: "of Americans think the tax system is unfair",
  },
  {
    icon: AlertTriangle,
    value: "99%",
    label: "don't qualify for programs advertised by scam firms",
  },
  {
    icon: DollarSign,
    value: "$3,900",
    label: "average cost of professional tax resolution per year",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-[#1A1A2E]">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Decorative orbs */}
      <div className="hero-orb w-[400px] h-[400px] bg-[#7A1C2E]/20 -top-24 -left-24 absolute" />
      <div className="hero-orb w-[300px] h-[300px] bg-[#C4956A]/10 -bottom-16 -right-16 absolute" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-[#FF5F57] border-[#FF5F57]/20 bg-[#FF5F57]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            The Problem We&apos;re Solving
          </Badge>
        </motion.div>

        {/* Image + Text Split — stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image — full-width on mobile, on top */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#7A1C2E]/20 to-[#C4956A]/10 rounded-3xl blur-xl" />
            <div className="relative">
              <Image
                src="/irs-forms.png"
                alt="MacBook displaying IRS.gov Forms page on a desk with coffee and papers in a warm cafe setting"
                width={800}
                height={500}
                className="rounded-2xl shadow-2xl shadow-black/40 border border-white/10 w-full"
              />
              {/* Floating badge overlay */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-xl shadow-black/20 p-3 sm:p-4 border border-[#E8E8F0]/60">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#FF5F57]/10 flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-[#FF5F57]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-dark">Industry Warning</div>
                    <div className="text-[10px] text-muted-text">FTC Consumer Alert Active</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-2 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Tax Resolution Is a $20 Billion Industry —{" "}
              <span className="text-[#C4956A]">And It&apos;s Broken</span>
            </h2>

            <div className="mt-5 sm:mt-6 space-y-4">
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                The FTC has issued repeated warnings about <strong className="text-white/90">800-number tax resolution firms</strong> that charge Americans thousands of dollars upfront — only to deliver little or nothing in return. These firms prey on vulnerable taxpayers, making promises they can&apos;t keep.
              </p>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                The truth is stark: <strong className="text-white/90">99% of people don&apos;t qualify</strong> for the programs these firms advertise. The average cost of professional tax resolution is <strong className="text-[#C4956A]">$3,900 per year</strong> — far out of reach for most Americans who need it.
              </p>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                <strong className="text-white/90">Blast Tax changes everything.</strong> Professional-grade tax resolution software, guided by licensed attorneys, for just{" "}
                <span className="inline-flex items-center gap-1 bg-[#7A1C2E]/50 text-[#C4956A] font-bold px-2 py-0.5 rounded-md text-sm border border-[#7A1C2E]/30">$299</span>
                .
              </p>
            </div>

            {/* Stats Grid — 2-col on mobile, with glow borders */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="bg-white/[0.06] backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/[0.08] hover:bg-white/[0.1] hover:border-[#C4956A]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-[#7A1C2E]/40 flex items-center justify-center border border-[#7A1C2E]/30">
                        <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C4956A]" />
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-[#C4956A] group-hover:text-white transition-colors">{stat.value}</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-white/40 leading-relaxed">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave separator at bottom */}
      <div className="wave-separator-to-light absolute bottom-0 left-0 right-0" />
    </section>
  );
}
