"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Label
    gsap.from(".hero-label", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out"
    });

    // H1 Lines
    gsap.from(".hero-h1-line-1", {
      opacity: 0,
      x: -50,
      duration: 1.2,
      delay: 0.4,
      ease: "power3.out"
    });
    
    gsap.from(".hero-h1-line-2", {
      opacity: 0,
      x: 50,
      duration: 1.4,
      delay: 0.5,
      ease: "power3.out"
    });

    // Subtitle & CTAs
    gsap.from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 1.0,
      ease: "power3.out"
    });
    
    gsap.from(".hero-cta", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      delay: 1.2,
      ease: "power3.out"
    });

    // Trust Strip
    gsap.from(".trust-strip", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
      ease: "power3.out"
    });

    // Scroll-triggered Video Animation
    gsap.to(".hero-video-wrapper", {
      scale: 0.85,
      borderRadius: "40px",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Text Parallax
    gsap.to(".hero-content-wrapper", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] min-h-[800px] overflow-hidden flex flex-col justify-end bg-ink">
      {/* Background Video Wrapper */}
      <div className="hero-video-wrapper absolute inset-0 z-0 overflow-hidden transform-gpu origin-top">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/268447.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(28,25,23,0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="hero-content-wrapper container mx-auto px-4 md:px-8 relative z-10 pb-48 md:pb-56 pt-32">
        <div className="max-w-4xl">
          <p className="hero-label font-mono text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
            VISAKHAPATNAM&apos;S FINEST RESIDENCES
          </p>
          
          <h1 className="font-display font-light text-[52px] md:text-[96px] leading-[1.1] text-warm-white mb-6">
            <span className="block hero-h1-line-1">Built for the</span>
            <span className="block hero-h1-line-2">Extraordinary.</span>
          </h1>
          
          <p className="hero-sub font-sans text-lg text-cream max-w-[480px] mb-8 leading-relaxed">
            Each Balaji home is a testament to four decades of craft, care, and coastal vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#projects" 
              className="hero-cta inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-warm-white text-ink border border-gold font-heading font-medium transition-all duration-300 hover:text-warm-white relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-[linear-gradient(135deg,#B8860B,#D4A017)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Explore Projects</span>
            </Link>
            
            <button className="hero-cta inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent text-warm-white border border-warm-white font-heading font-medium transition-all duration-300 hover:bg-white/15">
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="trust-strip absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-lg border-t border-white/10 z-20">
        <div className="container mx-auto px-4 md:px-8 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-sm text-warm-white font-medium opacity-90">
            <div className="flex items-center gap-2">
              <span className="text-gold">✓</span> RERA Registered
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div>22+ Years</div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div>ISO Certified</div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div>2,000+ Families</div>
          </div>
        </div>
      </div>
    </section>
  );
}
