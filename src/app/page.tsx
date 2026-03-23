"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { ArrowRight, ArrowDown, Menu, X } from "lucide-react";
import { useState } from "react";

/* ─── Fade-up animation wrapper ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Internostic"
            width={140}
            height={36}
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-text-secondary hover:text-text-main transition-colors"
          >
            About
          </a>
          <a
            href="#products"
            className="text-sm text-text-secondary hover:text-text-main transition-colors"
          >
            Products
          </a>
          <a
            href="#investors"
            className="text-sm text-text-secondary hover:text-text-main transition-colors"
          >
            Investors
          </a>
          <a
            href="#contact"
            className="text-sm text-text-secondary hover:text-text-main transition-colors"
          >
            Contact
          </a>
          <a
            href="https://blasttax.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-burg text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-brand-burg-hover transition-colors"
          >
            Explore Blast Tax <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-main"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border-color px-6 py-6 flex flex-col gap-4">
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-text-secondary"
          >
            About
          </a>
          <a
            href="#products"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-text-secondary"
          >
            Products
          </a>
          <a
            href="#investors"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-text-secondary"
          >
            Investors
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-text-secondary"
          >
            Contact
          </a>
          <a
            href="https://blasttax.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-brand-burg text-white text-sm font-medium px-5 py-2.5 rounded-md"
          >
            Explore Blast Tax <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.95] max-w-5xl"
        >
          We&rsquo;re building the future
          <br className="hidden sm:block" /> of{" "}
          <span className="text-brand-burg">tax resolution.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-8 text-lg lg:text-xl text-text-secondary max-w-2xl leading-relaxed"
        >
          Internostic is the technology company behind Blast Tax — making
          professional-grade tax resolution accessible to every American.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-brand-burg hover:opacity-80 transition-opacity"
        >
          Our Story <ArrowDown size={16} />
        </motion.a>
      </div>

      {/* Full-width hero image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="mt-16 relative w-full aspect-[21/9] max-h-[560px] overflow-hidden"
      >
        <Image
          src="/team-photo.png"
          alt="The Internostic team"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}

/* ─── Problem Statement (Dark) ─── */
function ProblemStatement() {
  return (
    <section id="about" className="bg-bg-dark text-text-inverse relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="/irs-forms.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
        <FadeUp>
          <blockquote className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-snug tracking-[-0.02em] max-w-4xl">
            &ldquo;18.6 million Americans owe the IRS an average of $17,000
            each. Traditional resolution costs $3,900.{" "}
            <span className="text-brand-gold">We built a better way.</span>
            &rdquo;
          </blockquote>
        </FadeUp>

        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <FadeUp delay={0.1}>
              <div>
                <p className="text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
                  $688B
                </p>
                <hr className="border-white/10 my-4" />
                <p className="text-sm text-text-dim uppercase tracking-widest">
                  Unpaid Tax Debt
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div>
                <p className="text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
                  10M+
                </p>
                <hr className="border-white/10 my-4" />
                <p className="text-sm text-text-dim uppercase tracking-widest">
                  Delinquent Accounts
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div>
                <p className="text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
                  $3,900
                </p>
                <hr className="border-white/10 my-4" />
                <p className="text-sm text-text-dim uppercase tracking-widest">
                  Avg. Resolution Cost
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Product Suite ─── */
const products = [
  {
    name: "Blast Tax Debt",
    price: "$299",
    description: "Individual tax resolution",
    features: [
      "Offer in Compromise (OIC)",
      "Installment Agreements",
      "Penalty Abatement",
      "Currently Not Collectible",
    ],
  },
  {
    name: "Blast Tax Prep",
    price: "$299",
    description: "Delinquent return preparation",
    features: [
      "Up to 10 years of unfiled returns",
      "Step-by-step guided preparation",
      "All forms and schedules",
      "IRS-ready document generation",
    ],
  },
  {
    name: "Blast Tax Business",
    price: "$499",
    description: "Business tax resolution",
    features: [
      "Trust Fund Recovery Penalty",
      "Payroll tax resolution",
      "Business Installment Agreements",
      "Corporate compliance tools",
    ],
  },
  {
    name: "Blast Tax Practitioner",
    price: "$1,900/yr",
    description: "Professional tools for firms",
    features: [
      "White-label options",
      "CRM integration",
      "Automated workflows",
      "Client management portal",
    ],
  },
];

function ProductSuite() {
  return (
    <section id="products" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
            Our Products
          </h2>
          <p className="mt-5 text-text-muted text-lg max-w-xl leading-relaxed">
            From individual tax debt to practitioner tools — the Blast Tax suite
            covers the full spectrum of tax resolution.
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <FadeUp key={product.name} delay={i * 0.1}>
              <div className="border border-border-color rounded-lg p-8 lg:p-10 bg-white hover:border-border-hover transition-colors h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-text-muted text-sm mt-1">
                      {product.description}
                    </p>
                  </div>
                  <span className="text-brand-burg font-semibold text-lg whitespace-nowrap">
                    {product.price}
                  </span>
                </div>

                <hr className="border-border-color my-6" />

                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Market Opportunity ─── */
const marketStats = [
  { value: "$20B+", label: "Market Size" },
  { value: "10M+", label: "Delinquent Taxpayers" },
  { value: "$7.4B", label: "NA Automated Tax Software" },
  { value: "6.6%", label: "CAGR" },
];

function MarketOpportunity() {
  return (
    <section
      id="investors"
      className="py-28 lg:py-36 border-t border-border-color"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: narrative */}
          <FadeUp>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
                A $20 Billion
                <br />
                Market
              </h2>
              <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
                <p>
                  The tax resolution services market is valued at over $20
                  billion and growing. As IRS enforcement intensifies and the tax
                  gap widens, millions of Americans are left without affordable
                  options to resolve their tax debt.
                </p>
                <p>
                  The North American automated tax software market stands at
                  $7.4 billion with a compound annual growth rate of 6.6%.
                  Despite this, tax resolution — one of the most consequential
                  financial services — has remained completely untouched by
                  software innovation.
                </p>
                <p>
                  Internostic is building the first direct-to-consumer platform
                  in this space, reducing the cost of professional-grade
                  resolution from $3,900 to $299 — a 92% reduction.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right: stats */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col justify-center">
              {marketStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-8 ${i !== marketStats.length - 1 ? "border-b border-border-color" : ""}`}
                >
                  <p className="text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-muted mt-2 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── Team ─── */
const team = [
  {
    initials: "JJ",
    name: "James Jones",
    title: "Founder & CEO",
    bio: "Visionary entrepreneur driving Internostic's mission to democratize tax resolution for every American.",
  },
  {
    initials: "YK",
    name: "Yash Karthik",
    title: "CEO / CTO",
    bio: "Defense aerospace engineer and AI automation specialist building the technical foundation of the Blast Tax platform.",
  },
  {
    initials: "VL",
    name: "Victor Latham",
    title: "Sr. Tax Attorney",
    bio: "30 years of tax law experience guiding the legal frameworks and resolution strategies behind every product.",
  },
  {
    initials: "EK",
    name: "Edward Korducki",
    title: "Tax Attorney & CPA",
    bio: "25+ years of combined tax law and accounting expertise ensuring compliance and accuracy across the platform.",
  },
];

function Team() {
  return (
    <section className="py-28 lg:py-36 bg-bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
            Leadership
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.1}>
              <div className="bg-white border border-border-color rounded-lg p-8">
                <div className="w-14 h-14 rounded-full bg-bg-dark flex items-center justify-center text-white text-sm font-semibold tracking-wide">
                  {member.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
                <p className="text-brand-burg text-sm font-medium mt-1">
                  {member.title}
                </p>
                <p className="text-text-muted text-sm mt-4 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Investment Opportunity ─── */
const investmentMetrics = [
  { value: "$7M", label: "Initial Investment" },
  { value: "April 2026", label: "MVP Launch" },
  { value: "$46M+", label: "Projected 3-Year Revenue" },
  { value: "93%", label: "Customer Retention Rate" },
];

function InvestmentOpportunity() {
  return (
    <section className="py-28 lg:py-36 bg-bg-dark text-text-inverse">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
            Investment Opportunity
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {investmentMetrics.map((metric, i) => (
            <FadeUp key={metric.label} delay={i * 0.1}>
              <div>
                <p className="text-3xl lg:text-4xl font-bold tracking-[-0.02em]">
                  {metric.value}
                </p>
                <p className="text-sm text-text-dim mt-2 uppercase tracking-widest">
                  {metric.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-16 pt-16 border-t border-white/10 max-w-2xl">
            <p className="text-white/70 leading-relaxed">
              Internostic&rsquo;s direct-to-consumer model eliminates the
              middleman, passing savings directly to taxpayers while maintaining
              strong margins. Strategic distribution partnerships with major
              retailers and e-commerce platforms provide a scalable,
              capital-efficient path to market.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 bg-white text-bg-dark text-sm font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
            >
              Contact Us <ArrowRight size={14} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer id="contact" className="border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Internostic"
              width={130}
              height={32}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-xs">
              Building the future of tax resolution.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-dim mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-text-muted">
              <p>555 Anton Blvd</p>
              <p>Costa Mesa, CA 92626</p>
              <p className="mt-3">
                <a
                  href="tel:8057916660"
                  className="hover:text-text-main transition-colors"
                >
                  805-791-6660
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-dim mb-4">
              Legal
            </h4>
            <div className="space-y-2 text-sm text-text-muted">
              <p>
                <a href="#" className="hover:text-text-main transition-colors">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-text-main transition-colors">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr className="border-border-color my-12" />

        <p className="text-xs text-text-dim">
          &copy; {new Date().getFullYear()} Internostic, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <ProductSuite />
        <MarketOpportunity />
        <Team />
        <InvestmentOpportunity />
      </main>
      <Footer />
    </>
  );
}
