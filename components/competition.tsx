"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ArrowRightIcon } from "@/components/ui/arrow-icon";

const eligibilityCriteria = [
  "Senior secondary school students (SS1 – SS3)",
  "Each school may nominate up to 3 students",
  "Students must be from schools within Kogi East",
  "Nominations must be submitted by the school Principal",
];

export default function Competition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="competition" className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-gold-400"
            >
              The Competition
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              How It <span className="text-gradient-gold">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-navy-200/70"
            >
              Schools across Kogi East nominate their brightest students. The top 3 from each Federal Constituency advance to the Final Round. Winners are celebrated at the Boundless Horizon Day alongside distinguished speakers and leaders.
            </motion.p>

            {/* Process steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {["Schools nominate 3 best senior students", "Round 1: Constituency-level competition", "Top 3 per constituency advance to Finals", "Winners honoured at Boundless Horizon Day"].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-sm font-bold text-gold-400">
                    {i + 1}
                  </div>
                  <span className="text-sm text-white/80">{step}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — eligibility card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-sm lg:p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-400">
              <CheckCircle2 size={14} />
              Eligibility
            </div>
            <h3 className="mt-6 font-heading text-xl font-bold text-white">Who Can Participate?</h3>
            <ul className="mt-6 space-y-4">
              {eligibilityCriteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-gold-500" />
                  <span className="text-sm text-navy-200/70">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-gold-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
              >
                Nominate Students Now
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-4 text-center text-xs text-navy-300/40">
              Deadline: June 25, 2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
