"use client";

import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import { ArrowRightIcon } from "@/components/ui/arrow-icon";
import Link from "next/link";
import { impactStats } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gold-500/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-navy-400/10 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold-400/40"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-5 py-2 text-sm text-gold-300"
        >
          <Star size={14} className="text-gold-400" />
          <span className="font-medium">The People&apos;s Prize Foundation</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Restoring Belief in{" "}
          <span className="text-gradient-gold">Learning</span>,{" "}
          <span className="text-gradient-gold">Excellence</span> &{" "}
          <span className="text-gradient-gold">Integrity</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-navy-200/80 sm:text-xl"
        >
          A Mathematics & English contest for the brightest young minds in Kogi East
          — and the teachers who shape them.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-gold-500/25 transition-all duration-300 hover:shadow-gold-500/40 hover:-translate-y-0.5"
          >
            Nominate Your Students
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white/90 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-gold-500/20 hover:bg-white/[0.06]"
            >
              <div className="text-2xl font-bold text-gold-400 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-300/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
