import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyBalaji from "@/components/sections/WhyBalaji";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Balaji | Balaji Constructions",
  description: "Discover why Balaji Constructions is the preferred choice for luxury real estate in Visakhapatnam.",
};

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-ink pt-20">
      <Navbar />
      <WhyBalaji />
      <Footer />
    </main>
  );
}
