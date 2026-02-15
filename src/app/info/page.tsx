"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck, Truck, Zap, Info, Mail, Phone, ExternalLink } from "lucide-react";

export default function InfoPage() {
  return (
    <main className="relative bg-[#0a0a0b] text-white min-h-screen pt-32 md:pt-48 pb-20 selection:bg-[#295eb8]">
      {/* Dynamic Blue Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-[#295eb8]/10 blur-[100px] md:blur-[150px] rounded-full -z-10" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#295eb8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <section className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center md:justify-start gap-2 text-[#295eb8] font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-bold"
          >
            <Info size={14} /> Studio Specifications
          </motion.div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight">
            THE <span className="text-[#295eb8]">ESSENTIALS.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* 1. LOCATION CARD - Stacked on Mobile */}
          <div className="md:col-span-2 bg-[#111113] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 group hover:border-[#295eb8]/30 transition-all overflow-hidden relative">
            <div className="flex flex-col lg:flex-row h-full gap-8 md:gap-10">
              <div className="flex-1 relative z-10 text-center md:text-left">
                <MapPin className="text-[#295eb8] mb-6 mx-auto md:mx-0" size={32} />
                <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Visit the Lab.</h2>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-8">
                  Craigavon's premier destination for smartphone restoration and microsoldering.
                </p>
                <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl inline-block w-full md:w-auto">
                  <p className="text-white font-mono text-sm leading-relaxed">
                    12 Esky Road, BT66<br />
                    Craigavon, Northern Ireland
                  </p>
                </div>
                <button className="flex items-center justify-center md:justify-start gap-2 w-full md:w-auto text-[#295eb8] text-xs font-bold mt-8 uppercase tracking-widest hover:text-white transition-colors">
                  Get Directions <ExternalLink size={14} />
                </button>
              </div>
              <div className="flex-1 min-h-[250px] rounded-[1.5rem] md:rounded-[2rem] bg-zinc-800 overflow-hidden grayscale contrast-125 border border-white/10 group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.pexels.com/photos/2034373/pexels-photo-2034373.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                  alt="Location Map" 
                />
              </div>
            </div>
          </div>

          {/* 2. OPENING HOURS - Esky Style */}
          <div className="bg-[#111113] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:border-[#295eb8]/30 transition-all">
            <div>
              <Clock className="text-[#295eb8] mb-6 mx-auto md:mx-0" size={32} />
              <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-tight text-center md:text-left">Hours.</h2>
              <div className="space-y-5 font-mono text-[10px] md:text-xs">
                {[
                  { day: "MON - FRI", time: "09:00 - 19:00", active: true },
                  { day: "SATURDAY", time: "CLOSED", active: false },
                  { day: "SUNDAY", time: "CLOSED", active: false },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between border-b border-white/5 pb-3 ${item.active ? 'opacity-100' : 'opacity-30'}`}>
                    <span className="text-zinc-500 font-bold tracking-widest">{item.day}</span>
                    <span className="text-white">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl md:rounded-2xl bg-[#295eb8]/10 border border-[#295eb8]/20 text-[#295eb8] text-[10px] font-black text-center tracking-[0.2em]">
              WALK-INS WELCOME
            </div>
          </div>

          {/* 3. REPAIR TIERS - Optimized padding for mobile */}
          <div className="bg-[#111113] border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] group hover:border-[#295eb8]/40 transition-all text-center md:text-left">
            <Zap className="text-[#295eb8] mb-6 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-3">Express Repairs</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Same day repairs on screens and batteries. Often completed in 30-45 minutes while you wait.</p>
          </div>

          <div className="bg-[#111113] border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] group hover:border-[#295eb8]/40 transition-all text-center md:text-left">
            <ShieldCheck className="text-[#295eb8] mb-6 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-3">Superior Parts</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">We only buy quality components to ensure your device performs and looks as good as new.</p>
          </div>

          <div className="bg-[#111113] border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] group hover:border-[#295eb8]/40 transition-all text-center md:text-left">
            <Truck className="text-[#295eb8] mb-6 mx-auto md:mx-0" size={32} />
            <h3 className="text-xl font-bold mb-3">Mail-In Service</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Send your device via tracked delivery. Quick turnaround and fully insured return shipping.</p>
          </div>

        </div>

        {/* Contact Strip - Stacked on mobile */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-zinc-900/50 border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col sm:flex-row items-center gap-4 md:gap-6 hover:border-[#295eb8]/20 transition-all group text-center sm:text-left">
              <div className="bg-[#295eb8]/10 p-4 rounded-2xl text-[#295eb8] group-hover:scale-110 transition-transform"><Phone size={24}/></div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Call Lab</p>
                <p className="text-xl md:text-2xl font-black text-white">079 3355 3383</p>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col sm:flex-row items-center gap-4 md:gap-6 hover:border-[#295eb8]/20 transition-all group text-center sm:text-left">
              <div className="bg-[#295eb8]/10 p-4 rounded-2xl text-[#295eb8] group-hover:scale-110 transition-transform"><Mail size={24}/></div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Email Support</p>
                <p className="text-xl md:text-2xl font-black text-white">info@esky.repair</p>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
}