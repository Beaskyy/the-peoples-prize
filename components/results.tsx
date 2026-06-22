"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Download, FileText, Calendar, ExternalLink } from "lucide-react";
import { examResults } from "@/lib/constants";

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showToast, setShowToast] = useState(false);

  return (
    <section id="results" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Decorative */}
      <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gold-100/30 blur-[120px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-gold-600"
          >
            Transparency
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl lg:text-5xl"
          >
            Exam <span className="text-gradient-gold">Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-navy-600/70"
          >
            We believe in complete transparency. Every year, we publish the official results 
            of our competitions so students and schools can verify their performance.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {examResults.map((result, i) => (
            <motion.div
              key={result.year}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group flex flex-col justify-between gap-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold-200 hover:shadow-md sm:flex-row sm:items-center sm:p-8"
            >
              <div className="flex items-start gap-4 sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy-800">{result.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-navy-600/70">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar size={14} className="text-gold-500" />
                      {result.year} Cycle
                    </span>
                    <span className="hidden sm:inline-block text-navy-200">•</span>
                    <span>Uploaded: {result.dateUploaded}</span>
                  </div>
                  <p className="mt-2 text-sm text-navy-600/60">{result.description}</p>
                </div>
              </div>
              <a
                href={result.fileUrl}
                target={result.fileUrl !== "#" ? "_blank" : undefined}
                rel={result.fileUrl !== "#" ? "noopener noreferrer" : undefined}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-gold-200 bg-white px-5 py-2.5 text-sm font-semibold text-gold-600 shadow-sm transition-all duration-300 hover:bg-gold-50 hover:text-gold-700 sm:w-auto"
                onClick={(e) => {
                  if (result.fileUrl === "#") {
                    e.preventDefault();
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                  }
                }}
              >
                {result.fileUrl.includes("google.com") ? <ExternalLink size={16} /> : <Download size={16} />}
                {result.fileUrl.includes("google.com") ? "View Sheet" : "Download PDF"}
              </a>
            </motion.div>
          ))}
          {(examResults.length as number) === 0 && (
             <div className="text-center text-navy-600/60 p-10 border border-dashed rounded-2xl">
               No results have been uploaded yet. Check back soon.
             </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 flex items-center gap-3 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white shadow-xl ring-1 ring-white/10"
          >
            <div className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
            This result file is not yet available.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
