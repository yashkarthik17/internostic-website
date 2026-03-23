"use client";

import Image from "next/image";
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
    bio: "Serial entrepreneur with deep expertise in building and scaling technology ventures. James founded Internostic with the vision of democratizing tax resolution, bringing Silicon Valley innovation to an industry that has long resisted change. His track record includes multiple successful exits and a passion for building products that serve underserved markets.",
  },
  {
    name: "Yash Karthik",
    role: "CEO / CTO",
    initials: "YK",
    bio: "With a background in Defense Aerospace engineering, AI automation, and 5 years of hands-on experience in tax resolution technology, Yash architects the Blast Tax platform and leads product development and company operations. He brings a rare combination of systems engineering discipline and startup agility to every aspect of the product.",
  },
  {
    name: "Victor Latham",
    role: "Sr. Tax Attorney",
    initials: "VL",
    bio: "A recognized authority in tax law with 30 years of experience negotiating with the IRS. Victor has personally handled thousands of Offer in Compromise, Installment Agreement, and Penalty Abatement cases. His deep understanding of IRS processes ensures every Blast Tax workflow meets the highest standards of legal compliance and effectiveness.",
  },
  {
    name: "Edward Korducki",
    role: "Tax Attorney & CPA",
    initials: "EK",
    bio: "With 25+ years as both a tax attorney and CPA, Edward brings unmatched dual expertise to complex resolution cases. His insights shape the core resolution logic within Blast Tax, from eligibility calculations to form preparation. He specializes in high-stakes cases involving trust fund penalties and multi-year delinquencies.",
  },
  {
    name: "Stephanie Miyamoto",
    role: "Operations Manager",
    initials: "SM",
    bio: "Stephanie oversees day-to-day operations and ensures seamless execution across all departments. Her organizational expertise keeps Internostic running efficiently as the company scales. She has a background in operations at high-growth tech companies and brings process rigor to the team.",
  },
  {
    name: "Destinie Lanford",
    role: "Client Relations Manager",
    initials: "DL",
    bio: "Destinie leads client engagement and support, ensuring every user has a positive experience with Blast Tax. Her deep understanding of client needs drives continuous product improvements. She bridges the gap between user feedback and engineering priorities, making sure the product works for real people.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We challenge the status quo with technology that makes complex tax resolution simple and accessible. Our AI-powered platform automates what used to require expensive professional guidance.",
    color: "from-[#7A1C2E] to-[#9B2D42]",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description:
      "Every American deserves affordable access to tax resolution — regardless of income or background. We built Blast Tax to eliminate the cost barrier that keeps millions from resolving their IRS debt.",
    color: "from-[#C4956A] to-[#D4A57A]",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "We build products guided by licensed tax attorneys and CPAs, ensuring accuracy and compliance at every step. Our users can trust that every recommendation follows IRS guidelines precisely.",
    color: "from-[#7A1C2E] to-[#9B2D42]",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden fees, no predatory pricing. Our users always know exactly what they're paying for and why. We believe radical transparency is the antidote to an industry built on deception.",
    color: "from-[#C4956A] to-[#D4A57A]",
  },
];

