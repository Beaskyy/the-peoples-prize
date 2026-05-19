"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(212,160,23,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg shadow-gold-500/20 transition-transform duration-300 group-hover:scale-105">
            <span className="text-lg font-bold text-white">P</span>
            <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-navy-600 ring-2 ring-white" />
          </div>
          <div className={`transition-colors duration-300 ${scrolled ? "text-navy-800" : "text-white"}`}>
            <span className="text-sm font-bold tracking-tight leading-none block">
              The People&apos;s
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-gold-500">
              Prize
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-gold-500/10 ${
                scrolled
                  ? "text-navy-700 hover:text-navy-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gold-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Nominate Students
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden rounded-lg p-2 transition-colors ${
            scrolled ? "text-navy-800" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-gold-200/30 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-gold-50 hover:text-navy-900"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg"
                >
                  Nominate Students
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
