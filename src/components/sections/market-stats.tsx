"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Landmark } from "lucide-react";

function useCountUp(
  target: number,
  duration: number = 2000,
  shouldStart: boolean
) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return count;
}

const stats = [
  {
    icon: DollarSign,
    prefix: "$",
    value: 20,
    suffix: "B+",
    label: "Market Size (2025)",
    description:
      "The U.S. tax resolution market represents a massive, growing opportunity.",
    accentColor: "burgundy" as const,
  },
  {
    icon: Users,
    prefix: "",
    value: 10,
    suffix: "M+",
    label: "Delinquent Accounts",
    description:
      "Over 10 million Americans have delinquent IRS tax accounts — and counting.",
    accentColor: "gold" as const,
  },
  {
    icon: Landmark,
    prefix: "$",
    value: 688,
    suffix: "B",
    label: "Unpaid IRS Debt",
    description:
      "Total outstanding federal tax debt owed by individuals and businesses.",
    accentColor: "burgundy" as const,
  },
];

const accentStyles = {
  burgundy: {
    border: "border-t-[#7A1C2E]",
    iconBg: "bg-[#7A1C2E]/10",
    iconColor: "text-[#7A1C2E]",
    numColor: "text-[#7A1C2E]",
  },
  gold: {
    border: "border-t-[#C4956A]",
    iconBg: "bg-[#C4956A]/10",
    iconColor: "text-[#C4956A]",
    numColor: "text-[#7A1C2E]",
  },
};

export function MarketStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 bg-[#F8F9FC]" ref={ref}>
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dots" />

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
            className="mb-4 text-gold border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            A Massive, Underserved Market
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            The Tax Resolution Industry{" "}
            <span className="text-burgundy">Needs Disruption</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-text leading-relaxed max-w-2xl mx-auto">
            Millions of Americans are trapped in IRS debt with nowhere affordable to turn. The market opportunity is enormous.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof stats)[number];
  index: number;
  isInView: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isInView);
  const Icon = stat.icon;
  const styles = accentStyles[stat.accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className={`border-0 border-t-4 ${styles.border} shadow-lg shadow-dark/5 bg-white h-full text-center ring-0 card-hover`}>
        <CardContent className="pt-8 pb-8 px-6">
          <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${styles.iconBg}`}>
            <Icon className={`h-7 w-7 ${styles.iconColor}`} />
          </div>
          <div className={`text-4xl sm:text-5xl font-bold ${styles.numColor} tracking-tight`}>
            {stat.prefix}
            {count}
            {stat.suffix}
          </div>
          <div className="mt-2 text-base font-semibold text-dark">
            {stat.label}
          </div>
          <p className="mt-3 text-sm text-muted-text leading-relaxed">
            {stat.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
