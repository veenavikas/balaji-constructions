"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const values = [
  { title: "Integrity", desc: "Honest in our dealings.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { title: "Quality", desc: "Crafting enduring homes.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { title: "Legacy", desc: "Generations of trust.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }
];

const timeline = [
  { year: "2002", title: "Inception" },
  { year: "2008", title: "First Tower" },
  { year: "2014", title: "Expansion" },
  { year: "2020", title: "Luxury Villas" },
  { year: "2024", title: "Commercial Wing" },
  { year: "Now", title: "Going Global" },
];

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Paragraph stagger
    const paras = gsap.utils.toArray<HTMLElement>(".story-para");
    paras.forEach(para => {
      gsap.from(para, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: para,
          start: "top 85%",
        }
      });
    });

    // Values stagger
    gsap.from(".value-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".values-container",
        start: "top 80%",
      }
    });

    // Timeline line & nodes
    gsap.from(".timeline-line-inner", {
      width: 0,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 85%",
      }
    });
    
    gsap.from(".timeline-node", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="story" className="bg-warm-white relative">
      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Image */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-32 lg:h-[calc(100vh-10rem)] max-h-[800px]">
              <div className="relative w-full h-full min-h-[500px] rounded-[24px] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                  alt="Balaji interior design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/10" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-full font-mono text-[10px] uppercase tracking-widest text-ink font-semibold">
                    ISO 9001:2015
                  </div>
                  <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-full font-mono text-[10px] uppercase tracking-widest text-ink font-semibold">
                    IGBC Gold
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-7/12 py-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-muted">
                OUR STORY
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-gold to-gold-light text-warm-white rounded-full font-sans text-xs font-semibold shadow-sm">
                Est. 2002
              </span>
            </div>
            
            <h2 className="font-display text-[42px] md:text-[56px] text-ink leading-[1.1] mb-10">
              Two Decades of Coastal Craftsmanship
            </h2>
            
            <div className="space-y-6 text-ink-light font-sans text-lg leading-relaxed mb-16">
              <p className="story-para">
                We didn&apos;t just start building homes; we started building trust. In 2002, 
                Balaji Constructions was founded with a singular vision: to elevate the 
                living standards in Visakhapatnam through uncompromising quality and 
                impeccable design.
              </p>
              <p className="story-para">
                Over the past two decades, our journey has been defined by the milestones we&apos;ve 
                achieved alongside the families we&apos;ve served. We believe that true luxury 
                isn&apos;t just in the imported marble or the gold fittings; it&apos;s in the thoughtful 
                design, the timely delivery, and the peace of mind our buyers feel.
              </p>
              <p className="story-para">
                Today, with over 50 completed projects gracing the city&apos;s skyline, we 
                continue to push boundaries, blending traditional values with modern, 
                sustainable architecture.
              </p>
            </div>

            {/* Value Cards */}
            <div className="values-container grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {values.map((val, idx) => (
                <div key={idx} className="value-card neu-raised p-6 rounded-[20px] bg-cream flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold-pale flex items-center justify-center bg-white text-gold">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={val.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-ink mb-1">{val.title}</h3>
                    <p className="font-sans text-sm text-ink-muted">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="timeline-container relative pt-8 pb-12 overflow-x-auto hide-scrollbar">
              <div className="min-w-[600px] lg:min-w-full relative flex items-center justify-between">
                {/* Line */}
                <div className="absolute top-4 left-4 right-4 h-[2px] bg-border z-0">
                  <div className="timeline-line-inner h-full bg-grad-gold" />
                </div>
                
                {/* Nodes */}
                {timeline.map((item, idx) => (
                  <div key={idx} className="timeline-node relative z-10 flex flex-col items-center group cursor-pointer">
                    <div className={`w-8 h-8 rounded-full border-[3px] border-white shadow-md flex items-center justify-center transition-colors duration-300 ${
                      idx === timeline.length - 1 ? 'bg-grad-gold' : 'bg-cream-deep group-hover:bg-gold-pale'
                    }`} />
                    <div className="mt-4 text-center">
                      <div className={`font-mono text-xs tracking-widest font-bold mb-1 ${
                        idx === timeline.length - 1 ? 'text-gold' : 'text-ink'
                      }`}>{item.year}</div>
                      <div className="font-sans text-xs text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity absolute w-24 -left-8 text-center bg-white p-2 rounded shadow-sm">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
