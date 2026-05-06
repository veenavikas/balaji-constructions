import Link from "next/link";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-8 border-t-2 border-primary/20 relative">
      <div className="container mx-auto px-4">
        
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 text-center md:text-left gap-10">
          
          <div className="md:w-1/3">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-2 group">
                <span className="font-serif text-3xl font-bold tracking-widest text-primary">BALAJI</span>
              </div>
              <span className="font-sans text-xs tracking-[0.3em] font-light text-foreground group-hover:text-primary transition-colors block">CONSTRUCTIONS</span>
            </Link>
            <p className="text-muted-foreground font-serif italic mb-6">&quot;Where Vision Meets Foundation&quot;</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:w-2/3 justify-items-center md:justify-items-start lg:justify-items-end">
            <div>
              <h4 className="font-display uppercase tracking-widest text-sm text-foreground mb-6 font-semibold">Corporate</h4>
              <ul className="space-y-4 font-light text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                <li><Link href="/quality" className="hover:text-primary transition-colors">Quality Standards</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display uppercase tracking-widest text-sm text-foreground mb-6 font-semibold">Masterpieces</h4>
              <ul className="space-y-4 font-light text-muted-foreground">
                <li><Link href="/projects" className="hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/amenities" className="hover:text-primary transition-colors">The Experience</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Insights</Link></li>
                <li><Link href="/projects/the-obsidian" className="hover:text-primary transition-colors">The Obsidian</Link></li>
              </ul>
            </div>
            
            <div className="hidden md:block">
              <h4 className="font-display uppercase tracking-widest text-sm text-foreground mb-6 font-semibold">Legal</h4>
              <ul className="space-y-4 font-light text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">RERA Compliance</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} Balaji Constructions. All rights reserved.</p>
          <p>Made with <span className="text-red-500">❤️</span> by <a href="https://digitalithub.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital IT Hub</a> in Visakhapatnam</p>
        </div>

      </div>
    </footer>
  );
}
