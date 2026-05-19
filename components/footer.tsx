import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-gold-200/20 bg-navy-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-60 w-[600px] rounded-full bg-gold-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg shadow-gold-500/20">
                <span className="text-lg font-bold text-white">P</span>
              </div>
              <div>
                <span className="text-sm font-bold text-white leading-none block">The People&apos;s</span>
                <span className="text-xs font-medium tracking-widest uppercase text-gold-500">Prize</span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-300/60">
              {siteConfig.tagline}. A people-owned initiative for the youth of Kogi East, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-300/60 transition-colors hover:text-gold-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-navy-300/60">
                <Mail size={14} className="flex-shrink-0 text-gold-500/60" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold-400">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-300/60">
                <Phone size={14} className="flex-shrink-0 text-gold-500/60" />
                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-gold-400">0803 291 5719</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-300/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold-500/60" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-navy-300/40">
            © {siteConfig.year} The People&apos;s Prize Initiative. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-navy-300/40">
            Made with <Heart size={12} className="text-gold-500/60" /> for Kogi East
          </p>
        </div>
      </div>
    </footer>
  );
}
