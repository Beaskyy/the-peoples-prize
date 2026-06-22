"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig } from "@/lib/constants";
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    schoolName: "",
    contactNo: "",
    nominees: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/nominate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ schoolName: "", contactNo: "", nominees: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold-200/20 blur-[120px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold-600"
          >
            <Send size={14} />
            Get Involved
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl lg:text-5xl"
          >
            Nominate Your <span className="text-gradient-gold">Students</span> for the 2026 Contest
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-navy-600/70"
          >
            Schools are invited to nominate three (3) of their best senior students. Send nominations on or before <span className="font-semibold text-navy-700">June 25, 2026</span>.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          {/* Contact Info & Deadline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Deadline banner */}
            <div className="rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 p-8 text-center shadow-xl shadow-navy-900/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                Nomination Deadline
              </p>
              <p className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
                June 25, 2026
              </p>
            </div>

            {/* Email */}
            <Link
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-gold-200/40 bg-cream-50/50 p-6 transition-all duration-300 hover:border-gold-300/60 hover:shadow-md hover:shadow-gold-500/5 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200/60 text-gold-600 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Email</p>
                <p className="mt-1 text-sm font-semibold text-navy-700 break-all">{siteConfig.email}</p>
              </div>
            </Link>

            {/* Phone */}
            <Link
              href={`tel:${siteConfig.phone}`}
              className="group flex items-center gap-4 rounded-2xl border border-gold-200/40 bg-cream-50/50 p-6 transition-all duration-300 hover:border-gold-300/60 hover:shadow-md hover:shadow-gold-500/5 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200/60 text-gold-600 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Phone / SMS</p>
                <p className="mt-1 text-sm font-semibold text-navy-700">0803 291 5719</p>
              </div>
            </Link>

            {/* Address */}
            <div className="group flex items-center gap-4 rounded-2xl border border-gold-200/40 bg-cream-50/50 p-6 transition-all duration-300 hover:border-gold-300/60 hover:shadow-md hover:shadow-gold-500/5 hover:-translate-y-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200/60 text-gold-600 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Address</p>
                <p className="mt-1 text-sm font-semibold text-navy-700 leading-relaxed">{siteConfig.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-2xl border border-navy-100 bg-white p-8 shadow-xl shadow-navy-900/5 sm:p-10"
          >
            <h3 className="font-heading text-xl font-bold text-navy-900 mb-6">Nomination Form</h3>
            
            {status === "success" ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
                <h4 className="text-lg font-semibold text-green-900">Nomination Received!</h4>
                <p className="mt-2 text-sm text-green-700">
                  Thank you. We have received your nomination and will be in touch with the school representative shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800 underline"
                >
                  Submit another nomination
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="schoolName" className="block text-sm font-semibold text-navy-800 mb-1.5">
                    School Name
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    required
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full rounded-lg border border-navy-200 px-4 py-3 text-sm text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="e.g. Federal Polytechnic Secondary School"
                  />
                </div>

                <div>
                  <label htmlFor="contactNo" className="block text-sm font-semibold text-navy-800 mb-1.5">
                    School Rep Contact No
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    required
                    value={formData.contactNo}
                    onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                    className="w-full rounded-lg border border-navy-200 px-4 py-3 text-sm text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="e.g. 08012345678"
                  />
                </div>

                <div>
                  <label htmlFor="nominees" className="block text-sm font-semibold text-navy-800 mb-1.5">
                    Nominee Names (Up to 3)
                  </label>
                  <textarea
                    id="nominees"
                    required
                    rows={4}
                    value={formData.nominees}
                    onChange={(e) => setFormData({ ...formData, nominees: e.target.value })}
                    className="w-full resize-none rounded-lg border border-navy-200 px-4 py-3 text-sm text-navy-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="1. First Student Name&#10;2. Second Student Name&#10;3. Third Student Name"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    <AlertCircle size={16} />
                    <p>Something went wrong. Please try again or use the email above.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gold-600 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Nominations
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
