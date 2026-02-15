"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, Shield, Zap, Toolbox, Star, Plus, Minus, 
  Watch, Gamepad2, Music, Scissors, Headphones, ChevronRight, CheckCircle2 
} from "lucide-react";

// --- Sub-Component: ESKY BLUE Device Marquee ---
function DeviceMarquee() {
  const devices = [
    { icon: <Smartphone size={28} strokeWidth={1.5} />, label: "Smartphones" },
    { icon: <Watch size={28} strokeWidth={1.5} />, label: "Watches" },
    { icon: <Gamepad2 size={28} strokeWidth={1.5} />, label: "Consoles" },
    { icon: <Music size={28} strokeWidth={1.5} />, label: "MP3 Players" },
    { icon: <Scissors size={28} strokeWidth={1.5} />, label: "Straighteners" },
    { icon: <Headphones size={28} strokeWidth={1.5} />, label: "Accessories" },
  ];

  return (
    <section className="relative py-12 md:py-20 border-y border-white/5 bg-[#0d0d0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {devices.map((device, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-[#295eb8]/5 hover:border-[#295eb8]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,94,184,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-zinc-500 group-hover:text-[#295eb8] mb-3 md:mb-4">
                {device.icon}
              </div>
              <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 group-hover:text-white transition-colors text-center">
                {device.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: FAQ Section ---
const faqs = [
  {
    q: "How long does a typical repair take?",
    a: "Most screen and battery replacements are completed within 30-45 minutes. We aim for same-day service on all popular models."
  },
  {
    q: "Are the parts you use high quality?",
    a: "Absolutely. Although cheaper parts are available, we only buy quality components to ensure your device looks and performs like new."
  },
  {
    q: "Is there a warranty on the repair?",
    a: "Yes, all our parts are backed with a superior warranty assuring they are free from manufacturing defects."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto pb-40"> {/* Extra bottom padding for layout footer */}
      <div className="inline-block px-3 py-1 bg-[#295eb8]/10 text-[#295eb8] text-[10px] font-mono font-bold rounded mb-6 uppercase tracking-widest">Questions</div>
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10 text-white uppercase italic opacity-90 text-center md:text-left">Common Inquiries.</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-zinc-900/50 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 md:p-8 flex justify-between items-center text-left text-white gap-4"
            >
              <span className="text-base md:text-lg font-bold">{faq.q}</span>
              <div className={`shrink-0 p-2 rounded-full transition-all ${openIndex === i ? 'bg-[#295eb8]' : 'bg-white/5'}`}>
                {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-500 text-sm md:text-base leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Sub-Component: Service Card ---
function ServiceCard({ icon, title, label, desc }: any) {
  return (
    <div className="bg-[#111113] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-[#295eb8]/40 transition-all group shadow-2xl">
      <div className="mb-6 p-4 bg-white/[0.03] w-fit rounded-2xl group-hover:bg-[#295eb8]/10 transition-colors mx-auto md:mx-0">{icon}</div>
      <div className="text-[10px] font-mono text-[#295eb8] mb-2 uppercase tracking-[0.3em] font-bold text-center md:text-left">{label}</div>
      <h3 className="text-xl md:text-2xl font-black mb-4 text-white uppercase tracking-tight text-center md:text-left">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed text-center md:text-left">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0b] overflow-hidden selection:bg-[#295eb8] selection:text-white">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 md:pt-48 pb-20">
        <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#295eb8]/10 blur-[100px] md:blur-[150px] rounded-full" />
        
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#295eb8]/10 border border-[#295eb8]/20 mb-6 md:mb-8">
              <CheckCircle2 size={14} className="text-[#295eb8]" />
              <span className="text-[10px] font-mono tracking-widest text-[#295eb8] uppercase font-black">Certified Repair Lab</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[9rem] font-black tracking-tighter leading-[0.9] mb-8 text-white italic uppercase">
              Faster <br className="hidden md:block" /> <span className="text-[#295eb8] not-italic">Repairs.</span> <br /> 
              <span className="text-zinc-800 opacity-50">Better Prices.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-500 max-w-lg mb-10 md:mb-12 leading-relaxed mx-auto lg:mx-0">
              Superior service for Craigavon. Specialized technicians, quality parts, and same-day turnaround on most devices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#295eb8] text-white rounded-2xl font-black text-lg hover:bg-[#1e468a] transition-all shadow-lg shadow-[#295eb8]/20">
                GET IN TOUCH
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                OUR STORY
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative order-1 lg:order-2 px-4 md:px-0"
          >
            <div className="bg-zinc-900/50 p-2 md:p-3 rounded-[3rem] md:rounded-[4rem] border border-white/10 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800" 
                alt="Repair" 
                className="rounded-[2.5rem] md:rounded-[3.5rem] w-full h-[400px] md:h-[650px] object-cover grayscale-[0.5]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 5 }} 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-bottom-6 lg:-left-6 bg-[#111113] p-5 md:p-8 rounded-2xl md:rounded-[2rem] border border-[#295eb8]/30 shadow-2xl flex items-center gap-4 min-w-[200px]"
            >
              <div className="flex flex-col text-left">
                <span className="text-3xl md:text-4xl font-black text-white leading-none">4.9</span>
                <div className="flex text-[#295eb8] mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
              </div>
              <div className="h-8 w-px bg-white/10 mx-1 md:mx-2" />
              <div className="text-[8px] md:text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-widest text-left">
                Verified <br /> Reviews
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <DeviceMarquee />

      {/* 2. SERVICES SECTION */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-6 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase italic">Superior <br className="hidden md:block"/><span className="text-[#295eb8] not-italic">Service.</span></h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-xs font-medium">
            We repair all makes & models with thousands of components in stock.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={<Smartphone className="text-[#295eb8]" />} 
            label="Most Popular" 
            title="Smartphone" 
            desc="Cracked screen replacement services that are both fast and affordable." 
          />
          <ServiceCard 
            icon={<Zap className="text-[#295eb8]" />} 
            label="Quick Fix" 
            title="Battery" 
            desc="FixTeam performs professional battery replacements to restore your power." 
          />
          <ServiceCard 
            icon={<Toolbox className="text-[#295eb8]" />} 
            label="Advanced" 
            title="Diagnostics" 
            desc="We perform deep diagnostics to determine the extent of internal damage." 
          />
          <ServiceCard 
            icon={<Shield className="text-[#295eb8]" />} 
            label="Certified" 
            title="Warranty" 
            desc="All our parts are backed with a warranty assuring total peace of mind." 
          />
        </div>
      </section>

      <FAQAccordion />

    </main>
  );
}