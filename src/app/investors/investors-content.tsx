"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  AlertTriangle,
  Zap,
  DollarSign,
  Rocket,
  Target,
  ArrowRight,
  BarChart3,
  ShieldAlert,
  Store,
  Users,
} from "lucide-react";

const marketStats = [
  {
    icon: DollarSign,
    value: "$20B+",
    label: "Tax Resolution Market",
    source: "U.S. market size, 2025",
    accent: "burgundy" as const,
  },
  {
    icon: BarChart3,
    value: "$7.4B",
    label: "N. American Tax Software",
    source: "Fortune Business Insights",
    accent: "gold" as const,
  },
  {
    icon: TrendingUp,
    value: "8.3%",
    label: "Annual Growth Rate",
    source: "Globe Newswire",
    accent: "burgundy" as const,
  },
];

const problems = [
  {
    icon: Users,
    stat: "10M+",
    label: "delinquent IRS accounts — a number that grows every year",
  },
  {
    icon: DollarSign,
    stat: "$688B",
    label: "in unpaid federal tax debt outstanding",
  },
  {
    icon: ShieldAlert,
    stat: "FTC Warnings",
    label:
      "issued against predatory tax resolution firms charging high fees for poor results",
  },
  {
    icon: AlertTriangle,
    stat: "50%",
    label:
      "of Americans believe the tax system is unfair — driving demand for affordable solutions",
  },
];

const channels = [
  { name: "Amazon", icon: Store },
  { name: "Google", icon: Store },
  { name: "Walmart", icon: Store },
  { name: "Best Buy", icon: Store },
  { name: "Staples", icon: Store },
];

const statAccent = {
  burgundy: {
    border: "border-t-[#7A1C2E]",
    iconBg: "bg-[#7A1C2E]/10",
    iconColor: "text-[#7A1C2E]",
  },
  gold: {
    border: "border-t-[#C4956A]",
    iconBg: "bg-[#C4956A]/10",
    iconColor: "text-[#C4956A]",
  },
};