const byTheNumbers = [
  { value: "55+", label: "Years Combined Experience" },
  { value: "4", label: "Products in the Suite" },
  { value: "10+", label: "IRS Forms Automated" },
  { value: "$299", label: "Starting Price Point" },
  { value: "$20B+", label: "Market Opportunity" },
  { value: "92%", label: "Cost Savings vs. Traditional" },
];

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDFBF9] to-[#F8F9FC]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="hero-orb w-[500px] h-[500px] bg-[#7A1C2E]/[0.05] -top-32 -right-32 absolute" />
        <div className="hero-orb w-[400px] h-[400px] bg-[#C4956A]/[0.06] -bottom-24 -left-24 absolute" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-3xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              The Company Behind{" "}
              <span className="text-gradient-bold">Blast Tax</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-muted-text leading-relaxed">
              Founded to democratize tax resolution, Internostic is building
              technology that puts the power back in the hands of everyday
              Americans.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* Mission Section with Team Photo */}
      <section className="py-16 sm:py-32">
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
                  Our Mission
                </Badge>
                <h2 className="text-2xl sm:text-4xl font-bold text-dark tracking-tight">
                  Tax Resolution for Everyone
                </h2>
                <Separator className="my-6 w-20 bg-gold h-0.5" />

                {/* Large blockquote */}
                <blockquote className="relative pl-6 border-l-4 border-[#7A1C2E]/20 my-8">
                  <p className="text-xl sm:text-2xl font-medium text-dark/80 italic leading-relaxed">
                    &ldquo;Every American deserves affordable access to tax
                    resolution — not just those who can afford $3,900 for
                    professional help.&rdquo;
                  </p>
                </blockquote>

                <p className="text-base text-muted-text leading-relaxed">
                  The tax resolution industry has been plagued by predatory
                  pricing, misleading advertising, and outright scams. The FTC
                  has issued multiple warnings about companies that charge
                  thousands of dollars for services that often fail to deliver.
                </p>
                <p className="mt-4 text-base text-muted-text leading-relaxed">
                  Internostic was founded to change this. We combine
                  cutting-edge AI technology with decades of tax expertise to
                  build software that guides Americans through IRS resolution
                  — at a fraction of the traditional cost.
                </p>
              </div>

              {/* Team Photo + Price Comparison */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative"
                >
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#7A1C2E]/[0.06] to-[#C4956A]/[0.06] rounded-3xl blur-xl" />
                  <Image
                    src="/team-photo.png"
                    alt="The Internostic team — three diverse professionals smiling and collaborating"
                    width={800}
                    height={500}
                    className="relative rounded-2xl shadow-xl shadow-dark/15"
                  />
                </motion.div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#7A1C2E]/[0.05] to-[#C4956A]/[0.05] rounded-3xl blur-xl" />
                  <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-xl shadow-dark/10 border border-[#E8E8F0]/60">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <div className="text-5xl font-bold text-burgundy">$299</div>
                          <div className="text-sm text-muted-text font-medium">/ one-time</div>
                        </div>
                        <div className="text-sm text-muted-text mt-1">
                          Blast Tax — DIY Resolution
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                          <span className="text-xs text-[#28C840] font-medium">Full resolution guidance included</span>
                        </div>
                      </div>
                      <Separator className="bg-custom-border" />
                      <div>
                        <div className="text-5xl font-bold text-dark/20 line-through decoration-[#FF5F57]/40">
                          $3,900
                        </div>
                        <div className="text-sm text-muted-text mt-1">
                          Industry Average — Traditional Firms
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
                          <span className="text-xs text-[#FF5F57]/70 font-medium">Often with hidden fees</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-[#7A1C2E]/10 to-[#C4956A]/10 rounded-xl p-4 border border-[#7A1C2E]/10">
                        <p className="text-sm font-semibold text-burgundy">
                          That&apos;s 92% less than traditional tax resolution services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge Section with IRS Forms Image */}
      <section className="relative py-16 sm:py-32 bg-[#1A1A2E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="hero-orb w-[400px] h-[400px] bg-[#7A1C2E]/20 -top-24 -right-24 absolute" />
        <div className="hero-orb w-[300px] h-[300px] bg-[#C4956A]/10 -bottom-16 -left-16 absolute" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Badge
                  variant="outline"
                  className="mb-4 text-[#FF5F57] border-[#FF5F57]/20 bg-[#FF5F57]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                >
                  The Challenge
                </Badge>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  A Broken Industry That Exploits the Vulnerable
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-base text-white/60 leading-relaxed">
                    The tax resolution industry is built on fear. Companies spend millions on TV and radio ads promising to &ldquo;settle your tax debt for pennies on the dollar&rdquo; — then charge <strong className="text-white/90">$3,900 to $15,000</strong> in fees with no guarantee of results.
                  </p>
                  <p className="text-base text-white/60 leading-relaxed">
                    The FTC has taken action against numerous tax resolution companies for deceptive practices. Meanwhile, <strong className="text-white/90">50% of Americans</strong> believe the tax system is fundamentally unfair, and the number of delinquent IRS accounts grows every year.
                  </p>
                  <p className="text-base text-white/60 leading-relaxed">
                    Internostic exists to disrupt this cycle. We believe technology can replace the middlemen, eliminate the markups, and give every American direct access to professional-grade tax resolution tools.
                  </p>
                </div>

                {/* Key stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: "10M+", label: "Delinquent IRS accounts" },
                    { value: "$688B", label: "In unpaid federal tax debt" },
                    { value: "50%", label: "Think the system is unfair" },
                    { value: "$3,900", label: "Avg. resolution firm cost" },
                  ].map((stat) => (
                    <div
                      key={stat.value}
                      className="bg-white/[0.06] rounded-xl p-4 border border-white/[0.08]"
                    >
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-[#7A1C2E]/20 to-[#C4956A]/10 rounded-3xl blur-xl" />
                <Image
                  src="/irs-forms.png"
                  alt="MacBook displaying IRS.gov Forms page — the complexity taxpayers face navigating the system alone"
                  width={800}
                  height={500}
                  className="relative rounded-2xl shadow-2xl shadow-black/40 border border-white/10"
                />
                {/* Caption overlay */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-white/30 italic">
                    The IRS system was not built for self-service — until now.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="relative py-16 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8F9FC]" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <Badge
              variant="outline"
              className="mb-4 text-gold border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            >
              By the Numbers
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-dark tracking-tight">
              Internostic at a Glance
            </h2>
            <p className="mt-4 text-lg text-muted-text leading-relaxed">
              The key metrics that define our company and our impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
            {byTheNumbers.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="border-0 shadow-lg shadow-dark/5 bg-white h-full text-center ring-0 card-hover">
                  <CardContent className="pt-6 pb-6 px-4">
                    <div className="text-2xl sm:text-3xl font-bold text-burgundy tracking-tight">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs text-muted-text font-medium leading-snug">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 sm:py-32 bg-[#F8F9FC]">
        <div className="absolute inset-0 bg-dots" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              What We Believe
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-text leading-relaxed">
              The principles that guide everything we build.
            </p>
          </motion.div>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                  <Card className="border-0 shadow-lg shadow-dark/5 bg-white h-full ring-0 card-hover group">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} shadow-lg shadow-[#7A1C2E]/15 group-hover:shadow-xl group-hover:shadow-[#7A1C2E]/20 transition-shadow duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-dark">
                        {value.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-text leading-relaxed">
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
      <section className="relative py-16 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FDFBF9]" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Badge
              variant="outline"
              className="mb-4 text-gold border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            >
              Our People
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-muted-text leading-relaxed">
              Industry veterans, technologists, and operators building the future
              of tax resolution.
            </p>
          </motion.div>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg shadow-dark/5 bg-white h-full ring-0 card-hover group">
                  <CardContent className="pt-8 pb-8 px-6">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7A1C2E] to-[#C4956A] shadow-md shadow-[#7A1C2E]/20 group-hover:shadow-lg group-hover:shadow-[#7A1C2E]/25 transition-shadow duration-300">
                        <span className="text-xl font-bold text-white">
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
                    <div className="h-px bg-gradient-to-r from-transparent via-[#E8E8F0] to-transparent mb-5" />
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
