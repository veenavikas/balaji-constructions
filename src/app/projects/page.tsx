import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import ProjectsSection from "@/components/sections/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Masterpieces | Balaji Constructions",
  description: "Explore the portfolio of Balaji Constructions, featuring luxury residential, commercial, and villa projects in Visakhapatnam.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background relative pt-24">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">Curated Portfolio</h1>
        <div className="w-24 h-[1px] bg-primary mx-auto mb-12" />
        <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg leading-relaxed">
          From iconic high-rises to sprawling private estates, our portfolio represents the peak of Visakhapatnam luxury real estate.
        </p>
      </div>

      <ProjectsSection />

      {/* Categories Detail Section */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="text-primary font-serif text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🏙️</div>
            <h3 className="text-xl font-serif text-foreground mb-4">Residential</h3>
            <p className="text-muted-foreground font-light text-sm">Ultra-luxury flats and penthouses designed for the urban elite.</p>
          </div>
          <div className="text-center group">
            <div className="text-primary font-serif text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🏰</div>
            <h3 className="text-xl font-serif text-foreground mb-4">Luxury Villas</h3>
            <p className="text-muted-foreground font-light text-sm">Private sanctuaries with bespoke amenities and expansive green spaces.</p>
          </div>
          <div className="text-center group">
            <div className="text-primary font-serif text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🏢</div>
            <h3 className="text-xl font-serif text-foreground mb-4">Commercial</h3>
            <p className="text-muted-foreground font-light text-sm">Visionary workspaces that reflect prestige and business excellence.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
