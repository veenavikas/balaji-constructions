import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Metadata } from "next";
import { Shield, Leaf, Zap, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Sustainability | Balaji Constructions",
  description: "Our commitment to engineering excellence, sustainable practices, and uncompromising quality standards in Visakhapatnam real estate.",
};

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 italic">Engineering Excellence</h1>
        <p className="text-primary font-display tracking-[0.4em] uppercase text-xs mb-12">Built to Last Generations</p>
        <p className="text-muted-foreground font-light max-w-3xl mx-auto text-lg leading-relaxed">
          At Balaji Constructions, quality isn&apos;t just a checklist—it&apos;s our foundation. We integrate sustainable engineering with world-class materials to create structures that are both environmentally responsible and structurally superior.
        </p>
      </section>

      {/* Standards Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="p-8 border border-white/5 bg-background hover:border-primary/50 transition-all duration-500 group">
            <Shield className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-serif text-2xl text-white mb-4">Structural Integrity</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Exceeding seismic zone II compliance with high-grade steel and M40/M50 grade concrete for maximum longevity.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-background hover:border-primary/50 transition-all duration-500 group">
            <Leaf className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-serif text-2xl text-white mb-4">Green Building</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              IGBC Gold certified projects featuring solar power integration and energy-efficient climate control.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-background hover:border-primary/50 transition-all duration-500 group">
            <Droplets className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-serif text-2xl text-white mb-4">Water Management</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Advanced STP systems and 100% rainwater harvesting to ensure sustainable resource utilization.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-background hover:border-primary/50 transition-all duration-500 group">
            <Zap className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="font-serif text-2xl text-white mb-4">Smart Automation</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              IoT-enabled home automation and smart grid integration for optimized energy consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-white">Uncompromising Material Sourcing</h2>
            <div className="w-20 h-[1px] bg-primary" />
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              We partner with global leaders like Saint-Gobain, Kohler, and Mitsubishi to ensure that every finish in your home is of international standards. Our quality control lab on-site tests every batch of raw material before it enters the foundation.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white/80 font-light">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Double Glazed Unit (DGU) Glass for Heat/Noise Insulation
              </li>
              <li className="flex items-center gap-4 text-white/80 font-light">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Vitrified Tiles from premium Italian manufacturers
              </li>
              <li className="flex items-center gap-4 text-white/80 font-light">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Post-Tensioned (PT) Slabs for expansive column-free spaces
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 relative aspect-video">
             <img 
               src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
               alt="Construction Quality" 
               className="w-full h-full object-cover grayscale opacity-50"
             />
             <div className="absolute inset-0 border border-primary translate-x-4 -translate-y-4 -z-10" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
