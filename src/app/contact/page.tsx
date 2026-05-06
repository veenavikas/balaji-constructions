import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import ContactSection from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Balaji Constructions",
  description: "Get in touch with Balaji Constructions for site visits, project inquiries, and partnerships in Visakhapatnam.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background relative pt-24">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 italic">Begin Your Journey</h1>
        <p className="text-primary font-display tracking-[0.4em] uppercase text-xs">A Private Consultation Awaits</p>
      </div>

      <ContactSection />

      {/* Contact Details Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="text-primary uppercase tracking-widest text-xs font-semibold">General Inquiries</h4>
            <p className="text-white/80 font-light">info@balajiconstructions.com</p>
            <p className="text-white/80 font-light">+91 40 1234 5678</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-primary uppercase tracking-widest text-xs font-semibold">Sales Support</h4>
            <p className="text-white/80 font-light">sales@balajiconstructions.com</p>
            <p className="text-white/80 font-light">+91 98765 43210</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-primary uppercase tracking-widest text-xs font-semibold">Careers</h4>
            <p className="text-white/80 font-light">careers@balajiconstructions.com</p>
            <p className="text-white/80 font-light">Join our visionary team.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-primary uppercase tracking-widest text-xs font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <span className="text-white/60 hover:text-primary cursor-pointer transition-colors">IN</span>
              <span className="text-white/60 hover:text-primary cursor-pointer transition-colors">LI</span>
              <span className="text-white/60 hover:text-primary cursor-pointer transition-colors">FB</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