export function InvestorsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDFBF9] to-[#F8F9FC]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="hero-orb w-[500px] h-[500px] bg-[#C4956A]/[0.06] -top-32 -left-32 absolute" />
        <div className="hero-orb w-[400px] h-[400px] bg-[#7A1C2E]/[0.05] -bottom-24 -right-24 absolute" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge
              variant="outline"
              className="mb-6 text-gold border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            >
              Investment Opportunity
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              Invest in the Future of{" "}
              <span className="text-burgundy">Tax Resolution</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-text leading-relaxed max-w-2xl mx-auto">
              Blast Tax is poised to disrupt a $20B+ industry with the first
              affordable, direct-to-consumer tax resolution software.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* Market Size */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge
              variant="outline"
              className="mb-4 text-burgundy border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            >
              The Opportunity
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
              Market Opportunity
            </h2>
            <p className="mt-4 text-lg text-muted-text leading-relaxed">
              A massive, underserved market ready for technology-driven
              disruption.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {marketStats.map((stat, index) => {
              const Icon = stat.icon;
              const styles = statAccent[stat.accent];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className={`border-0 border-t-4 ${styles.border} shadow-lg shadow-dark/5 bg-white h-full text-center ring-0 card-hover`}>
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${styles.iconBg}`}>
                        <Icon className={`h-7 w-7 ${styles.iconColor}`} />
                      </div>
                      <div className="text-4xl sm:text-5xl font-bold text-[#7A1C2E] tracking-tight">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-base font-semibold text-dark">
                        {stat.label}
                      </div>
                      <p className="mt-2 text-xs text-muted-text">
                        Source: {stat.source}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-24 sm:py-32 bg-[#1A1A2E] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="hero-orb w-[400px] h-[400px] bg-[#7A1C2E]/20 -top-24 -right-24 absolute" />
        <div className="hero-orb w-[300px] h-[300px] bg-[#C4956A]/10 -bottom-16 -left-16 absolute" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge
              variant="outline"
              className="mb-4 text-[#FF5F57] border-[#FF5F57]/20 bg-[#FF5F57]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            >
              The Problem
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A Broken Industry
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed max-w-xl mx-auto">
              The tax resolution industry is rife with predatory practices, leaving millions underserved.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={problem.stat}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white/[0.06] backdrop-blur-sm rounded-xl p-6 h-full border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7A1C2E]/30 border border-[#7A1C2E]/20">
                        <Icon className="h-5 w-5 text-[#C4956A]" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {problem.stat}
                        </div>
                        <p className="mt-1 text-sm text-white/50 leading-relaxed">
                          {problem.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 text-gold border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                >
                  The Solution
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
                  Blast Tax
                </h2>
                <Separator className="my-6 w-20 bg-gold h-0.5" />
                <p className="text-lg text-muted-text leading-relaxed">
                  The first affordable, direct-to-consumer tax resolution
                  software suite. Blast Tax guides users step-by-step through
                  IRS resolution — Offer in Compromise, Installment Agreements,
                  Penalty Abatement, and more.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#7A1C2E]/10 to-[#7A1C2E]/5 rounded-xl p-5 border border-[#7A1C2E]/10">
                    <Zap className="h-5 w-5 text-burgundy mb-2" />
                    <div className="text-3xl font-bold text-burgundy">$299</div>
                    <div className="text-xs text-muted-text mt-1 font-medium">
                      DTC Software
                    </div>
                  </div>
                  <div className="bg-dark/[0.03] rounded-xl p-5 border border-dark/5">
                    <DollarSign className="h-5 w-5 text-dark/30 mb-2" />
                    <div className="text-3xl font-bold text-dark/20 line-through decoration-[#FF5F57]/30">
                      $3,900
                    </div>
                    <div className="text-xs text-muted-text mt-1 font-medium">
                      Traditional Firms
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Model Card */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#1A1A2E]/5 to-[#7A1C2E]/5 rounded-3xl blur-xl" />
                <div className="relative bg-[#1A1A2E] rounded-2xl p-8 text-white shadow-2xl shadow-dark/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-[#C4956A]" />
                    </div>
                    <h3 className="text-xl font-semibold">Revenue Model</h3>
                  </div>
                  <div className="space-y-0">
                    <div className="flex items-center justify-between py-4 border-b border-white/[0.08]">
                      <span className="text-white/50 text-sm">Retail Price</span>
                      <span className="font-semibold text-lg">$299</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-white/[0.08]">
                      <span className="text-white/50 text-sm">Affiliate Commission</span>
                      <span className="font-semibold text-lg">15%</span>
                    </div>
                    <div className="pt-4">
                      <span className="text-white/50 text-sm">
                        Distribution Partnerships
                      </span>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {channels.map((channel) => (
                          <span
                            key={channel.name}
                            className="px-3 py-1.5 bg-white/[0.07] hover:bg-white/[0.12] rounded-full text-xs font-medium transition-colors duration-200 border border-white/[0.06]"
                          >
                            {channel.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traction + Funding */}
      <section className="relative py-24 sm:py-32 bg-[#F8F9FC]">
        <div className="absolute inset-0 bg-dots" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-xl shadow-dark/5 bg-white h-full ring-0 card-hover">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A1C2E] to-[#9B2D42] mb-5 shadow-md shadow-[#7A1C2E]/20">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">Traction</h3>
                    <Separator className="my-4 bg-custom-border" />
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#7A1C2E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-burgundy" />
                        </div>
                        <p className="text-muted-text text-sm leading-relaxed">
                          MVP launch:{" "}
                          <span className="font-semibold text-dark">
                            April 13, 2026
                          </span>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#7A1C2E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-burgundy" />
                        </div>
                        <p className="text-muted-text text-sm leading-relaxed">
                          Full product suite across Debt, Prep, Business, and
                          Practitioner verticals
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#7A1C2E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-burgundy" />
                        </div>
                        <p className="text-muted-text text-sm leading-relaxed">
                          Built by licensed tax attorneys and aerospace engineers
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Funding */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Card className="border-0 shadow-xl shadow-dark/5 bg-white h-full ring-0 overflow-hidden relative">
                  {/* Accent border top */}
                  <div className="h-1 bg-gradient-to-r from-[#7A1C2E] via-[#C4956A] to-[#7A1C2E]" />
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#C4956A] to-[#D4A57A] mb-5 shadow-md shadow-[#C4956A]/20">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">Funding</h3>
                    <Separator className="my-4 bg-custom-border" />
                    <div className="space-y-6">
                      <div>
                        <div className="text-[10px] text-muted-text uppercase tracking-widest font-semibold">
                          Seeking
                        </div>
                        <div className="text-5xl font-bold text-burgundy mt-1 tracking-tight">
                          $7M
                        </div>
                        <div className="text-sm text-muted-text mt-1">
                          Initial investment round
                        </div>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#E8E8F0] to-transparent" />
                      <div>
                        <div className="text-[10px] text-muted-text uppercase tracking-widest font-semibold">
                          Projected Revenue
                        </div>
                        <div className="text-5xl font-bold text-dark mt-1 tracking-tight">
                          $46M+
                        </div>
                        <div className="text-sm text-muted-text mt-1">
                          In projected sales over the first three years
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A1C2E] via-[#6A1828] to-[#4A1020]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C4956A]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-8 w-12 h-1 bg-gradient-to-r from-[#C4956A] to-[#C4956A]/40 rounded-full" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to Learn More?
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              We&apos;re looking for strategic investors who share our vision of
              making tax resolution accessible to every American.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-white text-[#7A1C2E] hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-200 cursor-pointer">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
