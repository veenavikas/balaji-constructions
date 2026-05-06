"use client";

import { useState } from "react";

import { Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rajesh & Priya Reddy",
    project: "The Obsidian",
    quote: "Living in a Balaji property is an experience in itself. The attention to detail is unmatched.",
    fullText: "From the moment we booked our apartment at The Obsidian, the journey has been flawless. The team accommodated our customization requests with ease. The final delivery exceeded our expectations—every corner speaks of luxury and thoughtful design. Truly the best real estate decision we've made.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Dr. Vikram Sharma",
    project: "Aura Villas",
    quote: "The vastu compliance combined with modern aesthetics is exactly what our family was looking for.",
    fullText: "Finding a home that perfectly balances traditional vastu principles with ultra-modern luxury was a challenge until we found Aura Villas. The serene environment, top-notch amenities, and the sheer build quality make coming home the best part of my day.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Sneha Desai",
    project: "Serenity Heights",
    quote: "They delivered the project 2 months before the promised date. Incredible professionalism.",
    fullText: "In an industry where delays are the norm, Balaji Constructions stands out. Not only did they deliver ahead of schedule, but the quality was also pristine. The handover process was smooth, and the after-sales support has been prompt and helpful.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 4,
    name: "Anand Rao",
    project: "Apex Tower",
    quote: "Our corporate office at Apex Tower has elevated our brand image tremendously.",
    fullText: "The commercial spaces built by Balaji are a testament to their visionary approach. The design maximizes natural light, and the smart building features have optimized our operational costs. It's a prestigious address that our clients admire.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 5,
    name: "Kavitha Menon",
    project: "The Obsidian",
    quote: "A true sanctuary in the heart of the city. The amenities are world-class.",
    fullText: "I never thought I could find such peace within the bustling city of Visakhapatnam. The clubhouse, the infinity pool, and the lush green walking tracks make it feel like a perpetual resort vacation.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

  // Duplicate for marquee effect
  const marquee1 = [...testimonials, ...testimonials];
  const marquee2 = [...testimonials].reverse();
  const marquee2Double = [...marquee2, ...marquee2];

  return (
    <section className="bg-[#F5F0E8] py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">What Our Families Say</h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
      </div>

      <div className="relative flex flex-col gap-8 -mx-4 md:-mx-0">
        {/* Row 1 - Left to Right */}
        <div className="flex w-[200%] animate-marquee">
          {marquee1.map((item, idx) => (
            <div 
              key={`row1-${idx}`} 
              className="w-[300px] md:w-[400px] flex-shrink-0 px-4 cursor-pointer"
              onClick={() => setSelectedTestimonial(item)}
            >
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
                <div className="flex text-primary mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#4A4A4A] font-light text-lg mb-6 flex-grow italic">&quot;{item.quote}&quot;</p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-serif text-[#1A1A1A] font-medium">{item.name}</h4>
                    <span className="text-xs text-gray-500 font-display uppercase tracking-wider">{item.project}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-[200%] animate-marquee" style={{ animationDirection: "reverse" }}>
          {marquee2Double.map((item, idx) => (
            <div 
              key={`row2-${idx}`} 
              className="w-[300px] md:w-[400px] flex-shrink-0 px-4 cursor-pointer"
              onClick={() => setSelectedTestimonial(item)}
            >
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
                <div className="flex text-primary mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#4A4A4A] font-light text-lg mb-6 flex-grow italic">&quot;{item.quote}&quot;</p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-serif text-[#1A1A1A] font-medium">{item.name}</h4>
                    <span className="text-xs text-gray-500 font-display uppercase tracking-wider">{item.project}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex text-primary mb-6">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-[#1A1A1A] font-light leading-relaxed mb-8 italic">
                &quot;{selectedTestimonial.fullText}&quot;
              </p>
              
              <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} className="w-16 h-16 rounded-full object-cover shadow-sm" />
                <div>
                  <h4 className="font-serif text-xl text-[#1A1A1A] font-medium mb-1">{selectedTestimonial.name}</h4>
                  <span className="text-sm text-gray-500 font-display uppercase tracking-wider">{selectedTestimonial.project}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
