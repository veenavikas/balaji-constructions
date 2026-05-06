import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Metadata } from "next";
import { MapPin, Maximize, Home, ShieldCheck } from "lucide-react";
import Link from "next/link";

// Mock data for project details (usually from CMS)
const projectData: Record<string, any> = {
  "the-obsidian": {
    name: "The Obsidian",
    category: "Residential",
    location: "Madhurawada",
    config: "4 BHK Ultra-Luxury",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    description: "The Obsidian is a landmark of architectural sophistication. Nestled in the rapidly developing Madhurawada, it offers a lifestyle that only a few can imagine. Each residence is a masterpiece of space and light, featuring bespoke interiors and breathtaking views of the Visakhapatnam landscape.",
    price: "Starting from ₹12 Cr",
    area: "4,500 - 6,200 Sq. Ft.",
    amenities: ["Private Elevator", "Smart Home Automation", "Temperature Controlled Pool", "24/7 Concierge"],
  },
  "aura-villas": {
    name: "Aura Villas",
    category: "Villas",
    location: "Rushikonda",
    config: "5 BHK + Private Pool",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    description: "Aura Villas represent the pinnacle of independent luxury. These bespoke 5 BHK estates in Rushikonda are designed for those who value privacy and elegance above all else. With private infinity pools and expansive views of the Bay of Bengal, Aura is your personal sanctuary.",
    price: "Starting from ₹18 Cr",
    area: "8,500 - 10,000 Sq. Ft.",
    amenities: ["Private Home Theatre", "Tesla Charging Point", "Infinity Pool", "Bespoke Landscaping"],
  },
  "apex-tower": {
    name: "Apex Tower",
    category: "Commercial",
    location: "Siripuram",
    config: "Premium Workspaces",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    description: "Apex Tower is the future of corporate excellence in Visakhapatnam. Situated in the heart of Siripuram, this Grade-A commercial space offers sustainable architecture, smart energy management, and state-of-the-art facilities for global enterprises looking for a Vizag presence.",
    price: "Lease starting ₹150/Sq.Ft",
    area: "10,000 - 150,000 Sq. Ft.",
    amenities: ["LEED Gold Certified", "Smart Access Control", "Double Height Lobby", "Rooftop Helipad"],
  },
  "serenity-heights": {
    name: "Serenity Heights",
    category: "Residential",
    location: "MVP Colony",
    config: "3 & 4 BHK Condos",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    description: "Serenity Heights brings the peace of the hills to the heart of MVP Colony. These elegantly crafted condos offer a balanced lifestyle with expansive balconies, cross-ventilated rooms, and a community of like-minded high-achievers in Visakhapatnam.",
    price: "Starting from ₹8 Cr",
    area: "3,200 - 4,800 Sq. Ft.",
    amenities: ["Sky Garden", "Yoga Pavilion", "High-speed Elevators", "Vastu Compliant"],
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectData[params.slug] || { name: "Project Detail" };
  return {
    title: `${project.name} | Balaji Constructions`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white mb-8 font-serif">Project Not Found</h1>
        <Link href="/projects" className="text-primary underline uppercase tracking-widest text-xs">Back to Masterpieces</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-20">
          <div className="max-w-4xl">
            <span className="px-4 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-bold mb-6 inline-block">
              {project.category}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">{project.name}</h1>
            <div className="flex flex-wrap gap-8 text-white/80 font-light tracking-wide text-sm md:text-lg">
              <span className="flex items-center gap-2"><MapPin size={18} className="text-primary" /> {project.location}</span>
              <span className="flex items-center gap-2"><Maximize size={18} className="text-primary" /> {project.area}</span>
              <span className="flex items-center gap-2"><Home size={18} className="text-primary" /> {project.config}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-foreground italic">The Architecture of Distinction</h2>
              <div className="w-20 h-[1px] bg-primary" />
              <p className="text-muted-foreground font-light text-xl leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-foreground font-serif text-2xl">Specifications</h4>
                <ul className="space-y-3 text-muted-foreground font-light">
                  <li className="flex items-start gap-3"><ShieldCheck size={18} className="text-primary mt-1" /> RCC Framed Structure (Zone II Compliant)</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={18} className="text-primary mt-1" /> Italian Marble Flooring in Living Areas</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={18} className="text-primary mt-1" /> Engineered Wooden Flooring in Bedrooms</li>
                  <li className="flex items-start gap-3"><ShieldCheck size={18} className="text-primary mt-1" /> Acoustic Treated Windows</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-foreground font-serif text-2xl">Amenities</h4>
                <div className="flex flex-wrap gap-3">
                  {project.amenities.map((item: string) => (
                    <span key={item} className="px-4 py-2 border border-border text-muted-foreground text-xs font-light uppercase tracking-widest">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card border border-border p-10 sticky top-32 space-y-8 rounded-2xl">
              <div className="text-center">
                <h4 className="text-muted-foreground uppercase tracking-widest text-[10px] mb-2 font-bold">Investment</h4>
                <p className="text-primary font-serif text-4xl">{project.price}</p>
              </div>
              <div className="space-y-4 pt-8 border-t border-border">
                <h4 className="text-foreground font-display text-sm font-semibold uppercase tracking-wider mb-4">Request Portfolio</h4>
                <form className="space-y-4">
                  <input placeholder="Full Name" className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                  <input placeholder="Phone Number" className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                  <button className="w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors mt-4">Download Brochure</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
