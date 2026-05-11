"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);
}

const projects = [
  {
    id: 1,
    title: "Balaji Seaview Tower",
    location: "Beach Road, Vizag",
    category: "Residential",
    bhk: "3 & 4 BHK Luxury",
    price: "₹3.5 Cr Onwards",
    status: "Ongoing", // amber
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2 h-[400px] md:h-[624px]",
  },
  {
    id: 2,
    title: "The Reserve Villas",
    location: "Madhurawada",
    category: "Villas",
    bhk: "4 & 5 BHK Villas",
    price: "₹5.2 Cr Onwards",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 h-[300px]",
  },
  {
    id: 3,
    title: "Balaji Business Park",
    location: "Siripuram",
    category: "Commercial",
    bhk: "Premium Office Spaces",
    price: "₹1.5 Cr Onwards",
    status: "Completed", // sage
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 h-[300px]",
  },
  {
    id: 4,
    title: "Aura Residences",
    location: "MVP Colony",
    category: "Residential",
    bhk: "3 BHK Premium",
    price: "₹2.1 Cr Onwards",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1 h-[300px]",
  },
  {
    id: 5,
    title: "Balaji One",
    location: "Seethammadhara",
    category: "Residential",
    bhk: "4 BHK Ultra Luxury",
    price: "₹4.8 Cr Onwards",
    status: "Upcoming", // copper
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1 h-[300px]",
  },
];

const filters = ["All", "Residential", "Villas", "Commercial", "Ongoing"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        once: true,
      }
    });
    
    // Heading line animation
    ScrollTrigger.create({
      trigger: ".heading-line-trigger",
      start: "top 80%",
      onEnter: () => document.querySelector('.projects-heading-line')?.classList.add('drawn'),
      once: true
    });
  }, { scope: containerRef });

  const filteredProjects = projects.filter(p => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Ongoing") return p.status === "Ongoing";
    return p.category === activeFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing": return "bg-[#D97706]";
      case "Completed": return "bg-sage";
      case "Upcoming": return "bg-copper";
      default: return "bg-ink";
    }
  };

  return (
    <section ref={containerRef} id="projects" className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8 heading-line-trigger">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-muted mb-4">
              OUR MASTERPIECES
            </p>
            <h2 className="font-display text-[48px] md:text-[64px] text-ink leading-none">
              Homes That Inspire
            </h2>
            <span className="projects-heading-line heading-line mt-4" />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-heading font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter 
                    ? "neu-inset" 
                    : "neu-raised text-ink-light hover:text-gold"
                }`}
              >
                <span className={activeFilter === filter ? "text-gradient-gold" : ""}>{filter}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div ref={gridRef} layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`project-card relative rounded-[16px] overflow-hidden group ${project.className}`}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(28,25,23,0.8)_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
                  <div className="flex items-center gap-3 mb-2 mt-auto">
                    <span className={`text-[10px] font-mono tracking-widest uppercase text-white px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-white/80 font-sans text-sm">{project.location}</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl text-warm-white font-semibold mb-1">
                    {project.title}
                  </h3>
                  
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div>
                          <p className="text-cream font-sans text-sm">{project.bhk}</p>
                          <p className="text-gold font-heading font-medium mt-1">{project.price}</p>
                        </div>
                        <Link href="#" className="flex items-center text-gold font-heading font-medium text-sm hover:text-gold-light group/link">
                          Explore 
                          <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
