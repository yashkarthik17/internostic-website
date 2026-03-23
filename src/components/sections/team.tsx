"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "James Jones",
    role: "Founder & CEO",
    initials: "JJ",
    bio: "Serial entrepreneur with a track record of building and scaling technology companies.",
  },
  {
    name: "Yash Karthik",
    role: "CEO / CTO",
    initials: "YK",
    bio: "Defense Aerospace + AI Automation background with 5 years in Tax Resolution technology.",
  },
  {
    name: "Victor Latham",
    role: "Sr. Tax Attorney",
    initials: "VL",
    bio: "30 years of experience in tax law and IRS negotiations — a recognized authority in the field.",
  },
  {
    name: "Edward Korducki",
    role: "Tax Attorney & CPA",
    initials: "EK",
    bio: "25+ years of combined tax attorney and CPA experience in complex resolution cases.",
  },
];

export function Team() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-text leading-relaxed">
            Industry veterans and technologists united by a single mission: making
            tax resolution accessible to all.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg shadow-dark/5 bg-white h-full text-center ring-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-warm-bg">
                    <span className="text-2xl font-bold text-burgundy">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-burgundy">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-text leading-relaxed">
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
