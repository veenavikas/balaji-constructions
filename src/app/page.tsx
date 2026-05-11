import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Projects from "@/components/sections/Projects";
import Story from "@/components/sections/Story";
import Amenities from "@/components/sections/Amenities";
import WhyBalaji from "@/components/sections/WhyBalaji";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-ink">
      <Navbar />
      <Hero />
      <TrustBar />
      <Projects />
      <Story />
      <Amenities />
      <WhyBalaji />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
