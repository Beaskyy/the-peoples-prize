"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { prizes } from "@/lib/constants";

export default function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 pattern-dots opacity-40" />
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-gold-600"
          >
            The Rewards
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl lg:text-5xl"
          >
            Brilliance, <span className="text-gradient-gold">Rewarded</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-navy-600/70"
          >
            Outstanding students receive substantial prizes — proving that honest effort is not only valuable but also rewarding.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className={`group relative overflow-hidden rounded-3xl border p-8 text-center transition-all duration-500 hover:-translate-y-2 ${
                i === 0
                  ? "border-gold-300/50 bg-gradient-to-b from-gold-50 to-white shadow-xl shadow-gold-500/10 hover:shadow-2xl hover:shadow-gold-500/15 lg:scale-105 sm:order-2"
                  : i === 1
                  ? "border-gold-200/30 bg-white shadow-sm hover:shadow-xl hover:shadow-gold-500/5 sm:order-1"
                  : "border-gold-200/30 bg-white shadow-sm hover:shadow-xl hover:shadow-gold-500/5 sm:order-3"
              }`}
            >
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="mx-auto w-fit rounded-b-xl bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Champion
                  </div>
                </div>
              )}
              <div className={`mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-2xl text-4xl transition-transform duration-300 group-hover:scale-110 ${i === 0 ? "bg-gradient-to-br from-gold-100 to-gold-200/60" : "bg-cream-100"}`}>
                {prize.icon}
              </div>
              <div className="mt-6 text-sm font-semibold uppercase tracking-widest text-navy-400">
                {prize.place} Place
              </div>
              <div className="mt-3 font-heading text-4xl font-bold text-navy-800 lg:text-5xl">
                {prize.amount}
              </div>
              <p className="mt-2 text-sm text-navy-500/60">{prize.description}</p>
              <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
              <div className="mt-6 rounded-xl bg-cream-100/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">Teacher Reward</p>
                <p className="mt-1 text-sm font-bold text-navy-700">50% of student&apos;s prize</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-2.5 text-sm text-navy-600/70">
            <span className="text-lg">🎁</span>
            <span>4th–9th place consolation: <span className="font-semibold text-navy-700">₦25,000 each</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
