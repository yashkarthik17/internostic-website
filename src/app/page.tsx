"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  Target,
  ClipboardList,
  Search,
  Check,
  DollarSign,
  Briefcase,
  Building2,
} from "lucide-react";

/* ─── Cursor Dot ─── */
const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseenter", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseenter", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-brand-burg rounded-full pointer-events-none z-[9999] mix-blend-multiply"
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        opacity: isHovering ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

/* ─── Marquee ─── */
const Marquee = () => (
  <div className="bg-text-main text-bg py-2.5 overflow-hidden whitespace-nowrap font-mono text-xs tracking-[1.5px] uppercase">
    <div className="inline-block animate-marquee">
      &nbsp; INTERNOSTIC &nbsp;&bull;&nbsp; BLAST TAX DEBT &nbsp;&bull;&nbsp;
      BLAST TAX PREP &nbsp;&bull;&nbsp; BLAST TAX BUSINESS &nbsp;&bull;&nbsp;
      TAX RESOLUTION &nbsp;&bull;&nbsp; AI-POWERED &nbsp;&bull;&nbsp;
      DIRECT-TO-CONSUMER &nbsp;&bull;&nbsp; LICENSED TAX ATTORNEYS
      &nbsp;&bull;&nbsp; INTERNOSTIC &nbsp;&bull;&nbsp; BLAST TAX DEBT
      &nbsp;&bull;&nbsp; BLAST TAX PREP &nbsp;&bull;&nbsp; BLAST TAX BUSINESS
      &nbsp;&bull;&nbsp; TAX RESOLUTION &nbsp;&bull;&nbsp; AI-POWERED
      &nbsp;&bull;&nbsp; DIRECT-TO-CONSUMER &nbsp;&bull;&nbsp; LICENSED TAX
      ATTORNEYS &nbsp;&bull;&nbsp;
    </div>
  </div>
);

/* ─── Navbar ─── */
const Navbar = () => (
  <nav className="fixed top-[40px] left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-xl bg-bg/80 border-b border-border-color">
    <div className="flex items-center gap-2.5">
      <img src="/logo.png" alt="Internostic Logo" className="h-10 w-auto" />
    </div>
    <div className="hidden md:flex gap-8 items-center">
      <a
        href="#products"
        className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
      >
        Products
      </a>
      <a
        href="#opportunity"
        className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
      >
        Opportunity
      </a>
      <a
        href="#model"
        className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
      >
        Business Model
      </a>
      <a
        href="#team"
        className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
      >
        Team
      </a>
      <a
        href="#"
        className="bg-brand-burg text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--color-brand-burg-glow)] transition-all"
      >
        Contact Us &rarr;
      </a>
    </div>
  </nav>
);

