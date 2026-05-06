"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax and cinematic transforms
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.2]);
  const textY = useTransform(scrollY, [0, 400], [0, -50]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden bg-[#050505]">
      
      {/* Background Image with Cinematic Ken Burns & Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover animate-ken-burns"
        />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-start pt-20">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ opacity, y: textY }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] bg-primary"
            />
            <span className="text-primary font-display tracking-[0.4em] text-[10px] uppercase font-bold">The Pinnacle of Luxury</span>
          </div>
          
          <h1 className="font-serif text-7xl md:text-8xl lg:text-[10rem] text-white leading-[0.85] mb-8">
            Curated <br />
            <span className="text-primary italic">Perfection</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-xl mb-12 font-sans leading-relaxed">
            Redefining the Visakhapatnam skyline through <br className="hidden md:block" />
            visionary architecture and bespoke craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <Link
              href="/projects"
              className="group relative px-12 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-[0.25em] text-[11px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              <span className="relative z-10">Explore Portfolio</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </Link>
            
            <Link
              href="/contact"
              className="group flex items-center gap-5 text-white/80 hover:text-primary transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                <Search size={18} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Request Private Tour</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Glass Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-0 w-full glass z-30 py-8 border-t border-white/5"
      >
        <div className="container mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <span className="block text-primary font-serif text-3xl">22+</span>
            <span className="text-white/40 uppercase tracking-[0.2em] text-[9px] font-bold">Years Experience</span>
          </div>
          <div className="space-y-1">
            <span className="block text-primary font-serif text-3xl">17</span>
            <span className="text-white/40 uppercase tracking-[0.2em] text-[9px] font-bold">Grand Projects</span>
          </div>
          <div className="space-y-1">
            <span className="block text-primary font-serif text-3xl">4.5K+</span>
            <span className="text-white/40 uppercase tracking-[0.2em] text-[9px] font-bold">Happy Residents</span>
          </div>
          <div className="space-y-1">
            <span className="block text-primary font-serif text-3xl">0%</span>
            <span className="text-white/40 uppercase tracking-[0.2em] text-[9px] font-bold">Compromise</span>
          </div>
        </div>
      </motion.div>

      {/* Side Decorative Element */}
      <div className="absolute right-0 top-0 h-full w-24 border-l border-white/5 hidden lg:flex flex-col items-center justify-center gap-20 py-20 z-20">
        <div className="h-px w-10 bg-primary/30 rotate-90" />
        <span className="text-white/20 uppercase tracking-[0.5em] text-[9px] rotate-90 whitespace-nowrap font-bold">ESTABLISHED 2008</span>
        <div className="h-px w-10 bg-primary/30 rotate-90" />
      </div>

      {/* Location Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-28 left-6 md:left-12 flex items-center gap-3 text-white/40 text-[10px] uppercase tracking-[0.3em]"
      >
        <MapPin size={12} className="text-primary" />
        Madhurawada, Visakhapatnam, India
      </motion.div>

    </section>
  );
}

