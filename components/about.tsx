"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, GraduationCap, Compass, Sparkles } from "lucide-react";
import { whyItMatters } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  GraduationCap,
  Compass,
  Sparkles,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      {/* Decorative */}
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-gold-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 rounded-full bg-navy-200/20 blur-[80px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-gold-600"
          >
            Why It Matters
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl lg:text-5xl"
          >
            Unlocking <span className="text-gradient-gold">Boundless Potential</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-navy-600/70"
          >
            Our young people are full of potential — curious, creative, and capable
            of greatness. Yet too many grow up without direction, without incentives
            to believe in honest striving. We are here to change that.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyItMatters.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group relative rounded-2xl border border-gold-200/40 bg-white p-8 shadow-sm transition-all duration-500 hover:border-gold-300/60 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-200/60 text-gold-600 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold-500/20">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-800">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600/60">
                  {item.description}
                </p>
                {/* Hover corner accent */}
                <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -top-8 -right-8 h-16 w-16 rotate-45 bg-gradient-to-r from-gold-400/0 to-gold-400/10 transition-all duration-300 group-hover:from-gold-400/10 group-hover:to-gold-400/20" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <div className="relative rounded-3xl border border-gold-200/30 bg-gradient-to-br from-navy-800 to-navy-900 p-10 text-center shadow-2xl lg:p-14">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                Our Mission
              </div>
            </div>
            <p className="font-heading text-xl leading-relaxed text-white/90 sm:text-2xl italic">
              &ldquo;Together, we can reorient our youth. Together, we can build a
              generation that values hard work, integrity, and vision.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gold-500/40" />
              <span className="text-sm font-semibold text-gold-400">
                Sumaila Omaga
              </span>
              <div className="h-px w-8 bg-gold-500/40" />
            </div>
            <p className="mt-1 text-xs text-white/40">
              President / Convener, The People&apos;s Prize Foundation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
