import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Balaji Constructions",
  description: "Explore our portfolio of luxury residential and commercial projects in Visakhapatnam.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-ink pt-20">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}
