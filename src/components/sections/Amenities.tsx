"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { 
  Building, 
  Coffee, 
  Zap, 
  Waves, 
  Smartphone, 
  Compass, 
  ShieldCheck, 
  Leaf 
} from "lucide-react";

const amenities = [
  { icon: Building, title: "Grand Clubhouse", desc: "A 50,000 sq.ft state-of-the-art recreation hub." },
  { icon: Coffee, title: "Rooftop Lounge", desc: "Panoramic city views with premium dining." },
  { icon: Zap, title: "EV Charging", desc: "Future-ready infrastructure for every parking space." },
  { icon: Waves, title: "Infinity Pool", desc: "Temperature-controlled rooftop swimming." },
  { icon: Smartphone, title: "Smart Home", desc: "IoT enabled automation for modern living." },
  { icon: Compass, title: "Vastu Compliant", desc: "100% adherence to traditional architectural science." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Multi-tier security with AI surveillance." },
  { icon: Leaf, title: "Green Spaces", desc: "Lush botanical gardens and walking trails." },
];

export default function Amenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="amenities" className="relative bg-background py-24 border-t border-white/5 overflow-hidden">
      {/* Subtle Golden Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201, 168, 76, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 168, 76, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h4 className="text-primary font-display tracking-[0.2em] uppercase text-sm mb-4 font-semibold">The Experience</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">Curated For The Elite</h2>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 hover:bg-card/80"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
