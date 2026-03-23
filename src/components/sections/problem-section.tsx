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
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F4F0] via-white to-[#F8F9FC]" />
      <div className="absolute inset-0 bg-dots opacity-40" />

      {/* Decorative orbs */}
      <div className="hero-orb w-[400px] h-[400px] bg-[#7A1C2E]/[0.04] -top-24 -left-24 absolute" />
      <div className="hero-orb w-[300px] h-[300px] bg-[#C4956A]/[0.06] -bottom-16 -right-16 absolute" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-[#FF5F57] border-[#FF5F57]/20 bg-[#FF5F57]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            The Problem We&apos;re Solving
          </Badge>
        </motion.div>

        {/* Image + Text Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#7A1C2E]/[0.06] to-[#C4956A]/[0.06] rounded-3xl blur-xl" />
            <div className="relative">
              <Image
                src="/irs-forms.png"
                alt="MacBook displaying IRS.gov Forms page on a desk with coffee and papers in a warm cafe setting"
                width={800}
                height={500}
                className="rounded-2xl shadow-2xl shadow-dark/20 border border-white/60"
              />
              {/* Floating badge overlay */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-xl shadow-dark/15 p-4 border border-[#E8E8F0]/60">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#FF5F57]/10 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-[#FF5F57]" />
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
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight leading-tight">
              Tax Resolution Is a $20 Billion Industry —{" "}
              <span className="text-burgundy">And It&apos;s Broken</span>
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-base text-muted-text leading-relaxed">
                The FTC has issued repeated warnings about <strong className="text-dark">800-number tax resolution firms</strong> that charge Americans thousands of dollars upfront — only to deliver little or nothing in return. These firms prey on vulnerable taxpayers, making promises they can&apos;t keep.
              </p>
              <p className="text-base text-muted-text leading-relaxed">
                The truth is stark: <strong className="text-dark">99% of people don&apos;t qualify</strong> for the programs these firms advertise. The average cost of professional tax resolution is <strong className="text-burgundy">$3,900 per year</strong> — far out of reach for most Americans who need it.
              </p>
              <p className="text-base text-muted-text leading-relaxed">
                <strong className="text-dark">Blast Tax changes everything.</strong> Professional-grade tax resolution software, guided by licensed attorneys, for just{" "}
                <span className="inline-flex items-center gap-1 bg-[#7A1C2E]/10 text-burgundy font-bold px-2 py-0.5 rounded-md text-sm">$299</span>
                .
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-md shadow-dark/5 border border-[#E8E8F0]/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-7 w-7 rounded-lg bg-[#7A1C2E]/10 flex items-center justify-center">
                        <Icon className="h-3.5 w-3.5 text-burgundy" />
                      </div>
                      <span className="text-xl font-bold text-burgundy">{stat.value}</span>
                    </div>
                    <p className="text-xs text-muted-text leading-relaxed">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
