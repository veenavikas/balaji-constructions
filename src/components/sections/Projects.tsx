"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "The Obsidian",
    slug: "the-obsidian",
    category: "Residential",
    location: "Madhurawada",
    config: "4 BHK Ultra-Luxury",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Aura Villas",
    slug: "aura-villas",
    category: "Villas",
    location: "Rushikonda",
    config: "5 BHK + Private Pool",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Apex Tower",
    slug: "apex-tower",
    category: "Commercial",
    location: "Siripuram",
    config: "Premium Workspaces",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Serenity Heights",
    slug: "serenity-heights",
    category: "Residential",
    location: "MVP Colony",
    config: "3 & 4 BHK Condos",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Lumina Estate",
    slug: "lumina-estate",
    category: "Villas",
    location: "Bheemili",
    config: "Smart Villas",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
  }
];

const categories = ["All", "Residential", "Commercial", "Villas", "Ongoing"];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory || (activeCategory === "Ongoing" && p.status === "Ongoing")
  );

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;
    
    // We only want horizontal scroll on larger screens
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const scrollWidth = scrollWrapperRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      const pinDistance = scrollWidth - viewportWidth + 400; // Extra padding

      const ctx = gsap.context(() => {
        // Horizontal Scroll
        gsap.to(scrollWrapperRef.current, {
          x: () => -(scrollWidth - viewportWidth + 100), // 100 is padding
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${pinDistance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        // Image Reveal Clip Path
        gsap.utils.toArray<HTMLElement>(".project-card-image").forEach((img) => {
          gsap.fromTo(img, 
            { clipPath: "inset(0% 100% 0% 0%)" },
            { 
              clipPath: "inset(0% 0% 0% 0%)", 
              duration: 1.5, 
              ease: "power4.out",
              scrollTrigger: {
                trigger: img,
                start: "left right-=200",
                containerAnimation: gsap.getById("mainScroll"), // Note: need to handle this differently in GSAP context
              }
            }
          );
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [activeCategory]); // Re-run when category changes as items change

  // Vanilla Tilt Effect for Cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="projects" ref={containerRef} className="relative bg-background py-20 lg:py-0 overflow-hidden">
      
      {/* Header & Filters (Sticky in GSAP context) */}
      <div className="lg:absolute lg:top-24 lg:left-0 w-full z-20 px-8 lg:px-24 mb-12 lg:mb-0 pointer-events-none">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pointer-events-auto">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Masterpieces</h2>
            <p className="text-muted-foreground font-light max-w-md">
              A curated selection of our finest architectural achievements, where every detail is a testament to luxury.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="lg:h-screen flex items-center lg:pt-24 px-8 lg:px-24">
        <div 
          ref={scrollWrapperRef} 
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full lg:w-auto"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative w-full lg:w-[35vw] lg:min-w-[500px] aspect-[4/5] group overflow-hidden transition-transform duration-200 ease-out cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 project-card-image">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 transform translate-z-[50px]">
                
                {/* Badges */}
                <div className="flex gap-3 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider border border-white/20">
                    {project.location}
                  </span>
                  <span className={`px-3 py-1 text-white text-xs font-medium uppercase tracking-wider border ${
                    project.status === "Completed" ? "bg-green-500/20 border-green-500/30 text-green-100" :
                    project.status === "Ongoing" ? "bg-primary/20 border-primary/30 text-primary-foreground" :
                    "bg-blue-500/20 border-blue-500/30 text-blue-100"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Title & Info */}
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {project.name}
                </h3>
                
                <p className="text-white/70 font-light text-lg mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.config}
                </p>

                {/* CTA */}
                <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 w-fit group/btn">
                  Explore Project
                  <span className="transform group-hover/btn:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
