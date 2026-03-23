"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "James Jones",
    role: "Founder & CEO",
    initials: "JJ",
    bio: "Serial entrepreneur with a track record of building and scaling technology companies.",
    detail: "Venture Building & Strategy",
  },
  {
    name: "Yash Karthik",
    role: "CEO / CTO",
    initials: "YK",
    bio: "Defense Aerospace + AI Automation background with 5 years in Tax Resolution technology.",
    detail: "Product & Engineering",
  },
  {
    name: "Victor Latham",
    role: "Sr. Tax Attorney",
    initials: "VL",
    bio: "30 years of experience in tax law and IRS negotiations — a recognized authority in the field.",
    detail: "Legal & Compliance",
  },
  {
    name: "Edward Korducki",
    role: "Tax Attorney & CPA",
    initials: "EK",
    bio: "25+ years of combined tax attorney and CPA experience in complex resolution cases.",
    detail: "Tax Strategy & Resolution",
  },
];

export function Team() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F8F9FC]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 text-burgundy border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            Leadership
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark tracking-tight">
            Our Team
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-text leading-relaxed">
            Industry veterans and technologists united by a single mission: making
            tax resolution accessible to all.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg shadow-dark/5 bg-white h-full text-center ring-0 card-hover card-gradient-border card-glow group">
                <CardContent className="pt-5 pb-5 px-3 sm:pt-8 sm:pb-8 sm:px-6">
                  {/* Gradient avatar */}
                  <div className="mx-auto mb-3 sm:mb-5 flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#7A1C2E] to-[#C4956A] shadow-lg shadow-[#7A1C2E]/20 group-hover:shadow-xl group-hover:shadow-[#7A1C2E]/25 transition-shadow duration-300">
                    <span className="text-lg sm:text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-dark">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-burgundy">
                    {member.role}
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-[11px] text-muted-text/70 uppercase tracking-wider font-medium">
                    {member.detail}
                  </p>
                  <div className="my-3 sm:my-4 h-px bg-gradient-to-r from-transparent via-custom-border to-transparent" />
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed line-clamp-4 sm:line-clamp-none">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
