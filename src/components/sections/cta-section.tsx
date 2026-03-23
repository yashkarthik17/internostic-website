"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-burgundy relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Join the Tax Resolution
            <br className="hidden sm:block" /> Revolution
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Be part of a movement to bring affordable, technology-driven tax
            resolution to millions of Americans who need it most.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://blasttax.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-burgundy hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold shadow-lg cursor-pointer">
                Try Blast Tax
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/investors">
              <Button
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold/10 rounded-full px-8 h-12 text-base font-semibold bg-transparent cursor-pointer"
              >
                Contact Investors
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
