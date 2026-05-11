"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const points = [
  {
    num: "01",
    title: "Uncompromising Quality",
    body: "From the foundation to the final coat of paint, we use only the highest grade materials. Our rigorous 50-point quality check ensures your home stands the test of time.",
  },
  {
    num: "02",
    title: "Transparent Processes",
    body: "No hidden costs, no vague timelines. We believe in complete transparency, providing regular updates and clear communication at every step of your home-buying journey.",
  },
  {
    num: "03",
    title: "Eco-Conscious Design",
    body: "Luxury shouldn't cost the earth. Our projects integrate sustainable practices, from rainwater harvesting to energy-efficient layouts that maximize natural light and ventilation.",
  }
];

export default function WhyBalaji() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Basic stagger animation for the heading
    gsap.from(".wb-heading", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Stagger for the columns
    const columns = gsap.utils.toArray<HTMLElement>(".wb-col");
    columns.forEach((col, i) => {
      gsap.from(col, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: col,
          start: "top 85%",
        }
      });
      
      // Animate the line
      gsap.from(col.querySelector(".wb-line"), {
        width: 0,
        duration: 0.8,
        delay: (i * 0.2) + 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: col,
          start: "top 85%",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="why-balaji" className="py-32 bg-[linear-gradient(135deg,#FAF7F2,#F2EDE4,#FAF7F2)] text-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="mb-20">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-muted mb-4">
            WHY CHOOSE BALAJI
          </p>
          <h2 className="wb-heading font-display text-[48px] md:text-[64px] text-ink leading-[1.1] max-w-3xl mx-auto">
            The Standard Others Aspire To
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-left">
          {points.map((point, index) => (
            <div key={index} className="wb-col flex flex-col">
              <div className="font-display text-[100px] lg:text-[120px] text-gold opacity-30 leading-none mb-4 -ml-2 select-none">
                {point.num}
              </div>
              <h3 className="font-heading text-2xl text-ink font-semibold mb-4">
                {point.title}
              </h3>
              <div className="wb-line h-[2px] w10 bg-grad-gold mb-6" style={{ width: '40px' }} />
              <p className="font-sans text-ink-light leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
