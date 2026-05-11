"use client";

import React, { useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const testimonials = [
  {
    id: 1,
    quote: "Moving to Balaji Seaview Tower was the best decision we made. The attention to detail and the ocean views are simply spectacular.",
    name: "Dr. Ananya Reddy",
    project: "BALAJI SEAVIEW TOWER",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "What impressed me most was the timely delivery. They promised hand-over in 24 months, and they delivered in 22. Highly professional.",
    name: "Vikram Sharma",
    project: "THE RESERVE VILLAS",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "The clubhouse amenities are world-class. It feels like living in a luxury resort. My kids absolutely love the infinity pool.",
    name: "Priya & Rahul Verma",
    project: "AURA RESIDENCES",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    quote: "As an investor, Balaji's commercial spaces have always yielded great returns. Their build quality is unparalleled in Vizag.",
    name: "Suresh Narayanan",
    project: "BALAJI BUSINESS PARK",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  }, [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useGSAP(() => {
    gsap.from(".testimonial-header", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="testimonials" className="py-24 bg-warm-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="testimonial-header mb-16 text-center">
          <h2 className="font-display text-[42px] md:text-[56px] text-ink leading-none">
            Families Who Call It Home
          </h2>
        </div>

        <div className="carousel-wrapper relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6 py-4">
              {testimonials.map((test, index) => {
                // Approximate visibility logic for align="start" and 3 visible slides
                const isActive = index >= selectedIndex && index <= selectedIndex + 2;
                return (
                <div key={test.id} className="testimonial-card flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6">
                  <div className={`bg-cream border rounded-[20px] p-8 h-full flex flex-col relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(184,134,11,0.08)] ${isActive ? 'opacity-100 border-gold/30' : 'opacity-50 border-border scale-[0.98]'}`}>
                    {/* Quote Mark */}
                    <div className="absolute top-4 left-6 font-display text-[80px] text-gold opacity-20 leading-none">
                      &quot;
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="font-display italic text-[20px] text-ink leading-relaxed mb-8 flex-grow relative z-10">
                      &quot;{test.quote}&quot;
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold relative shrink-0">
                        <Image src={test.avatar} alt={test.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-ink">{test.name}</h4>
                        <p className="font-mono text-[11px] tracking-widest uppercase text-ink-muted mt-1">{test.project}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )})}

            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button 
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink-light hover:text-gold hover:border-gold transition-colors"
            >
              ←
            </button>
            <button 
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink-light hover:text-gold hover:border-gold transition-colors"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
