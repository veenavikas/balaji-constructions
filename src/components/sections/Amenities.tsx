"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const amenities = [
  {
    id: "clubhouse",
    title: "The Grand Clubhouse",
    desc: "40,000 sq.ft of pure luxury and recreation",
    type: "large",
    image: "https://images.unsplash.com/photo-1542668595-fa9394e5b686?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-1 md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-full",
  },
  {
    id: "rooftop",
    title: "Infinity Pool",
    desc: "Sky-high relaxation",
    type: "medium",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    className: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: "smart",
    title: "Smart Home Tech",
    desc: "Automated living spaces",
    type: "medium",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    className: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: "gym",
    title: "World-class Gym",
    desc: "Technogym equipped",
    type: "medium",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    className: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: "security",
    title: "24/7 Security",
    desc: "Multi-tier surveillance",
    type: "small",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    className: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: "vastu",
    title: "100% Vastu",
    desc: "Harmonious spaces",
    type: "small",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    className: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: "yoga",
    title: "Yoga Pavilion",
    desc: "Zen meditation zones",
    type: "small",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    className: "col-span-1 md:col-span-1 md:row-span-1",
  },
];

const containerVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Amenities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} id="amenities" className="py-24 bg-cream-deep">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-muted mb-4">
            LIFESTYLE
          </p>
          <h2 className="font-display text-[48px] md:text-[56px] text-ink leading-none">
            The Balaji Experience
          </h2>
          <span className="projects-heading-line heading-line drawn mt-6" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[200px]"
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              variants={itemVariants}
              className={`group relative rounded-[20px] bg-warm-white border border-border overflow-hidden transition-all duration-300 hover:border-gold-pale hover:shadow-[0_20px_60px_rgba(184,134,11,0.15),0_4px_16px_rgba(0,0,0,0.06)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between ${amenity.className} ${amenity.type === 'large' ? 'p-0' : 'p-6'}`}
            >
              {amenity.type === 'large' ? (
                <>
                  <Image
                    src={amenity.image!}
                    alt={amenity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur border border-gold/50 text-gold-pale font-mono text-xs uppercase tracking-widest mb-3">
                      Signature
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-warm-white mb-2">{amenity.title}</h3>
                    <p className="font-sans text-cream text-sm">{amenity.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full neu-raised flex items-center justify-center bg-cream transition-colors duration-300 group-hover:bg-grad-gold group-hover:text-white text-gold mb-6">
                    <svg className="w-6 h-6 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={amenity.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-ink mb-1">{amenity.title}</h3>
                    <p className="font-sans text-sm text-ink-muted">{amenity.desc}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
