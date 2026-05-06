import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights & Updates | Balaji Constructions",
  description: "Stay updated with the latest trends in Visakhapatnam luxury real estate, construction technology, and lifestyle insights.",
};

const posts = [
  {
    title: "The Rise of Vertical Forests in Visakhapatnam",
    date: "May 10, 2024",
    excerpt: "Exploring how sustainable landscaping is transforming high-rise living in Madhurawada.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
  },
  {
    title: "Smart Home Automation: 2024 Trends",
    date: "April 28, 2024",
    excerpt: "From voice-controlled lighting to AI-driven security, here is what is defining ultra-luxury homes this year.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df8d7?auto=format&fit=crop&q=80",
  },
  {
    title: "Why Rushikonda remains the Gold Standard",
    date: "April 15, 2024",
    excerpt: "A deep dive into the real estate dynamics of Visakhapatnam's most prestigious coastal belt.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 italic">Insights</h1>
          <p className="text-primary font-display tracking-[0.4em] uppercase text-xs mb-12">Perspectives on Luxury & Engineering</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest">
                  Architecture
                </div>
              </div>
              <span className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em]">{post.date}</span>
              <h3 className="text-2xl font-serif text-white mt-4 mb-4 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <span className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Article <span>→</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Box */}
      <section className="py-24 container mx-auto px-4">
        <div className="glass p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
          <h2 className="font-serif text-4xl text-white mb-4 italic">The Inner Circle</h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto mb-10">Subscribe to receive exclusive project launches, market insights, and private event invitations.</p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input placeholder="Your email address" className="flex-1 bg-background border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-primary transition-colors" />
            <button className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all">Join Now</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
