"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/info", label: "Info" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-6 md:top-8 w-full flex justify-center z-[100] px-4">
      <div className="bg-[#111113]/60 backdrop-blur-2xl flex gap-1 p-1.5 rounded-full border border-white/10 shadow-2xl shadow-black/50">
        {links.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative px-4 md:px-6 py-2 text-[11px] md:text-sm font-bold uppercase tracking-widest transition-colors"
            >
              {isActive && (
                <motion.div 
                  layoutId="nav-pill" 
                  className="absolute inset-0 bg-[#295eb8]/20 border border-[#295eb8]/30 rounded-full" 
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }} 
                />
              )}
              
              <span className={`relative z-10 transition-colors duration-300 ${
                isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
              }`}>
                {link.label}
              </span>

              {isActive && (
                <motion.span 
                  layoutId="active-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#295eb8] rounded-full md:hidden"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}