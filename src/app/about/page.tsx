import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Balaji Constructions",
  description: "Learn about the legacy and vision of Balaji Constructions, Visakhapatnam's premier luxury real estate developer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            alt="Corporate Office" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center space-y-4">
          <h1 className="font-serif text-5xl md:text-7xl text-white italic">Our Story</h1>
          <p className="text-primary font-display tracking-[0.4em] uppercase text-xs">Visakhapatnam&apos;s Architectural Vanguard</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-white">Redefining the <br /><span className="text-primary italic">Coastal Skyline</span></h2>
            <div className="w-20 h-[1px] bg-primary" />
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              Balaji Constructions was born from a singular vision: to create living spaces that are not just structures, but legacies. With over two decades of expertise in the Visakhapatnam market, we have consistently pushed the boundaries of what is possible in luxury real estate.
            </p>
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              Our approach combines deep-rooted local understanding with global design standards. We don&apos;t just build apartments; we curate environments where families thrive and investors find lasting value.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-card border border-border p-8 flex flex-col justify-end group hover:border-primary transition-colors">
              <span className="text-4xl text-primary font-serif mb-2">22+</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Years of Trust</span>
            </div>
            <div className="aspect-[4/5] bg-card border border-border p-8 flex flex-col justify-end group hover:border-primary transition-colors translate-y-8">
              <span className="text-4xl text-primary font-serif mb-2">17</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Landmarks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="p-12 border border-white/5 bg-background space-y-6">
            <h3 className="font-serif text-3xl text-white italic">Our Mission</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              To deliver uncompromising quality and aesthetic brilliance in every project, ensuring that our clients experience the zenith of comfort and sophistication in the heart of Andhra Pradesh.
            </p>
          </div>
          <div className="p-12 border border-white/5 bg-background space-y-6">
            <h3 className="font-serif text-3xl text-white italic">Our Vision</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              To be the benchmark for luxury real estate in Visakhapatnam, creating spaces that transcend time and offer unparalleled living experiences for generations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
