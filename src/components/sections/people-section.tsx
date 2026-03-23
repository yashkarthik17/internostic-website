"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const overlayStats = [
  { value: "18.6M", label: "Americans need help" },
  { value: "$17,000+", label: "Average tax debt" },
  { value: "$299", label: "Our price" },
];

export function PeopleSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF9] via-white to-[#F8F9FC]" />
      <div className="absolute inset-0 bg-grid opacity-25" />

      {/* Decorative orbs */}
      <div className="hero-orb w-[500px] h-[500px] bg-[#C4956A]/[0.06] -top-32 -right-32 absolute" />
      <div className="hero-orb w-[400px] h-[400px] bg-[#7A1C2E]/[0.04] -bottom-24 -left-24 absolute" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-gold border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            Empowering Real People
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            Technology Built for{" "}
            <span className="text-burgundy">Everyone</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-text leading-relaxed max-w-2xl mx-auto">
            From the single parent managing back taxes to the small business
            owner facing IRS collections — Blast Tax gives every American access
            to professional-grade tax resolution tools at a fraction of the cost.
          </p>
        </motion.div>

        {/* Image + Stats Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Image with overlay stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#7A1C2E]/[0.06] to-[#C4956A]/[0.08] rounded-3xl blur-xl" />
            <div className="relative">
              <Image
                src="/team-photo.png"
                alt="Three diverse professionals smiling, one holding a tablet showing a tax summary application"
                width={800}
                height={500}
                className="rounded-2xl shadow-2xl shadow-dark/20"
              />

              {/* Floating stat cards overlapping image */}
              <div className="absolute -bottom-6 left-4 right-4 sm:left-8 sm:right-8 flex gap-3 sm:gap-4">
                {overlayStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex-1 bg-white rounded-xl shadow-xl shadow-dark/15 p-3 sm:p-4 border border-[#E8E8F0]/60 text-center backdrop-blur-sm"
                  >
                    <div className="text-lg sm:text-2xl font-bold text-burgundy tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-text font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 mt-8 lg:mt-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight leading-tight">
              Tax debt shouldn&apos;t be a{" "}
              <span className="text-burgundy">life sentence</span>
            </h3>

            <div className="mt-6 space-y-4">
              <p className="text-base text-muted-text leading-relaxed">
                Over <strong className="text-dark">18 million Americans</strong>{" "}
                owe money to the IRS. The average tax debt exceeds{" "}
                <strong className="text-dark">$17,000</strong>. For most, the
                path to resolution means choosing between hiring a firm they
                can&apos;t afford or ignoring the problem entirely.
              </p>
              <p className="text-base text-muted-text leading-relaxed">
                Blast Tax gives them a third option:{" "}
                <strong className="text-burgundy">
                  professional-grade software at $299
                </strong>{" "}
                that walks them through the exact same resolution processes that
                attorneys charge thousands for.
              </p>
              <p className="text-base text-muted-text leading-relaxed">
                Every workflow in Blast Tax was designed by licensed tax attorneys
                with <strong className="text-dark">55+ years of combined experience</strong>,
                ensuring accuracy and compliance at every step.
              </p>
            </div>

            {/* Social proof strip */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              {["Licensed Attorneys", "IRS Compliant", "SOC 2 Secure"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                    <span className="text-xs text-muted-text font-medium">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
