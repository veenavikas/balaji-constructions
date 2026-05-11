"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const stats = [
  { value: 22, suffix: "+", label: "Years of Trust" },
  { value: 50, suffix: "+", label: "Projects" },
  { value: 2000, suffix: "+", label: "Families" },
  { value: 98, suffix: "%", label: "On-Time" },
];

export default function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const statElements = gsap.utils.toArray<HTMLElement>(".stat-card");
    
    gsap.from(statElements, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      }
    });

    const numbers = gsap.utils.toArray<HTMLElement>(".stat-number-val");
    numbers.forEach((num, i) => {
      const targetVal = stats[i].value;
      const counter = { val: 0 };
      
      gsap.to(counter, {
        val: targetVal,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          if (num) {
            num.innerText = Math.floor(counter.val).toLocaleString();
          }
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 bg-cream-deep">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-stretch">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="stat-card flex-1 neu-raised rounded-[20px] p-8 flex flex-col items-center justify-center text-center">
                <div className="font-display text-[72px] leading-none mb-2 text-gradient-gold">
                  <span className="stat-number-val">0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.25em]">
                  {stat.label}
                </div>
              </div>
              
              {/* Divider for desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px bg-[linear-gradient(to_bottom,transparent,rgba(184,134,11,0.3),transparent)] mx-4 my-8" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
