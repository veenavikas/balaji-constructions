"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const storyChapters = [
  {
    year: "2008",
    title: "It began with a promise...",
    content: "Founded with a vision to redefine luxury living in Visakhapatnam, Balaji Constructions started as a boutique firm focusing on unparalleled quality and architectural integrity.",
  },
  {
    year: "2014",
    title: "Every brick, a commitment...",
    content: "We expanded our footprint, delivering over 1 million sq.ft of premium residential spaces. Our signature blend of modern aesthetics and vastu compliance became the gold standard.",
  },
  {
    year: "2020",
    title: "Scaling new heights...",
    content: "Embracing sustainable practices and smart home technologies, we launched our flagship commercial and high-rise projects, catering to the evolving needs of global citizens.",
  },
  {
    year: "Now",
    title: "Today, a legacy...",
    content: "Over 15 years, 200+ families, and countless dreams realized. We continue to build not just structures, but sanctuaries where life's best moments unfold.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const chaptersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Scroll duration
        pin: true,
        anticipatePin: 1,
      });

      // Animate the sepia to color filter on the image based on scroll progress
      gsap.to(".morph-image", {
        filter: "sepia(0%) grayscale(0%)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
        },
      });

      // Animate each chapter text
      chaptersRef.current.forEach((chapter, index) => {
        if (!chapter) return;
        
        gsap.fromTo(chapter,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${(index / storyChapters.length) * 100}% top`,
              end: `${((index + 1) / storyChapters.length) * 100}% top`,
              scrub: true,
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });
      
      // Update active timeline dot
      const dots = gsap.utils.toArray<HTMLElement>('.timeline-dot');
      dots.forEach((dot, index) => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `${(index / storyChapters.length) * 100}% top`,
          end: `${((index + 1) / storyChapters.length) * 100}% top`,
          toggleClass: { targets: dot, className: "active-dot" },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="h-screen w-full bg-background flex overflow-hidden relative">
      {/* Left side: Image */}
      <div ref={leftImageRef} className="hidden md:block w-1/2 h-full relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/20 mix-blend-overlay"></div>
        {/* Placeholder for construction to finished building morphing image */}
        <div className="w-full h-full bg-muted flex items-center justify-center">
           <img 
              src="https://images.unsplash.com/photo-1541881451-24874c93544d?auto=format&fit=crop&q=80" 
              alt="Balaji Constructions Legacy" 
              className="morph-image w-full h-full object-cover"
              style={{ filter: "sepia(80%) grayscale(50%)" }}
           />
        </div>
      </div>

      {/* Right side: Content */}
      <div ref={rightContentRef} className="w-full md:w-1/2 h-full relative flex items-center justify-center px-8 md:px-16 lg:px-24">
        
        <div className="w-full max-w-xl relative h-[60vh] flex flex-col justify-center">
          {storyChapters.map((chapter, idx) => (
            <div 
              key={chapter.year} 
              ref={(el) => { chaptersRef.current[idx] = el; }}
              className="absolute inset-0 flex flex-col justify-center"
              style={{ opacity: idx === 0 ? 1 : 0, visibility: idx === 0 ? "visible" : "hidden" }} // Initial state for first item
            >
              <h4 className="text-primary font-display tracking-widest uppercase mb-4 text-sm font-semibold">{chapter.year}</h4>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6 leading-tight">{chapter.title}</h2>
              <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-8">
                {chapter.content}
              </p>
              
              {idx === storyChapters.length - 1 && (
                <div className="mt-8 border-l-2 border-primary pl-6">
                  <p className="font-serif italic text-xl md:text-2xl text-foreground">
                    &quot;We don&apos;t just construct buildings. We craft legacies that stand the test of time.&quot;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 hidden lg:flex">
          {storyChapters.map((chapter, idx) => (
            <div key={`dot-${idx}`} className="flex items-center gap-4 group">
              <span className="text-xs font-display text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {chapter.year}
              </span>
              <div className="timeline-dot w-2 h-2 rounded-full bg-border transition-all duration-300 [&.active-dot]:bg-primary [&.active-dot]:scale-150 [&.active-dot]:shadow-[0_0_10px_rgba(201,168,76,0.5)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
