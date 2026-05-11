import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Story from "@/components/sections/Story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Balaji Constructions",
  description: "Learn about the legacy and vision of Balaji Constructions, Visakhapatnam's premier luxury real estate developer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-ink pt-20">
      <Navbar />
      <Story />
      <Footer />
    </main>
  );
}