/* ─── Hero ─── */
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-40 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,var(--color-brand-burg-glow)_0%,transparent_70%)] -top-[100px] -right-[100px] animate-float1 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,var(--color-brand-gold-glow)_0%,transparent_70%)] bottom-[50px] -left-[100px] animate-float2 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-[760px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-burg-light border border-brand-burg/15 rounded-full font-mono text-xs text-brand-burg mb-7"
          >
            <span className="w-1.5 h-1.5 bg-brand-burg rounded-full animate-blink" />
            Building the future of tax resolution
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(48px,7vw,88px)] font-extrabold leading-[1] tracking-[-3px]"
          >
            The company behind{" "}
            <span className="text-brand-burg">Blast</span> Tax.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-text-muted max-w-[540px] mt-6 leading-[1.75]"
          >
            Internostic builds affordable, AI-powered tax resolution software
            that gives every American access to professional-grade tools — for a
            fraction of the cost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3.5 mt-9"
          >
            <a
              href="#products"
              className="px-7 py-3.5 rounded-full text-[15px] font-semibold bg-brand-burg text-white shadow-[0_4px_20px_var(--color-brand-burg-glow)] hover:shadow-[0_8px_36px_rgba(122,28,46,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Explore Blast Tax <ArrowRight size={18} />
            </a>
            <a
              href="#team"
              className="px-7 py-3.5 rounded-full text-[15px] font-semibold bg-surface text-text-main border border-border-color shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
            >
              Investor Relations
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-9 border-t border-border-color"
          >
            <div>
              <h3 className="text-[34px] font-extrabold tracking-[-1.5px]">
                $20B<span className="text-brand-burg">+</span>
              </h3>
              <p className="text-[13px] text-text-dim mt-0.5">Market Size</p>
            </div>
            <div>
              <h3 className="text-[34px] font-extrabold tracking-[-1.5px]">
                10M<span className="text-brand-burg">+</span>
              </h3>
              <p className="text-[13px] text-text-dim mt-0.5">
                Delinquent Taxpayers
              </p>
            </div>
            <div>
              <h3 className="text-[34px] font-extrabold tracking-[-1.5px]">
                4<span className="text-brand-burg"></span>
              </h3>
              <p className="text-[13px] text-text-dim mt-0.5">Product Suite</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block h-[600px]"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
            alt="Team working on software"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] object-cover rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />

          <div className="absolute right-[280px] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <motion.div
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              className="bg-surface border border-border-color rounded-2xl p-6 w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] -rotate-3 transition-all cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-burg-light flex items-center justify-center text-brand-burg mb-3.5">
                <Target size={20} />
              </div>
              <h4 className="text-[15px] font-bold mb-1">Blast Tax Debt</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">
                DIY individual tax resolution. OIC, IA, Penalty Abatement, CNC.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              className="bg-surface border border-border-color rounded-2xl p-6 w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] rotate-2 translate-x-5 transition-all cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-gold-light flex items-center justify-center text-brand-gold mb-3.5">
                <ClipboardList size={20} />
              </div>
              <h4 className="text-[15px] font-bold mb-1">Blast Tax Prep</h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">
                File up to 10 years of unfiled returns with guided preparation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              className="bg-surface border border-border-color rounded-2xl p-6 w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] -rotate-[1.5deg] -translate-x-2 transition-all cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-burg-light flex items-center justify-center text-brand-burg mb-3.5">
                <Building2 size={20} />
              </div>
              <h4 className="text-[15px] font-bold mb-1">
                Blast Tax Business
              </h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">
                SMB tax resolution. Trust Fund Penalty, Payroll Tax, Business
                IA.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              className="bg-surface border border-border-color rounded-2xl p-6 w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] rotate-[1deg] translate-x-3 transition-all cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-gold-light flex items-center justify-center text-brand-gold mb-3.5">
                <Briefcase size={20} />
              </div>
              <h4 className="text-[15px] font-bold mb-1">
                Blast Tax Practitioner
              </h4>
              <p className="text-[13px] text-text-muted leading-[1.6]">
                Professional tools for tax resolution firms. White-label ready.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Products (Services) ─── */
