"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calculator,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    id: "debt",
    label: "Blast Tax Debt",
    shortLabel: "Debt",
    icon: FileText,
    tagline: "Individual Tax Resolution",
    price: "$299",
    priceNote: "one-time",
    description:
      "The flagship DIY tax resolution product for individual Americans. Blast Tax Debt guides users step-by-step through every major IRS resolution program — no attorney required.",
    features: [
      "Offer in Compromise (OIC) preparation & filing",
      "Installment Agreement setup & negotiation",
      "Penalty Abatement requests",
      "Currently Not Collectible (CNC) status",
      "AI-powered eligibility analysis",
      "Guided IRS Form 656, 433-A, 9465, 843 prep",
    ],
    accentFrom: "from-[#7A1C2E]",
    accentTo: "to-[#9B2D42]",
    bgAccent: "bg-[#7A1C2E]/10",
    textAccent: "text-[#7A1C2E]",
    borderAccent: "border-[#7A1C2E]/20",
  },
  {
    id: "prep",
    label: "Blast Tax Prep",
    shortLabel: "Prep",
    icon: Calculator,
    tagline: "Delinquent Return Preparation",
    price: "$299",
    priceNote: "one-time",
    description:
      "Many Americans have years of unfiled tax returns — and the IRS won't negotiate resolution until those returns are filed. Blast Tax Prep solves this critical first step.",
    features: [
      "File up to 10 years of unfiled returns",
      "Step-by-step guided preparation",
      "Individual & business return support",
      "Required before IRS will negotiate resolution",
      "AI-assisted deduction optimization",
      "Integrated with Blast Tax Debt workflow",
    ],
    accentFrom: "from-[#C4956A]",
    accentTo: "to-[#D4A57A]",
    bgAccent: "bg-[#C4956A]/10",
    textAccent: "text-[#C4956A]",
    borderAccent: "border-[#C4956A]/20",
  },
  {
    id: "business",
    label: "Blast Tax Business",
    shortLabel: "Business",
    icon: Building2,
    tagline: "Business Tax Resolution for SMBs",
    price: "$499",
    priceNote: "one-time",
    description:
      "Small businesses face unique IRS challenges — from payroll tax issues to trust fund penalties. Blast Tax Business handles the complexity so business owners can focus on their company.",
    features: [
      "Trust Fund Recovery Penalty resolution",
      "Business Installment Agreements",
      "Payroll tax issue resolution (941, 940)",
      "Business Penalty Abatement",
      "Guided IRS Form 433-B preparation",
      "Multi-entity support for LLCs, S-Corps, partnerships",
    ],
    accentFrom: "from-[#7A1C2E]",
    accentTo: "to-[#C4956A]",
    bgAccent: "bg-[#7A1C2E]/10",
    textAccent: "text-[#7A1C2E]",
    borderAccent: "border-[#7A1C2E]/20",
  },
  {
    id: "practitioner",
    label: "Blast Tax Practitioner",
    shortLabel: "Practitioner",
    icon: Briefcase,
    tagline: "Professional-Grade Tools for Tax Firms",
    price: "$1,900",
    priceNote: "/ year",
    description:
      "Built for tax resolution professionals, CPAs, and enrolled agents who want to scale their practice. Blast Tax Practitioner provides white-label tools and automated workflows.",
    features: [
      "White-label client portal with your branding",
      "Automated IRS form generation & filing",
      "Batch case management for multiple clients",
      "Compliance tracking & audit trail",
      "Client communication tools",
      "Revenue analytics & reporting dashboard",
    ],
    accentFrom: "from-[#1A1A2E]",
    accentTo: "to-[#3A3A5E]",
    bgAccent: "bg-[#1A1A2E]/10",
    textAccent: "text-[#1A1A2E]",
    borderAccent: "border-[#1A1A2E]/20",
  },
];

export function ProductsShowcase() {
  const [activeTab, setActiveTab] = useState("debt");
  const activeProduct = products.find((p) => p.id === activeTab)!;

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FC] via-white to-[#FDFBF9]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Our Product Suite
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark tracking-tight">
            Four Products.{" "}
            <span className="text-gradient-bold">One Mission.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-text leading-relaxed max-w-2xl mx-auto">
            Blast Tax is a comprehensive suite of tax resolution software
            products — from individual debt settlement to professional-grade
            practitioner tools.
          </p>
        </motion.div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <div className="tabs-scroll justify-center sm:flex-wrap sm:flex sm:justify-center sm:gap-3">
            {products.map((product) => {
              const Icon = product.icon;
              const isActive = activeTab === product.id;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-burgundy text-white shadow-lg shadow-burgundy/25 scale-[1.02]"
                      : "bg-white text-muted-text hover:text-dark border border-custom-border hover:border-burgundy/30 hover:shadow-md hover:shadow-dark/5"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{product.label}</span>
                  <span className="sm:hidden">{product.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Product Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl shadow-dark/8 border border-[#E8E8F0]/60 overflow-hidden card-gradient-border">
              {/* Top accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${activeProduct.accentFrom} ${activeProduct.accentTo}`} />

              <div className="p-5 sm:p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
                  {/* Left side - info */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${activeProduct.accentFrom} ${activeProduct.accentTo} flex items-center justify-center shadow-md`}>
                        <activeProduct.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-dark">
                          {activeProduct.label}
                        </h3>
                        <p className="text-sm text-muted-text font-medium">
                          {activeProduct.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-base text-muted-text leading-relaxed mt-4">
                      {activeProduct.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {activeProduct.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="h-4.5 w-4.5 text-[#28C840] shrink-0 mt-0.5" />
                          <span className="text-sm text-dark/80 leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link href="https://blasttax.com" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#7A1C2E] hover:bg-[#7A1C2E]/90 text-white rounded-full px-8 h-11 text-sm font-semibold shadow-md shadow-[#7A1C2E]/20 hover:shadow-lg hover:shadow-[#7A1C2E]/25 transition-all duration-200 cursor-pointer">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right side - price card */}
                  <div className="lg:col-span-2">
                    <div className={`relative rounded-2xl p-5 sm:p-8 border ${activeProduct.borderAccent} ${activeProduct.bgAccent}`}>
                      <div className="absolute -inset-1 bg-gradient-to-br from-white/50 to-transparent rounded-2xl blur-sm" />
                      <div className="relative">
                        <div className="text-xs font-semibold text-muted-text uppercase tracking-widest mb-2">
                          Starting at
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-5xl font-bold text-burgundy tracking-tight">
                            {activeProduct.price}
                          </span>
                          <span className="text-sm text-muted-text font-medium">
                            {activeProduct.priceNote}
                          </span>
                        </div>

                        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#E8E8F0] to-transparent" />

                        <div className="mt-6 space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                            <span className="text-xs text-muted-text font-medium">No hidden fees</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                            <span className="text-xs text-muted-text font-medium">Attorney-designed workflows</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                            <span className="text-xs text-muted-text font-medium">AI-powered guidance</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                            <span className="text-xs text-muted-text font-medium">Secure & encrypted</span>
                          </div>
                        </div>

                        {/* Comparison */}
                        <div className="mt-6 bg-white rounded-xl p-4 border border-[#E8E8F0]/60 shadow-sm">
                          <div className="text-[10px] text-muted-text uppercase tracking-widest font-semibold mb-2">
                            vs. Traditional Firms
                          </div>
                          <div className="text-2xl font-bold text-dark/20 line-through decoration-[#FF5F57]/40">
                            $3,900+
                          </div>
                          <div className="text-xs text-muted-text mt-0.5">
                            Industry average (per year)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
