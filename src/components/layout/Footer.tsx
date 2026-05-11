import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-warm-white relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-grad-gold" />
      
      <div className="container mx-auto px-4 md:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          
          {/* Logo Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-heading font-semibold text-3xl tracking-tight">BALAJI</span>
            </Link>
            <p className="font-sans text-ink-muted text-sm leading-relaxed max-w-xs">
              Two decades of crafting extraordinary homes and commercial spaces across Visakhapatnam.
            </p>
          </div>

          {/* Corporate Links */}
          <div className="col-span-1">
            <h4 className="font-heading font-semibold text-lg mb-6">Corporate</h4>
            <ul className="space-y-4 font-sans text-sm text-ink-muted">
              <li><Link href="#story" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="#why-balaji" className="hover:text-gold transition-colors">Why Balaji</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Press & Media</Link></li>
            </ul>
          </div>

          {/* Projects Links */}
          <div className="col-span-1">
            <h4 className="font-heading font-semibold text-lg mb-6">Projects</h4>
            <ul className="space-y-4 font-sans text-sm text-ink-muted">
              <li><Link href="#projects" className="hover:text-gold transition-colors">Ongoing Projects</Link></li>
              <li><Link href="#projects" className="hover:text-gold transition-colors">Completed Projects</Link></li>
              <li><Link href="#projects" className="hover:text-gold transition-colors">Upcoming Launches</Link></li>
              <li><Link href="#projects" className="hover:text-gold transition-colors">Commercial Spaces</Link></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="col-span-1 flex flex-col justify-between">
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">Connect</h4>
              <div className="flex gap-4">
                {[
                  { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                  { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                  { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                  { name: "Facebook", icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }
                ].map(social => (
                  <a 
                    key={social.name} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-cream-deep/10 border border-white/10 flex items-center justify-center text-warm-white hover:bg-gold hover:border-gold hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 font-sans text-sm text-ink-muted space-y-2">
              <p><Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link></p>
              <p><Link href="#" className="hover:text-gold transition-colors">Terms & Conditions</Link></p>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[13px] text-ink-muted">
            © 2026 Balaji Constructions · All rights reserved.
          </p>
          <p className="font-sans text-[13px] text-ink-muted text-center md:text-right">
            RERA Registration: AP/XXX/2024
          </p>
        </div>
      </div>
    </footer>
  );
}
