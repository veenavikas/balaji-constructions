"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Map, Clock } from "lucide-react";

const stats = [
  { label: "Years Experience", value: 15, suffix: "+", icon: Clock },
  { label: "Happy Families", value: 200, suffix: "+", icon: Users },
  { label: "Sq.Ft Delivered", value: 3, suffix: "M", icon: Map },
  { label: "On-Time Delivery", value: 98, suffix: "%", icon: Building2 },
];

function Counter({ from, to, duration, inView }: { from: number, to: number, duration: number, inView: boolean }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (to - from) + from));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span>{count}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative z-20 bg-background border-y border-white/5 py-16 md:py-24">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-primary/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center pt-8 md:pt-0"
              >
                <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                    <Counter from={0} to={stat.value} duration={2} inView={isInView} />
                  </span>
                  <span className="text-2xl md:text-3xl font-serif text-primary">{stat.suffix}</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-display uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
