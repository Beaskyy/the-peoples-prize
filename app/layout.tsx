import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "The People's Prize | Restoring Belief in Learning, Excellence & Integrity",
  description:
    "A people-owned initiative designed to restore belief in learning, excellence, and integrity among the youth of Kogi East, Nigeria. Mathematics contest with ₦1M+ prizes, mentorship, and the Boundless Horizon Day.",
  keywords: [
    "The People's Prize",
    "Kogi East",
    "Mathematics competition",
    "Nigeria education",
    "Youth empowerment",
    "Boundless Horizon Day",
  ],
  openGraph: {
    title: "The People's Prize — Restoring Belief in Learning, Excellence & Integrity",
    description:
      "A Mathematics contest for the brightest young minds in Kogi East. ₦1,000,000 first place prize.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
