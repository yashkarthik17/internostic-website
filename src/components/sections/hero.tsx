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

function DashboardMockup() {
  return (
    <div className="bg-[#1A1A2E] rounded-2xl sm:rounded-3xl p-4 sm:p-6 mockup-glow relative">
      {/* Window chrome */}
      <div className="flex items-center gap-2 mb-4 sm:mb-5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <div className="flex-1 mx-3 h-7 bg-white/[0.07] rounded-lg flex items-center px-3">
          <span className="text-[10px] text-white/30 font-mono">app.blasttax.com/dashboard</span>
        </div>
      </div>

      <div className="flex gap-3 sm:gap-4">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-44 shrink-0 bg-white/[0.04] rounded-xl p-3 gap-1">
          <div className="text-xs font-semibold text-white/80 px-2 py-1.5 mb-1">Blast Tax</div>
          {["Dashboard", "My Cases", "Documents", "Resolution", "Payments", "Settings"].map((item, i) => (
            <div
              key={item}
              className={`text-[11px] px-2 py-1.5 rounded-md ${
                i === 0
                  ? "bg-[#7A1C2E] text-white font-medium"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-3 sm:space-y-4">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm sm:text-base font-semibold text-white">Tax Resolution Dashboard</div>
              <div className="text-[10px] sm:text-xs text-white/30 mt-0.5">Welcome back, Sarah</div>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-[#28C840]/20 text-[#28C840] text-[10px] font-medium">
              Active
            </div>
          </div>

          {/* Stat cards row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-white/[0.06] rounded-xl p-2.5 sm:p-3.5">
              <div className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-wider">Total Debt</div>
              <div className="text-base sm:text-xl font-bold text-white mt-1">$24,800</div>
              <div className="text-[9px] sm:text-[10px] text-[#FF5F57] mt-0.5">IRS Balance</div>
            </div>
            <div className="bg-white/[0.06] rounded-xl p-2.5 sm:p-3.5">
              <div className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-wider">Settlement</div>
              <div className="text-base sm:text-xl font-bold text-[#28C840] mt-1">$4,200</div>
              <div className="text-[9px] sm:text-[10px] text-white/30 mt-0.5">Projected OIC</div>
            </div>
            <div className="bg-white/[0.06] rounded-xl p-2.5 sm:p-3.5">
              <div className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-wider">Savings</div>
              <div className="text-base sm:text-xl font-bold text-[#C4956A] mt-1">83%</div>
              <div className="text-[9px] sm:text-[10px] text-white/30 mt-0.5">vs. Traditional</div>
            </div>
          </div>

          {/* Progress section */}
          <div className="bg-white/[0.04] rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] sm:text-xs font-medium text-white/60">Resolution Progress</span>
              <span className="text-[10px] text-white/30">Step 3 of 5</span>
            </div>
            <div className="w-full h-2 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full w-3/5 bg-gradient-to-r from-[#7A1C2E] to-[#C4956A] rounded-full" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["OIC", "IA", "CNC", "Penalty Abatement", "Lien Release"].map((option, i) => (
                <span
                  key={option}
                  className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    i === 0
                      ? "bg-[#7A1C2E] text-white"
                      : i < 3
                      ? "bg-white/[0.08] text-white/50"
                      : "bg-white/[0.04] text-white/25"
                  }`}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-[#7A1C2E]/30 to-[#7A1C2E]/10 rounded-xl p-3 sm:p-3.5">
              <div className="text-[10px] text-white/40 mb-1.5">Next Step</div>
              <div className="text-[11px] sm:text-xs font-medium text-white/80">Submit Financial</div>
              <div className="text-[11px] sm:text-xs font-medium text-white/80">Disclosure (433-A)</div>
            </div>
            <div className="bg-gradient-to-br from-[#C4956A]/20 to-[#C4956A]/5 rounded-xl p-3 sm:p-3.5">
              <div className="text-[10px] text-white/40 mb-1.5">Documents</div>
              <div className="text-[11px] sm:text-xs font-medium text-white/80">4 of 6 uploaded</div>
              <div className="mt-1.5 flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className={`h-1 flex-1 rounded-full ${
                      n <= 4 ? "bg-[#C4956A]" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification overlay */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-2 sm:-right-4 top-1/3 bg-white rounded-xl shadow-2xl shadow-black/20 p-3 sm:p-3.5 w-48 sm:w-56 border border-gray-100"
      >
        <div className="flex items-start gap-2.5">
          <div className="h-7 w-7 rounded-full bg-[#28C840]/10 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-[#28C840]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <div className="text-[11px] font-semibold text-[#1A1A2E]">OIC Pre-Qualification</div>
            <div className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">You may qualify for a reduced settlement.</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const [activeTab, setActiveTab] = useState("debt");
  const activeProduct = products.find((p) => p.id === activeTab)!;

  return (
    <section className="relative overflow-hidden" id="products">
      {/* Rich background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDFBF9] to-[#F8F4F0]" />

      {/* Gradient orbs */}
      <div className="hero-orb w-[600px] h-[600px] bg-[#7A1C2E]/[0.06] -top-48 -left-48 absolute" />
      <div className="hero-orb w-[500px] h-[500px] bg-[#C4956A]/[0.08] -bottom-32 -right-32 absolute" />
      <div className="hero-orb w-[300px] h-[300px] bg-[#7A1C2E]/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

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
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-burgundy text-white shadow-lg shadow-burgundy/25 scale-[1.02]"
                      : "bg-white text-muted-text hover:text-dark border border-custom-border hover:border-burgundy/30 hover:shadow-md hover:shadow-dark/5"
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
          className="mt-14 max-w-5xl mx-auto relative"
        >
          <DashboardMockup />

          {/* Reflection glow under mockup */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#7A1C2E]/[0.06] blur-2xl rounded-full" />
        </motion.div>
      </div>

      {/* Section bottom divider */}
      <div className="section-divider" />
    </section>
  );
}
