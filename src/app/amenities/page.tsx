import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lifestyle & Amenities | Balaji Constructions",
  description: "Experience the premium amenities and lifestyle features offered by Balaji Constructions in Visakhapatnam.",
};

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 italic">The Experience</h1>
        <p className="text-primary font-display tracking-[0.4em] uppercase text-xs mb-12">Beyond Four Walls</p>
        <p className="text-muted-foreground font-light max-w-3xl mx-auto text-lg leading-relaxed">
          At Balaji Constructions, we don&apos;t just build homes; we curate lifestyles. Our amenities are designed to offer a sanctuary of peace and a hub of vibrant community living.
        </p>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="aspect-video relative overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80" alt="Pool" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-3xl text-white">Skyline Infinity Pool</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
                Our signature rooftop infinity pools offer panoramic views of the Visakhapatnam coastline, providing a serene escape from the city hustle.
            </p>
          </div>
            <div className="space-y-4">
              <h3 className="font-serif text-4xl text-white italic">Wellness Sanctuaries</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                State-of-the-art spas and wellness centers that integrate traditional healing with modern fitness technology.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-4xl text-white italic">Curated Greenery</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Lush, multi-level sky gardens and vertical forests that bring nature to your doorstep, improving air quality and visual peace.
              </p>
            </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
