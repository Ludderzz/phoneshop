"use client";
import { motion } from "framer-motion";
import { Send, Phone, Clock, ShieldCheck, Zap, Smartphone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] pt-32 md:pt-48 pb-20 px-6 relative overflow-hidden selection:bg-[#295eb8] selection:text-white">
      {/* Cinematic Blue Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#295eb8]/10 blur-[100px] md:blur-[150px] rounded-full -mr-24 -mt-24" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#295eb8]/5 blur-[100px] md:blur-[150px] rounded-full -ml-24 -mb-24" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        
        {/* Left Side: Brand & Info */}
        <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#295eb8]/20 border border-[#295eb8]/30 text-[#4a86f7] text-[10px] font-mono font-bold tracking-[0.2em] rounded mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#295eb8] animate-pulse" />
              LAB DISPATCH
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9] italic uppercase">
              START YOUR <br /> 
              <span className="text-[#295eb8] not-italic">REPAIR.</span>
            </h1>
            
            <p className="text-zinc-400 text-base md:text-lg mb-10 md:mb-12 max-w-sm leading-relaxed mx-auto lg:mx-0">
              Same day repairs, premium components, and certified technicians. No appointment needed.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="group flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
                <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-[#295eb8] group-hover:border-[#295eb8]/50 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Immediate Support</p>
                  <p className="text-white font-bold text-xl md:text-2xl">079 3355 3383</p>
                </div>
              </div>

              <div className="group flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
                <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-[#295eb8] group-hover:border-[#295eb8]/50 transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Opening Times</p>
                  <p className="text-white font-bold text-xl md:text-2xl">Mon — Fri: 9am - 7pm</p>
                </div>
              </div>
            </div>

            {/* Trust Badges - Stack on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-12 md:mt-16 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-zinc-300">
                <ShieldCheck size={16} className="text-[#295eb8]" />
                SUPERIOR WARRANTY
              </div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-zinc-300">
                <Zap size={16} className="text-[#295eb8]" />
                BEST PARTS
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="relative p-[1px] rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#111113] p-8 md:p-14 rounded-[1.9rem] md:rounded-[2.4rem] border border-white/5 relative overflow-hidden">
              
              <form className="space-y-6 md:space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group">
                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 block group-focus-within:text-[#295eb8] transition-colors">Client Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#295eb8] transition-all text-white placeholder:text-zinc-800" 
                      placeholder="e.g. Alex Smith" 
                    />
                  </div>
                  <div className="group">
                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 block group-focus-within:text-[#295eb8] transition-colors">Direct Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#295eb8] transition-all text-white placeholder:text-zinc-800" 
                      placeholder="07xxx xxxxxx" 
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 block group-focus-within:text-[#295eb8] transition-colors">Device Details</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#295eb8] transition-all text-white placeholder:text-zinc-800" 
                    placeholder="e.g. iPad Air 4, iPhone 14 Pro" 
                  />
                </div>

                <div className="group">
                  <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 block group-focus-within:text-[#295eb8] transition-colors">Fault Description</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-[#295eb8]/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-zinc-700 resize-none" 
                    placeholder="Cracked screen, battery draining..." 
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 md:py-6 bg-[#295eb8] text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-[#1e468a] transition-all shadow-xl shadow-[#295eb8]/20"
                >
                  SEND ENQUIRY
                  <Send size={18} />
                </motion.button>
              </form>

              {/* Background Decoration - Hidden on small mobile to avoid clutter */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12 hidden sm:block">
                <Smartphone size={300} strokeWidth={1} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}