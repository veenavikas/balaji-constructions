import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Balaji Constructions",
  description: "Get in touch with Balaji Constructions for site visits, project inquiries, and partnerships in Visakhapatnam.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-ink pt-20">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
