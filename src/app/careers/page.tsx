import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Metadata } from "next";
import { Briefcase, Users, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Join the Visionaries at Balaji Constructions",
  description: "Join Visakhapatnam's most innovative real estate development team. Explore career opportunities in engineering, design, and sales.",
};

const openPositions = [
  { title: "Senior Structural Engineer", dept: "Engineering", type: "Full-time" },
  { title: "Luxury Sales Consultant", dept: "Sales & Marketing", type: "Full-time" },
  { title: "BIM Modeler", dept: "Design", type: "Contract" },
  { title: "Project Manager (High-Rise)", dept: "Operations", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 italic">Join the Visionaries</h1>
        <p className="text-primary font-display tracking-[0.4em] uppercase text-xs mb-12">Building Careers, Not Just Buildings</p>
        <p className="text-muted-foreground font-light max-w-3xl mx-auto text-lg leading-relaxed">
          We are looking for architects of change, engineers of the future, and consultants of elegance. At Balaji Constructions, you don&apos;t just work; you craft legacies.
        </p>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-serif text-white">Innovation First</h3>
            <p className="text-muted-foreground text-sm font-light">We embrace the latest technologies in BIM, IoT, and sustainable design.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-serif text-white">Collaborative Spirit</h3>
            <p className="text-muted-foreground text-sm font-light">A flat hierarchy where your ideas contribute directly to the city&apos;s skyline.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-serif text-white">Growth Path</h3>
            <p className="text-muted-foreground text-sm font-light">Personal and professional development through global certifications.</p>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <h2 className="font-serif text-4xl text-white mb-12 text-center italic">Open Opportunities</h2>
        <div className="space-y-4">
          {openPositions.map((job, idx) => (
            <div key={idx} className="group p-8 border border-white/5 bg-background hover:border-primary transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h4 className="text-xl font-serif text-white mb-1">{job.title}</h4>
                <div className="flex gap-4 text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  <span>{job.dept}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                Apply Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 p-12 border border-primary/20 bg-primary/5 text-center rounded-2xl">
          <h3 className="font-serif text-2xl text-white mb-4">Don&apos;t see a match?</h3>
          <p className="text-muted-foreground font-light mb-8 max-w-xl mx-auto">We are always looking for exceptional talent. Send your portfolio and resume to <span className="text-primary font-medium">careers@balajiconstructions.com</span></p>
          <button className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-[11px] font-bold">General Application</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
