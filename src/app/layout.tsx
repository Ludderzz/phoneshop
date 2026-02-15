import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Smartphone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Titan Mobile | The Future is Here",
  description: "Experience the most advanced phone shop on the planet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0b] text-white antialiased selection:bg-[#295eb8] selection:text-white`}>
        
        {/* 1. THE MESH BACKGROUND */}
        <div className="bg-mesh fixed inset-0 z-0 pointer-events-none opacity-40" />
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        
        {/* 2. THE NAVIGATION */}
        <Navbar />

        {/* 3. THE PAGE CONTENT */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>

        {/* 4. THE EXPANDED LAB FOOTER */}
        <footer className="relative z-10 bg-[#0d0d0e] border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#295eb8]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              
              {/* Brand Column */}
              <div className="col-span-1 md:col-span-1 text-center md:text-left">
                <div className="text-2xl font-black tracking-tighter mb-4 italic uppercase">
                  TITAN<span className="text-[#295eb8] not-italic">.</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium">
                  Leading the frontier in device restoration and microsoldering technology.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <Link href="#" className="p-2.5 bg-white/5 rounded-xl text-zinc-400 hover:text-[#295eb8] hover:bg-[#295eb8]/10 transition-all border border-white/5">
                    <Instagram size={18} />
                  </Link>
                  <Link href="#" className="p-2.5 bg-white/5 rounded-xl text-zinc-400 hover:text-[#295eb8] hover:bg-[#295eb8]/10 transition-all border border-white/5">
                    <Facebook size={18} />
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h4 className="text-[10px] font-mono font-black text-[#295eb8] uppercase tracking-[0.3em] mb-6">Navigation</h4>
                <ul className="space-y-4 text-sm font-bold text-zinc-500">
                  <li><Link href="/" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1 group">Home <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1 group">About <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
                  <li><Link href="/info" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1 group">Services <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1 group">Contact <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity"/></Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-left">
                <h4 className="text-[10px] font-mono font-black text-[#295eb8] uppercase tracking-[0.3em] mb-6">Inquiries</h4>
                <ul className="space-y-4 text-sm font-bold text-zinc-500">
                  <li className="flex items-center justify-center md:justify-start gap-3"><Smartphone size={14} className="text-[#295eb8]"/> 079 3355 3383</li>
                  <li className="flex items-center justify-center md:justify-start gap-3"><Mail size={14} className="text-[#295eb8]"/> hello@titan.repair</li>
                  <li className="flex items-start justify-center md:justify-start gap-3"><MapPin size={14} className="text-[#295eb8] mt-0.5"/> BT66 Craigavon, NI</li>
                </ul>
              </div>

              {/* Status */}
              <div className="text-center md:text-left bg-white/[0.02] p-6 rounded-3xl border border-white/5">
                <h4 className="text-[10px] font-mono font-black text-[#295eb8] uppercase tracking-[0.3em] mb-4">Lab Status</h4>
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-white mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  ACCEPTING REPAIRS
                </div>
                <p className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                  AVERAGE TURNAROUND: <br />
                  <span className="text-white">45 MINUTES</span>
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                © 2026 TITAN MOBILE LTD. BUILT FOR THE FUTURE.
              </p>
              <div className="flex gap-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                <Link href="#" className="hover:text-white transition-colors">Warranty</Link>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}