"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { speakers } from "@/lib/constants";
import { Users } from "lucide-react";
import Image from "next/image";

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="relative overflow-hidden py-24 lg:py-32 gradient-hero">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-gold-500/5 blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold-400"
          >
            <Users size={14} />
            Boundless Horizon Day
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Featured Speakers for <span className="text-gradient-gold">2026</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-navy-200/70"
          >
            Distinguished leaders sharing their journeys at our 2026 events — showing students real, attainable paths to fulfilment.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold-500/20 hover:bg-white/[0.08]"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl bg-navy-800 ring-2 ring-gold-500/20 transition-all duration-300 group-hover:ring-gold-500/40">
                <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-base font-bold text-white">{speaker.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-300/60">{speaker.title}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center text-sm text-navy-300/50"
        >
          October 9, 2026 — The Multipurpose Hall, beside Senator(Dr.) Ahmadu Ali House, Federal Polytechnic Idah
        </motion.p>
      </div>
    </section>
  );
}
