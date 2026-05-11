import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Amenities from "@/components/sections/Amenities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities | Balaji Constructions",
  description: "Explore the world-class amenities provided by Balaji Constructions in our luxury projects.",
};

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-ink pt-20">
      <Navbar />
      <Amenities />
      <Footer />
    </main>
  );
}
