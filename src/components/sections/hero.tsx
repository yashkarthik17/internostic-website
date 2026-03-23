"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calculator,
  Building2,
  Briefcase,
} from "lucide-react";

const products = [
  {
    id: "debt",
    label: "Blast Tax Debt",
    icon: FileText,
    description:
      "DIY tax resolution software that guides Americans through IRS debt settlement — Offer in Compromise, Installment Agreements, Penalty Abatement, and more. Starting at $299.",
  },
  {
    id: "prep",
    label: "Blast Tax Prep",
    icon: Calculator,
    description:
      "Affordable tax preparation for individuals and families. Simple interface, maximum deductions, powered by AI-driven accuracy checks.",
  },
  {
    id: "business",
    label: "Business",
    icon: Building2,
    description:
      "Business tax resolution and compliance tools for small businesses, partnerships, and S-Corps dealing with IRS debt and unfiled returns.",
  },
  {
    id: "practitioner",
    label: "Practitioner",
    icon: Briefcase,
    description:
      "White-label platform for tax professionals, CPAs, and enrolled agents to scale their resolution practice with automated workflows.",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState("debt");
  const activeProduct = products.find((p) => p.id === activeTab)!;

  return (
    <section className="relative overflow-hidden" id="products">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-warm-bg" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-6 text-burgundy border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            Introducing Blast Tax
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-[1.1]">
            Empowering Americans to{" "}
            <br className="hidden sm:block" />
            Resolve Their{" "}
            <span className="relative inline-block text-burgundy">
              Tax Debt
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C40 2 80 2 100 5C120 8 160 8 198 3"
                  stroke="#C4956A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-text max-w-2xl mx-auto leading-relaxed"
          >
            Internostic builds Blast Tax — the first affordable DIY tax
            resolution software suite for millions of Americans.
          </motion.p>
        </motion.div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 max-w-3xl mx-auto"
        >
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {products.map((product) => {
              const Icon = product.icon;
              const isActive = activeTab === product.id;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-burgundy text-white shadow-lg shadow-burgundy/20"
                      : "bg-white text-muted-text hover:text-dark border border-custom-border hover:border-burgundy/30"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{product.label}</span>
                  <span className="sm:hidden">{product.label.replace("Blast Tax ", "")}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-muted-text text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                {activeProduct.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* App Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="bg-dark rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl shadow-dark/30">
            <div className="space-y-4">
              {/* Top bar mockup */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <div className="flex-1 mx-4 h-7 bg-white/10 rounded-lg" />
              </div>
              {/* Stacked UI elements */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="col-span-2 h-32 sm:h-44 bg-gradient-to-br from-burgundy/30 to-burgundy/10 rounded-xl" />
                <div className="h-32 sm:h-44 bg-gradient-to-br from-gold/30 to-gold/10 rounded-xl" />
              </div>
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                <div className="h-20 sm:h-28 bg-white/5 rounded-xl" />
                <div className="h-20 sm:h-28 bg-white/5 rounded-xl" />
                <div className="h-20 sm:h-28 bg-white/5 rounded-xl" />
                <div className="h-20 sm:h-28 bg-white/5 rounded-xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
