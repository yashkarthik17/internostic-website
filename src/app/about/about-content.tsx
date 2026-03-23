"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Heart, Shield, Eye } from "lucide-react";

const team = [
  {
    name: "James Jones",
    role: "Founder & CEO",
    initials: "JJ",
    bio: "Serial entrepreneur with deep expertise in building and scaling technology ventures. James founded Internostic with the vision of democratizing tax resolution, bringing Silicon Valley innovation to an industry that has long resisted change.",
  },
  {
    name: "Yash Karthik",
    role: "CEO / CTO",
    initials: "YK",
    bio: "With a background in Defense Aerospace engineering, AI automation, and 5 years of hands-on experience in tax resolution technology, Yash architects the Blast Tax platform and leads product development and company operations.",
  },
  {
    name: "Victor Latham",
    role: "Sr. Tax Attorney",
    initials: "VL",
    bio: "A recognized authority in tax law with 30 years of experience negotiating with the IRS. Victor ensures every Blast Tax workflow meets the highest standards of legal compliance and effectiveness.",
  },
  {
    name: "Edward Korducki",
    role: "Tax Attorney & CPA",
    initials: "EK",
    bio: "With 25+ years as both a tax attorney and CPA, Edward brings unmatched dual expertise to complex resolution cases. His insights shape the core resolution logic within Blast Tax.",
  },
  {
    name: "Stephanie Miyamoto",
    role: "Operations Manager",
    initials: "SM",
    bio: "Stephanie oversees day-to-day operations and ensures seamless execution across all departments. Her organizational expertise keeps Internostic running efficiently as the company scales.",
  },
  {
    name: "Destinie Lanford",
    role: "Client Relations Manager",
    initials: "DL",
    bio: "Destinie leads client engagement and support, ensuring every user has a positive experience with Blast Tax. Her deep understanding of client needs drives continuous product improvements.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We challenge the status quo with technology that makes complex tax resolution simple and accessible.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description:
      "Every American deserves affordable access to tax resolution — regardless of income or background.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "We build products guided by licensed tax attorneys and CPAs, ensuring accuracy and compliance at every step.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden fees, no predatory pricing. Our users always know exactly what they're paying for and why.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
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
              className="mb-6 text-burgundy border-burgundy/20 bg-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            >
              About Internostic
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              The Company Behind{" "}
              <span className="text-burgundy">Blast Tax</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-text leading-relaxed">
              Founded to democratize tax resolution, Internostic is building
              technology that puts the power back in the hands of everyday
              Americans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
                  Our Mission
                </h2>
                <Separator className="my-6 w-20 bg-gold h-0.5" />
                <p className="text-lg text-muted-text leading-relaxed">
                  We believe every American deserves affordable access to tax
                  resolution — not just those who can afford $3,900 for
                  professional help.
                </p>
                <p className="mt-4 text-lg text-muted-text leading-relaxed">
                  The tax resolution industry has been plagued by predatory
                  pricing, misleading advertising, and outright scams. The FTC
                  has issued multiple warnings about companies that charge
                  thousands of dollars for services that often fail to deliver.
                </p>
                <p className="mt-4 text-lg text-muted-text leading-relaxed">
                  Internostic was founded to change this. We combine
                  cutting-edge AI technology with decades of tax expertise to
                  build software that guides Americans through IRS resolution
                  — at a fraction of the traditional cost.
                </p>
              </div>
              <div className="bg-warm-bg rounded-2xl p-8 sm:p-10">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-burgundy">$299</div>
                    <div className="text-sm text-muted-text mt-1">
                      Blast Tax — DIY Resolution
                    </div>
                  </div>
                  <Separator className="bg-custom-border" />
                  <div>
                    <div className="text-4xl font-bold text-dark/30 line-through">
                      $3,900
                    </div>
                    <div className="text-sm text-muted-text mt-1">
                      Industry Average — Traditional Firms
                    </div>
                  </div>
                  <div className="bg-burgundy/10 rounded-xl p-4">
                    <p className="text-sm font-medium text-burgundy">
                      That&apos;s 92% less than traditional tax resolution services
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-text leading-relaxed">
              The principles that guide everything we build.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg shadow-dark/5 bg-white h-full ring-0">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10">
                        <Icon className="h-6 w-6 text-burgundy" />
                      </div>
                      <h3 className="text-lg font-semibold text-dark">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-text leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-muted-text leading-relaxed">
              Industry veterans, technologists, and operators building the future
              of tax resolution.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg shadow-dark/5 bg-white h-full ring-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="pt-8 pb-8 px-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-warm-bg">
                        <span className="text-xl font-bold text-burgundy">
                          {member.initials}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-dark">
                          {member.name}
                        </h3>
                        <p className="text-sm font-medium text-burgundy">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-text leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
