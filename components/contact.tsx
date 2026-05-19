"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/constants";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Nominate Your <span className="text-gradient-gold">Students</span>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3"
        >
          {/* Email */}
          <Link
            href={`mailto:${siteConfig.email}`}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-gold-200/40 bg-cream-50/50 p-8 text-center transition-all duration-300 hover:border-gold-300/60 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200/60 text-gold-600 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold-500/20">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Email</p>
              <p className="mt-1 text-sm font-semibold text-navy-700">{siteConfig.email}</p>
            </div>
          </Link>

          {/* Phone */}
          <Link
            href={`tel:${siteConfig.phone}`}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-gold-200/40 bg-cream-50/50 p-8 text-center transition-all duration-300 hover:border-gold-300/60 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200/60 text-gold-600 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold-500/20">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Phone / SMS</p>
              <p className="mt-1 text-sm font-semibold text-navy-700">0803 291 5719</p>
            </div>
          </Link>

          {/* Address */}
          <div className="group flex flex-col items-center gap-4 rounded-2xl border border-gold-200/40 bg-cream-50/50 p-8 text-center transition-all duration-300 hover:border-gold-300/60 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200/60 text-gold-600 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold-500/20">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">Address</p>
              <p className="mt-1 text-sm font-semibold text-navy-700 leading-relaxed">{siteConfig.address}</p>
            </div>
          </div>
        </motion.div>

        {/* Deadline banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-14 max-w-2xl rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 p-8 text-center shadow-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Nomination Deadline
          </p>
          <p className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
            June 25, 2026
          </p>
          <p className="mt-3 text-sm text-navy-200/60">
            Send student names via email or SMS to secure their spot in Round 1.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
