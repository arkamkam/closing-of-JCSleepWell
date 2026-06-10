import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_ICON =
  "/res/" + encodeURIComponent("JC Sleep Well Project_Horizontal logo (PNG).png");

export const metadata: Metadata = {
  title: "JC Sleep Well Project Finale cum International Conference 2026",
  description:
    "September 14, 2026 at CUHK — Jockey Club Sleep Well Project finale and international conference, 9:30 AM to 6:00 PM.",
  icons: {
    icon: [{ url: SITE_ICON, type: "image/png" }],
    shortcut: SITE_ICON,
    apple: SITE_ICON,
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased light`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full bg-zinc-100 font-sans text-zinc-900">
        <Navbar />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
