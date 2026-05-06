import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

// Dynamically import client components to avoid SSR issues with heavy libraries
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const Stats = dynamic(() => import("@/components/sections/Stats"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Amenities = dynamic(() => import("@/components/sections/Amenities"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
