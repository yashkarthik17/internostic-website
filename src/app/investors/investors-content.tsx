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
  },
  {
    icon: BarChart3,
    value: "$7.4B",
    label: "N. American Tax Software",
    source: "Fortune Business Insights",
  },
  {
    icon: TrendingUp,
    value: "8.3%",
    label: "Annual Growth Rate",
    source: "Globe Newswire",
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

export function InvestorsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-alt-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <p className="mt-6 text-lg sm:text-xl text-muted-text leading-relaxed">
              Blast Tax is poised to disrupt a $20B+ industry with the first
              affordable, direct-to-consumer tax resolution software.
            </p>
          </motion.div>
        </div>
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
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="border-0 shadow-lg shadow-dark/5 bg-alt-bg h-full text-center ring-0">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-burgundy/10">
                        <Icon className="h-7 w-7 text-burgundy" />
                      </div>
                      <div className="text-4xl font-bold text-dark">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-base font-semibold text-dark">
                        {stat.label}
                      </div>
                      <p className="mt-1 text-xs text-muted-text">
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
      <section className="py-24 sm:py-32 bg-alt-bg">
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
              The Problem
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
              A Broken Industry
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                  <Card className="border-0 shadow-md bg-white h-full ring-0">
                    <CardContent className="pt-6 pb-6 px-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-burgundy/10">
                          <Icon className="h-5 w-5 text-burgundy" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-dark">
                            {problem.stat}
                          </div>
                          <p className="mt-1 text-sm text-muted-text leading-relaxed">
                            {problem.label}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="bg-burgundy/5 rounded-xl p-4">
                    <Zap className="h-5 w-5 text-burgundy mb-2" />
                    <div className="text-2xl font-bold text-burgundy">$299</div>
                    <div className="text-xs text-muted-text mt-1">
                      DTC Software
                    </div>
                  </div>
                  <div className="bg-dark/5 rounded-xl p-4">
                    <DollarSign className="h-5 w-5 text-dark/40 mb-2" />
                    <div className="text-2xl font-bold text-dark/30 line-through">
                      $3,900
                    </div>
                    <div className="text-xs text-muted-text mt-1">
                      Traditional Firms
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-dark rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Revenue Model</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-white/70">Retail Price</span>
                    <span className="font-semibold">$299</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-white/70">Affiliate Commission</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="py-3">
                    <span className="text-white/70 text-sm">
                      Distribution Partnerships
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {channels.map((channel) => (
                        <span
                          key={channel.name}
                          className="px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium"
                        >
                          {channel.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traction + Funding */}
      <section className="py-24 sm:py-32 bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Traction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-lg bg-white h-full ring-0">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 mb-5">
                      <Rocket className="h-6 w-6 text-burgundy" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">Traction</h3>
                    <Separator className="my-4 bg-custom-border" />
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-burgundy shrink-0" />
                        <p className="text-muted-text">
                          MVP launch:{" "}
                          <span className="font-semibold text-dark">
                            April 13, 2026
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-burgundy shrink-0" />
                        <p className="text-muted-text">
                          Full product suite across Debt, Prep, Business, and
                          Practitioner verticals
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-burgundy shrink-0" />
                        <p className="text-muted-text">
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
                <Card className="border-0 shadow-lg bg-white h-full ring-0">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 mb-5">
                      <Target className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">Funding</h3>
                    <Separator className="my-4 bg-custom-border" />
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-muted-text uppercase tracking-wider">
                          Seeking
                        </div>
                        <div className="text-4xl font-bold text-burgundy mt-1">
                          $7M
                        </div>
                        <div className="text-sm text-muted-text">
                          Initial investment round
                        </div>
                      </div>
                      <Separator className="bg-custom-border" />
                      <div>
                        <div className="text-sm text-muted-text uppercase tracking-wider">
                          Projected Revenue
                        </div>
                        <div className="text-4xl font-bold text-dark mt-1">
                          $46M+
                        </div>
                        <div className="text-sm text-muted-text">
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
      <section className="py-24 sm:py-32 bg-burgundy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Learn More?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              We&apos;re looking for strategic investors who share our vision of
              making tax resolution accessible to every American.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-white text-burgundy hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold shadow-lg cursor-pointer">
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
