"use client";
import { motion } from "framer-motion";
import { Hammer, Award, Cpu, Users, ArrowRight, Zap, ShieldCheck } from "lucide-react";

// --- Sub-Component: Value Prop ---
function ValuePoint({ icon, title, desc }: any) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start text-center sm:text-left group">
      <div className="bg-[#295eb8]/10 p-4 rounded-2xl text-[#295eb8] border border-[#295eb8]/20 group-hover:bg-[#295eb8]/20 transition-colors shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative bg-[#0a0a0b] overflow-hidden pt-24 md:pt-32 selection:bg-[#295eb8] selection:text-white">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#295eb8 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#295eb8]/10 blur-[100px] md:blur-[150px] rounded-full -z-10" />

      {/* 1. HERO SECTION */}
      <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="text-[#295eb8] font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block font-bold">The Esky Story</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 italic uppercase">
              SUPERIOR <br /> 
              <span className="text-[#295eb8] not-italic">CRAFT.</span> <br /> 
              <span className="opacity-40">BETTER PRICES.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg font-medium mx-auto lg:mx-0">
              We aim to deliver a superior service to our customers. Based in Craigavon, our studio bridges the gap between "cheap fixes" and factory-standard restoration.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative px-4 md:px-0"
          >
            <div className="bg-zinc-900 p-2 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our Workshop" 
                className="rounded-[2.2rem] md:rounded-[2.7rem] w-full h-[350px] md:h-[500px] object-cover grayscale-[0.3]"
              />
            </div>
            {/* Floating Badge - Adjusted for mobile position */}
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-[#295eb8] p-5 md:p-8 rounded-2xl shadow-xl">
               <ShieldCheck size={28} className="text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY (BENTO GRID) */}
      <section className="py-20 md:py-32 px-6 bg-[#111113] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-4 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic opacity-20">Our DNA</h2>
            <p className="text-[#295eb8] font-mono text-xs md:text-sm font-bold uppercase tracking-widest">Why Choose Us?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-900/50 border border-white/5 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-[#295eb8]/40 transition-all group text-center md:text-left">
              <Cpu className="text-[#295eb8] mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Quality Components</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">Although cheaper parts are available, we only buy quality components to ensure your device performs as good as new.</p>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-[#295eb8]/40 transition-all group text-center md:text-left">
              <Award className="text-[#295eb8] mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Superior Warranty</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">All our parts are backed with a full warranty, assuring replacement parts are free from manufacturing defects.</p>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-[#295eb8]/40 transition-all group text-center md:text-left">
              <Zap className="text-[#295eb8] mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Same Day Repairs</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">When your phone breaks, you need it fixed now. We aim for same-day turnaround on most popular models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE WORKBENCH */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Images stack on mobile */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden h-48 md:h-72 border border-white/10 md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden h-48 md:h-72 mt-8 md:mt-12 border border-white/10 md:rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover" />
              </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-10 leading-tight uppercase italic">PRECISION <br className="hidden md:block"/> YOU CAN TRUST.</h2>
            <div className="space-y-10">
              <ValuePoint 
                icon={<Users size={24} />} 
                title="Repaired Thousands" 
                desc="Our technicians are fully certified and have repaired thousands of devices. Experience matters when it comes to your tech." 
              />
              <ValuePoint 
                icon={<Hammer size={24} />} 
                title="Specialist Tools" 
                desc="We invest in the latest diagnostics and microsoldering equipment to fix issues others claim are impossible." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 md:py-40 px-6">
        <div className="bg-[#295eb8] max-w-5xl mx-auto p-10 md:p-16 rounded-[2.5rem] md:rounded-[3rem] text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter relative z-10 leading-none">Restoring your <br className="md:hidden"/> digital life.</h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto font-medium relative z-10 text-base md:text-lg">Visit us today for a free diagnostic. Most repairs are completed while you wait.</p>
          
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#295eb8] font-black rounded-2xl hover:bg-[#1a1a1b] hover:text-white transition-all flex items-center justify-center gap-3 mx-auto relative z-10 group shadow-xl">
            GET A QUOTE <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}