const Products = () => (
  <section id="products" className="py-[100px] px-6 md:px-12 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-xs text-text-dim uppercase tracking-[2px] mb-3">
        01 / Our Products
      </p>
      <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[620px] mb-4 leading-[1.08]">
        Four products. One mission. Tax freedom for all.
      </h2>
      <p className="text-[17px] text-text-muted max-w-[540px] mb-[52px] leading-[1.7]">
        From individual tax debt to practitioner tools — the Blast Tax suite
        covers the full spectrum of tax resolution.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6 items-start">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="rounded-2xl overflow-hidden relative aspect-[4/3] bg-bg-warm group"
      >
        <img
          src="/team-photo.png"
          alt="Blast Tax Product Suite"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold">
          Product Suite
        </div>
      </motion.div>

      <div className="flex flex-col gap-4">
        {[
          {
            num: "01",
            title: "Blast Tax Debt",
            desc: "DIY individual tax resolution. Offer in Compromise, Installment Agreement, Penalty Abatement, Currently Not Collectible. Starting at $299.",
          },
          {
            num: "02",
            title: "Blast Tax Prep",
            desc: "File up to 10 years of unfiled returns. Step-by-step guided preparation that walks taxpayers through every form and schedule.",
          },
          {
            num: "03",
            title: "Blast Tax Business",
            desc: "SMB tax resolution built for small businesses. Trust Fund Recovery Penalty, Payroll Tax, Business Installment Agreements.",
          },
          {
            num: "04",
            title: "Blast Tax Practitioner",
            desc: "Professional tools for tax resolution firms. White-label options, CRM integration, automated workflows. $1,900/yr.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 * i }}
            className="bg-surface border border-border-color rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-border-hover transition-all duration-300"
          >
            <div className="font-mono text-[11px] text-brand-burg mb-2.5 tracking-[1px]">
              {item.num}
            </div>
            <h3 className="text-lg font-bold mb-1.5">{item.title}</h3>
            <p className="text-sm text-text-muted leading-[1.7]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Photo Strip ─── */
const PhotoStrip = () => (
  <section className="pb-[60px] px-6 md:px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { img: "/team-photo.png", label: "Expert Team" },
        { img: "/irs-forms.png", label: "IRS Resolution Tools" },
        {
          img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
          label: "Modern Platform",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 * i }}
          className="rounded-2xl overflow-hidden aspect-[16/10] relative bg-bg-warm group"
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
            <span className="text-white text-sm font-semibold">
              {item.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ─── Platform / Opportunity ─── */
const Opportunity = () => (
  <section
    id="opportunity"
    className="py-[100px] px-6 md:px-12 max-w-7xl mx-auto"
  >
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-xs text-text-dim uppercase tracking-[2px] mb-3">
        02 / The Opportunity
      </p>
      <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[700px] mb-4 leading-[1.08]">
        A massive market. Zero software competition.
      </h2>
      <p className="text-[17px] text-text-muted max-w-[540px] mb-[52px] leading-[1.7]">
        The tax resolution industry has been untouched by software innovation —
        until now.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Large card: Market Size */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="md:col-span-7 bg-surface border border-border-color rounded-2xl p-9 relative overflow-hidden min-h-[340px] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
      >
        <span className="font-mono text-[11px] px-3 py-1 rounded-full text-brand-burg bg-brand-burg-light inline-block mb-4">
          Market Size
        </span>
        <h3 className="text-[21px] font-bold tracking-[-0.8px] mb-2 relative z-10">
          $20 Billion Market
        </h3>
        <p className="text-sm text-text-muted leading-[1.7] max-w-[380px] relative z-10">
          The tax resolution services market is massive and growing. Fortune
          Business Insights projects continued expansion as IRS enforcement
          intensifies.
        </p>

        <div className="absolute bottom-5 left-9 right-9 bg-[#1a1a1a] rounded-xl p-5 font-mono text-xs text-[#999] leading-loose">
          <div>
            <span className="text-[#C4956A]">internostic</span> &rarr; market
            analysis
          </div>
          <div>
            <span className="text-green-400">&gt;</span> Total addressable
            market: $20.6B
          </div>
          <div>
            <span className="text-green-400">&gt;</span> Delinquent taxpayers:
            10M+
          </div>
          <div>
            <span className="text-green-400">&gt;</span> Avg resolution cost:
            $3,900 (traditional)
          </div>
          <div>
            <span className="text-[#C4956A]">blast_tax</span> &rarr; our price:
            $299
          </div>
          <div>
            <span className="text-green-400">&#10003;</span> 92% cost reduction
            for consumers
          </div>
        </div>
      </motion.div>

      {/* Small card: Direct-to-Consumer */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="md:col-span-5 bg-surface border border-border-color rounded-2xl p-9 relative overflow-hidden min-h-[340px] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
      >
        <span className="font-mono text-[11px] px-3 py-1 rounded-full text-brand-gold bg-brand-gold-light inline-block mb-4">
          DTC Model
        </span>
        <h3 className="text-[21px] font-bold tracking-[-0.8px] mb-2 relative z-10">
          Direct-to-Consumer
        </h3>
        <p className="text-sm text-text-muted leading-[1.7] max-w-[380px] relative z-10">
          $299 vs $3,900 at traditional firms. The first direct-to-consumer tax
          resolution software — making professional tools accessible to
          everyone.
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-[120px] flex items-end gap-1 px-9 pb-5">
          {[25, 40, 30, 55, 45, 70, 85, 100, 90, 50].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-sm transition-all duration-300 ${i % 2 === 0 ? "bg-brand-gold" : "bg-brand-burg"} ${i >= 5 && i <= 8 ? "opacity-50 group-hover:opacity-85" : "opacity-[0.18] group-hover:opacity-35"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Small card: AI Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="md:col-span-4 bg-surface border border-border-color rounded-2xl p-9 relative overflow-hidden min-h-[280px] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
      >
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
            alt="AI Abstract"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-mono text-[11px] px-3 py-1 rounded-full text-brand-burg bg-brand-burg-light inline-block mb-4 relative z-10">
          Smart Analysis
        </span>
        <h3 className="text-[21px] font-bold tracking-[-0.8px] mb-2 relative z-10">
          AI-Powered Analysis
        </h3>
        <p className="text-sm text-text-muted leading-[1.7] max-w-[380px] relative z-10">
          Proprietary algorithms identify the best resolution path — OIC,
          Installment Agreement, or Penalty Abatement — instantly.
        </p>
        <div className="text-[100px] font-black tracking-[-5px] text-brand-burg opacity-[0.06] absolute -bottom-2.5 right-5 leading-none">
          AI
        </div>
      </motion.div>

      {/* Large card: Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="md:col-span-8 bg-surface border border-border-color rounded-2xl p-9 relative overflow-hidden min-h-[280px] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
      >
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            maskImage: "linear-gradient(to right, transparent, black)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
            alt="Retail Distribution"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-mono text-[11px] px-3 py-1 rounded-full text-brand-gold bg-brand-gold-light inline-block mb-4 relative z-10">
          Distribution
        </span>
        <h3 className="text-[21px] font-bold tracking-[-0.8px] mb-2 relative z-10">
          Distribution Strategy
        </h3>
        <p className="text-sm text-text-muted leading-[1.7] max-w-[420px] relative z-10">
          Partnerships with Amazon, Google, Walmart, Best Buy, and Staples.
          15% affiliate commission model drives organic growth at massive scale.
        </p>
        <div className="text-[100px] font-black tracking-[-5px] text-brand-gold opacity-[0.06] absolute -bottom-2.5 right-5 leading-none">
          SCALE
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Business Model (How It Works) ─── */
const BusinessModel = () => (
  <section id="model" className="py-[100px] px-6 md:px-12 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-xs text-text-dim uppercase tracking-[2px] mb-3">
        03 / The Business Model
      </p>
      <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[620px] mb-4 leading-[1.08]">
        Revenue model that scales.
      </h2>
      <p className="text-[17px] text-text-muted max-w-[500px] mb-[52px] leading-[1.7]">
        Three tiers of software revenue with high margins and predictable
        recurring income.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 [counter-reset:step]">
      {[
        {
          icon: <DollarSign size={24} />,
          title: "Consumer Software ($299)",
          desc: "DIY resolution for individual taxpayers. Self-guided workflows, IRS form generation, and AI-powered resolution analysis. 93% annual retention rate.",
          img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
        },
        {
          icon: <Building2 size={24} />,
          title: "Business Solutions ($499)",
          desc: "SMB tax resolution with expanded features. Trust Fund Recovery Penalty guidance, payroll tax resolution, and business-specific IA tools.",
          img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
        },
        {
          icon: <Briefcase size={24} />,
          title: "Practitioner Platform ($1,900/yr)",
          desc: "Professional-grade tools for tax resolution firms. Monthly subscription with white-label options, CRM integration, and client management.",
          img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 * i }}
          className="bg-surface border border-border-color rounded-2xl p-10 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] transition-all group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full overflow-hidden">
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-12 h-12 rounded-xl bg-brand-burg-light flex items-center justify-center text-brand-burg mb-5 transition-all duration-300 group-hover:bg-brand-burg group-hover:text-white group-hover:scale-110">
            {item.icon}
          </div>
          <h3 className="text-lg font-bold mb-2 relative z-10">
            {item.title}
          </h3>
          <p className="text-sm text-text-muted leading-[1.7] relative z-10">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ─── App Preview ─── */
const AppPreview = () => (
  <section className="py-[100px] px-6 md:px-12 max-w-7xl mx-auto text-center overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-xs text-text-dim uppercase tracking-[2px] mb-3">
        04 / The Product
      </p>
      <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[620px] mx-auto mb-4 leading-[1.08]">
        Tax resolution in
        <br />
        your pocket.
      </h2>
      <p className="text-[17px] text-text-muted max-w-[500px] mx-auto mb-[52px] leading-[1.7]">
        Upload documents, track your case, get AI recommendations, and see your
        resolution path — all from the Blast Tax app.
      </p>
    </motion.div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12 relative">
      {/* Left phone: Documents/Forms */}
      <motion.div
        initial={{ opacity: 0, y: 32, rotate: -5 }}
        whileInView={{ opacity: 1, y: 20, rotate: -5 }}
        whileHover={{ y: 14, rotate: -2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="w-[280px] h-[560px] bg-surface border border-border-color rounded-[36px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-10"
      >
        <div className="w-full h-full bg-surface-2 rounded-[26px] overflow-hidden flex flex-col">
          <div className="w-[100px] h-6 bg-bg rounded-b-[14px] mx-auto" />
          <div className="p-5 flex-1 relative">
            <h4 className="text-base font-bold mb-3 text-left">
              Documents &amp; Forms
            </h4>
            <div className="bg-bg-warm rounded-xl h-[70px] mt-3 flex items-center px-3.5 gap-3 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=100&q=80"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                alt=""
                referrerPolicy="no-referrer"
              />
              <div className="w-8 h-8 rounded-full bg-brand-burg-light flex-shrink-0 relative z-10 flex items-center justify-center">
                <FileText size={14} className="text-brand-burg" />
              </div>
              <div className="flex-1 relative z-10 text-left">
                <div className="text-[11px] font-semibold text-text-main">
                  Form 656 — OIC
                </div>
                <div className="text-[10px] text-text-dim">Auto-generated</div>
              </div>
            </div>
            <div className="bg-bg-warm rounded-xl h-[70px] mt-3 flex items-center px-3.5 gap-3 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d04?w=100&q=80"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                alt=""
                referrerPolicy="no-referrer"
              />
              <div className="w-8 h-8 rounded-full bg-brand-gold-light flex-shrink-0 relative z-10 flex items-center justify-center">
                <FileText size={14} className="text-brand-gold" />
              </div>
              <div className="flex-1 relative z-10 text-left">
                <div className="text-[11px] font-semibold text-text-main">
                  Form 9465 — IA
                </div>
                <div className="text-[10px] text-text-dim">Ready to file</div>
              </div>
            </div>
            <div className="bg-bg-warm rounded-xl h-[70px] mt-3 flex items-center px-3.5 gap-3 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=100&q=80"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                alt=""
                referrerPolicy="no-referrer"
              />
              <div className="w-8 h-8 rounded-full bg-brand-burg-light flex-shrink-0 relative z-10 flex items-center justify-center">
                <FileText size={14} className="text-brand-burg" />
              </div>
              <div className="flex-1 relative z-10 text-left">
                <div className="text-[11px] font-semibold text-text-main">
                  Form 433-A — Financial
                </div>
                <div className="text-[10px] text-text-dim">In progress</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Center phone: Case Overview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1.08 }}
        whileHover={{ scale: 1.1, y: -4 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-[280px] h-[560px] bg-surface border border-border-color rounded-[36px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-20"
      >
        <div className="w-full h-full bg-surface-2 rounded-[26px] overflow-hidden flex flex-col">
          <div className="w-[100px] h-6 bg-bg rounded-b-[14px] mx-auto" />
          <div className="p-5 flex-1 text-left">
            <h4 className="text-base font-bold mb-3">Case Overview</h4>
            <div className="text-[11px] text-text-dim">Total tax debt</div>
            <div className="text-[32px] font-extrabold text-brand-burg tracking-[-1.5px] my-2">
              $84,200
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-brand-burg-light text-brand-burg">
                OIC Filed
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-brand-gold-light text-brand-gold">
                Investigation
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-green-400/12 text-green-600">
                Active
              </span>
            </div>
            <div className="mt-5">
              <div className="text-[11px] text-text-dim mb-2">
                Projected Settlement
              </div>
              <div className="bg-brand-burg-light rounded-xl p-4 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=300&q=80"
                  className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
                  alt=""
                  referrerPolicy="no-referrer"
                />
                <div className="text-[24px] font-extrabold text-brand-burg tracking-[-1px] relative z-10">
                  $12,500
                </div>
                <div className="text-[11px] text-text-dim relative z-10">
                  85% debt reduction
                </div>
              </div>
            </div>
            <div className="mt-3.5">
              <div className="text-[11px] text-text-dim mb-2">
                Resolution Progress
              </div>
              <div className="h-2 bg-bg-warm rounded-full overflow-hidden">
                <div className="h-full w-[68%] bg-brand-burg rounded-full" />
              </div>
              <div className="text-[10px] text-text-dim mt-1">
                68% complete
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right phone: AI Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 32, rotate: 5 }}
        whileInView={{ opacity: 1, y: 20, rotate: 5 }}
        whileHover={{ y: 14, rotate: 2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-[280px] h-[560px] bg-surface border border-border-color rounded-[36px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-10"
      >
        <div className="w-full h-full bg-surface-2 rounded-[26px] overflow-hidden flex flex-col">
          <div className="w-[100px] h-6 bg-bg rounded-b-[14px] mx-auto" />
          <div className="p-5 flex-1 text-left">
            <h4 className="text-base font-bold mb-3">AI Analysis</h4>
            <div className="bg-brand-burg-light rounded-[12px_12px_12px_4px] p-3 text-xs text-brand-burg mb-2 max-w-[85%]">
              Based on your financials, OIC is your best resolution path with a
              92% approval probability.
            </div>
            <div className="bg-bg-warm rounded-[12px_12px_4px_12px] p-3 text-xs text-text-muted mb-2 ml-auto max-w-[75%] text-right">
              What about an Installment Agreement?
            </div>
            <div className="bg-brand-burg-light rounded-[12px_12px_12px_4px] p-3 text-xs text-brand-burg max-w-[85%] mb-2">
              IA would cost $1,400/mo for 72 months. OIC could settle for
              $12,500 total. I recommend OIC.
            </div>
            <div className="mt-3 space-y-2">
              <div className="text-[11px] text-text-dim font-semibold">
                Recommendations
              </div>
              <div className="bg-bg-warm rounded-lg p-2.5 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-400/15 flex items-center justify-center">
                  <Check size={12} className="text-green-600" />
                </div>
                <span className="text-[11px] text-text-main font-medium">
                  Offer in Compromise
                </span>
              </div>
              <div className="bg-bg-warm rounded-lg p-2.5 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-gold-light flex items-center justify-center">
                  <Search size={12} className="text-brand-gold" />
                </div>
                <span className="text-[11px] text-text-main font-medium">
                  Penalty Abatement
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Testimonials (Team/Advisory) ─── */
const Testimonials = () => (
  <section
    id="team"
    className="bg-text-main text-bg py-20 px-6 md:px-12 relative overflow-hidden"
  >
    <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse,rgba(122,28,46,0.15)_0%,transparent_60%)] pointer-events-none" />

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs text-bg/30 uppercase tracking-[2px] mb-3">
          05 / The Team
        </p>
        <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-2px] max-w-[600px] mx-auto text-bg">
          Backed by expertise. Driven by results.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            quote:
              "We saw an industry charging $4,000+ for services that software could deliver at $299. Internostic exists to democratize tax resolution — to give every American real options when the IRS comes knocking.",
            author: "James Jones",
            role: "Founder & CEO",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
          },
          {
            quote:
              "The legal framework behind Blast Tax is rock-solid. Every workflow, every form, every recommendation is built on decades of tax law practice. We're not replacing attorneys — we're making their expertise accessible to millions.",
            author: "Victor Latham",
            role: "Sr. Tax Attorney",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
          },
          {
            quote:
              "The technology platform we've built processes complex IRS cases in minutes, not months. Our AI analyzes transcripts, identifies optimal resolution paths, and generates filing-ready documents automatically.",
            author: "Yash Karthik",
            role: "CEO/CTO",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 * i }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            <p className="text-[15px] leading-[1.7] text-bg/85 mb-5 italic">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.author}
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[13px] font-semibold text-bg/80 block">
                  {item.author}
                </span>
                <span className="text-[11px] text-bg/40">{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-12 md:gap-20 mt-14 relative z-10"
      >
        <div className="text-center">
          <h3 className="text-[42px] font-extrabold tracking-[-2px] text-bg">
            $7<span className="text-brand-burg">M</span>
          </h3>
          <p className="text-[13px] text-bg/40 mt-1">Funding Target</p>
        </div>
        <div className="text-center">
          <h3 className="text-[42px] font-extrabold tracking-[-2px] text-bg">
            Apr <span className="text-brand-burg">2026</span>
          </h3>
          <p className="text-[13px] text-bg/40 mt-1">MVP Launch</p>
        </div>
        <div className="text-center">
          <h3 className="text-[42px] font-extrabold tracking-[-2px] text-bg">
            $46M<span className="text-brand-burg">+</span>
          </h3>
          <p className="text-[13px] text-bg/40 mt-1">3-Year Revenue Target</p>
        </div>
        <div className="text-center">
          <h3 className="text-[42px] font-extrabold tracking-[-2px] text-bg">
            55<span className="text-brand-burg">+</span>
          </h3>
          <p className="text-[13px] text-bg/40 mt-1">
            Years Combined Experience
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── CTA ─── */
const CTA = () => (
  <section className="py-[120px] px-6 md:px-12 text-center relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,var(--color-brand-burg-glow)_0%,transparent_60%)] pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="relative z-10"
    >
      <span className="font-hand text-2xl text-brand-gold block mb-7 -rotate-2">
        The future of tax resolution &rarr;
      </span>
      <h2 className="text-[clamp(36px,5vw,60px)] font-extrabold tracking-[-2.5px] mb-4 leading-[1.05]">
        Ready to invest in
        <br />
        <span className="text-brand-burg">disruption</span>?
      </h2>
      <p className="text-[17px] text-text-muted max-w-[480px] mx-auto mb-9 leading-[1.7]">
        Internostic is building the first direct-to-consumer tax resolution
        platform. Join us in transforming a $20B industry that hasn&apos;t
        innovated in decades.
      </p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-[17px] font-semibold bg-brand-burg text-white shadow-[0_4px_20px_var(--color-brand-burg-glow)] hover:shadow-[0_8px_36px_rgba(122,28,46,0.25)] hover:-translate-y-0.5 transition-all"
        >
          Contact Us <ArrowRight size={20} />
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-[17px] font-semibold bg-surface text-text-main border border-border-color shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all"
        >
          Download Pitch Deck
        </a>
      </div>
    </motion.div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="py-12 px-6 md:px-12 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
    <div className="text-[13px] text-text-dim font-mono">
      &copy; 2026 Internostic Inc. All rights reserved.
    </div>
    <div className="flex gap-6">
      <a
        href="#"
        className="text-[13px] text-text-muted hover:text-text-main transition-colors"
      >
        Privacy
      </a>
      <a
        href="#"
        className="text-[13px] text-text-muted hover:text-text-main transition-colors"
      >
        Terms
      </a>
      <a
        href="#"
        className="text-[13px] text-text-muted hover:text-text-main transition-colors"
      >
        Disclaimer
      </a>
      <a
        href="#"
        className="text-[13px] text-text-muted hover:text-text-main transition-colors"
      >
        Contact
      </a>
    </div>
  </footer>
);

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-burg-light">
      <CursorDot />
      <Marquee />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <PhotoStrip />
        <Opportunity />
        <BusinessModel />
        <AppPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
