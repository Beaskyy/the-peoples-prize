"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { schedule } from "@/lib/constants";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/3 h-72 w-72 rounded-full bg-gold-200/30 blur-[100px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold-600"
          >
            <Clock size={14} />
            Event Timeline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl lg:text-5xl"
          >
            The <span className="text-gradient-gold">Journey</span> Ahead
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {/* Timeline */}
          <div className="relative space-y-10">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-400 via-gold-300 to-gold-200/40 sm:left-[27px]" />

            {schedule.map((event, i) => (
              <motion.div
                key={event.round}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Dot */}
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/20 sm:h-14 sm:w-14">
                  <Calendar size={18} />
                </div>

                {/* Card */}
                <div className="group flex-1 rounded-2xl border border-gold-200/40 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5 hover:-translate-y-0.5 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-heading text-xl font-bold text-navy-800">{event.round}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                      <Calendar size={12} />
                      {event.date}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600/70">{event.description}</p>
                  <div className="mt-4 space-y-2">
                    {event.venues.map((v) => (
                      <div key={v.venue} className="flex items-start gap-2 rounded-lg bg-cream-50 px-3 py-2">
                        <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold-500" />
                        <div>
                          <span className="text-xs font-semibold text-navy-700">{v.constituency}</span>
                          <p className="text-xs text-navy-500/60">{v.venue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
