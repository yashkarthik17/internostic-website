"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Cpu, DollarSign, Heart } from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Built by Tax Attorneys",
    description:
      "Every workflow in Blast Tax was designed by licensed tax attorneys and CPAs with 55+ years of combined experience. Our team has personally handled thousands of IRS cases — that expertise is embedded into every step of the software.",
    accent: "from-[#7A1C2E] to-[#9B2D42]",
    shadowColor: "shadow-[#7A1C2E]/15",
  },
  {
    icon: Cpu,
    title: "Technology-First Approach",
    description:
      "AI-powered eligibility analysis, cloud-based infrastructure, secure encryption, and intuitive UX design. We leverage modern technology to make complex IRS processes simple, fast, and accessible from any device.",
    accent: "from-[#C4956A] to-[#D4A57A]",
    shadowColor: "shadow-[#C4956A]/15",
  },
  {
    icon: DollarSign,
    title: "Direct-to-Consumer",
    description:
      "No middlemen. No call centers. No hidden fees. Blast Tax is sold directly to the people who need it at a flat $299 — eliminating the layers of markup and commission that inflate the cost of traditional tax resolution.",
    accent: "from-[#7A1C2E] to-[#C4956A]",
    shadowColor: "shadow-[#7A1C2E]/15",
  },
  {
    icon: Heart,
    title: "Mission-Driven",
    description:
      "We exist because tax resolution should be accessible to every American — not just those who can afford thousands in professional fees. Our mission is to democratize an industry that has historically profited from people's fear and confusion.",
    accent: "from-[#C4956A] to-[#7A1C2E]",
    shadowColor: "shadow-[#C4956A]/15",
  },
];

export function WhyInternostic() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FC] via-white to-white" />
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Decorative orbs */}
      <div className="hero-orb w-[500px] h-[500px] bg-[#7A1C2E]/[0.04] -top-32 left-1/4 absolute" />
      <div className="hero-orb w-[400px] h-[400px] bg-[#C4956A]/[0.05] -bottom-24 right-1/4 absolute" />

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
            Why Internostic
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark tracking-tight">
            What Sets Us{" "}
            <span className="text-gradient-bold">Apart</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-text leading-relaxed max-w-2xl mx-auto">
            We combine deep tax expertise with cutting-edge technology to
            deliver a product that no one else in the industry can match.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg shadow-dark/5 bg-white h-full ring-0 card-hover card-gradient-border card-glow group">
                  <CardContent className="pt-6 pb-6 px-5 sm:pt-8 sm:pb-8 sm:px-8">
                    <div className={`mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.accent} shadow-lg ${reason.shadowColor} group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark mb-2 sm:mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#7A1C2E] to-[#4A1020] rounded-2xl p-6 sm:p-10 text-center shadow-xl shadow-[#7A1C2E]/15">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              {[
                { value: "55+", label: "Years Experience" },
                { value: "4", label: "Product Suite" },
                { value: "10+", label: "IRS Forms Covered" },
                { value: "$299", label: "Starting Price" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-sm text-white/50 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
