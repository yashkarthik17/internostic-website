"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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

  return (
    <>
      {/* Hero */}
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
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-lg shadow-dark/5 ring-0">
                <CardContent className="p-8 sm:p-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-12"
                    >
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-burgundy/10">
                        <Send className="h-8 w-8 text-burgundy" />
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-dark mb-2"
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
                            className="w-full rounded-lg border border-custom-border bg-white px-4 py-2.5 text-sm text-dark placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-dark mb-2"
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
                            className="w-full rounded-lg border border-custom-border bg-white px-4 py-2.5 text-sm text-dark placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-dark mb-2"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-custom-border bg-white px-4 py-2.5 text-sm text-dark placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors"
                            placeholder="(555) 000-0000"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-dark mb-2"
                          >
                            Subject <span className="text-burgundy">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formState.subject}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-custom-border bg-white px-4 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors appearance-none"
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
                          className="block text-sm font-medium text-dark mb-2"
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
                          className="w-full rounded-lg border border-custom-border bg-white px-4 py-2.5 text-sm text-dark placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-8 h-11 text-sm font-semibold cursor-pointer"
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
              <Card className="border-0 shadow-lg shadow-dark/5 ring-0">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-dark mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-burgundy/10">
                        <MapPin className="h-5 w-5 text-burgundy" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-dark">
                          Address
                        </div>
                        <p className="text-sm text-muted-text mt-0.5">
                          555 Anton Blvd
                          <br />
                          Costa Mesa, CA 92626
                        </p>
                      </div>
                    </div>
                    <Separator className="bg-custom-border" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-burgundy/10">
                        <Phone className="h-5 w-5 text-burgundy" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-dark">
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
                    <Separator className="bg-custom-border" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-burgundy/10">
                        <Mail className="h-5 w-5 text-burgundy" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-dark">
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
                    <Separator className="bg-custom-border" />
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-burgundy/10">
                        <Clock className="h-5 w-5 text-burgundy" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-dark">
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

              <Card className="border-0 shadow-lg shadow-dark/5 bg-warm-bg ring-0">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    Investment Inquiries
                  </h3>
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
