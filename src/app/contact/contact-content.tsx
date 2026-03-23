"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, DollarSign } from "lucide-react";

const subjects = [
  "General Inquiry",
  "Investment Inquiry",
  "Partnership",
  "Press",
];

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  }

  const inputClasses =
    "w-full rounded-xl border border-[#E8E8F0] bg-white px-4 py-3 text-sm text-dark placeholder:text-muted-text/40 focus:outline-none focus:ring-2 focus:ring-[#7A1C2E]/20 focus:border-[#7A1C2E] transition-all duration-200 hover:border-[#7A1C2E]/30";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDFBF9] to-[#F8F9FC]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="hero-orb w-[400px] h-[400px] bg-[#7A1C2E]/[0.05] -top-24 -left-24 absolute" />
        <div className="hero-orb w-[300px] h-[300px] bg-[#C4956A]/[0.06] -bottom-16 -right-16 absolute" />

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
              Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-text leading-relaxed">
              Whether you&apos;re interested in investing, partnering, or simply
              learning more — we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* Team Photo Banner */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FC]">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#7A1C2E]/[0.06] to-[#C4956A]/[0.06] rounded-3xl blur-xl" />
            <Image
              src="/team-photo.png"
              alt="The Internostic team — three diverse professionals ready to help with your inquiry"
              width={800}
              height={500}
              className="relative rounded-2xl shadow-xl shadow-dark/15 w-full"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-text italic">
                Our team is ready to help — reach out anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-xl shadow-dark/8 ring-0 overflow-hidden">
                {/* Card accent top */}
                <div className="h-1 bg-gradient-to-r from-[#7A1C2E] via-[#C4956A] to-[#7A1C2E]" />
                <CardContent className="p-8 sm:p-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-12"
                    >
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#7A1C2E] to-[#C4956A] shadow-lg shadow-[#7A1C2E]/20">
                        <Send className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-dark">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-muted-text max-w-md mx-auto">
                        Thank you for reaching out. Our team will get back to
                        you within 1-2 business days.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormState({
                            name: "",
                            email: "",
                            phone: "",
                            subject: "",
                            message: "",
                          });
                        }}
                        variant="outline"
                        className="mt-6 rounded-full cursor-pointer"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-dark mb-1">Send us a message</h3>
                        <p className="text-sm text-muted-text mb-6">Fill out the form below and we will be in touch.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wider"
                          >
                            Name <span className="text-burgundy">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wider"
                          >
                            Email <span className="text-burgundy">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wider"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="(555) 000-0000"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wider"
                          >
                            Subject <span className="text-burgundy">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formState.subject}
                            onChange={handleChange}
                            className={`${inputClasses} appearance-none`}
                          >
                            <option value="" disabled>
                              Select a subject
                            </option>
                            {subjects.map((subject) => (
                              <option key={subject} value={subject}>
                                {subject}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wider"
                        >
                          Message <span className="text-burgundy">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          className={`${inputClasses} resize-none`}
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-[#7A1C2E] hover:bg-[#7A1C2E]/90 text-white rounded-full px-8 h-12 text-sm font-semibold shadow-md shadow-[#7A1C2E]/20 hover:shadow-lg hover:shadow-[#7A1C2E]/25 transition-all duration-200 cursor-pointer"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <Card className="border-0 shadow-xl shadow-dark/5 ring-0 card-hover">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-dark mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A1C2E] to-[#9B2D42] shadow-sm shadow-[#7A1C2E]/20">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-dark">
                          Address
                        </div>
                        <p className="text-sm text-muted-text mt-0.5">
                          555 Anton Blvd
                          <br />
                          Costa Mesa, CA 92626
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#E8E8F0] to-transparent" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A1C2E] to-[#9B2D42] shadow-sm shadow-[#7A1C2E]/20">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-dark">
                          Phone
                        </div>
                        <a
                          href="tel:8057916660"
                          className="text-sm text-muted-text mt-0.5 hover:text-burgundy transition-colors"
                        >
                          805-791-6660
                        </a>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#E8E8F0] to-transparent" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A1C2E] to-[#9B2D42] shadow-sm shadow-[#7A1C2E]/20">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-dark">
                          Email
                        </div>
                        <a
                          href="mailto:info@internostic.com"
                          className="text-sm text-muted-text mt-0.5 hover:text-burgundy transition-colors"
                        >
                          info@internostic.com
                        </a>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#E8E8F0] to-transparent" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A1C2E] to-[#9B2D42] shadow-sm shadow-[#7A1C2E]/20">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-dark">
                          Hours
                        </div>
                        <p className="text-sm text-muted-text mt-0.5">
                          Mon - Fri: 9am - 6pm PST
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl shadow-dark/5 ring-0 overflow-hidden card-hover">
                {/* Gold accent top */}
                <div className="h-1 bg-gradient-to-r from-[#C4956A] to-[#C4956A]/40" />
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C4956A]/10">
                      <DollarSign className="h-4 w-4 text-[#C4956A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-dark">
                      Investment Inquiries
                    </h3>
                  </div>
                  <p className="text-sm text-muted-text leading-relaxed">
                    Interested in investing in Internostic? Select
                    &quot;Investment Inquiry&quot; from the subject dropdown, or
                    email us directly at{" "}
                    <a
                      href="mailto:investors@internostic.com"
                      className="text-burgundy hover:underline font-medium"
                    >
                      investors@internostic.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
