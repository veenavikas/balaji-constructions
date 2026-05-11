"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Our Story", href: "/about" },
    { name: "Amenities", href: "/amenities" },
    { name: "Why Balaji", href: "/quality" },
  ];

  return (
    <header
      className={`fixed z-50 transition-all duration-500 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-[95%] lg:max-w-6xl rounded-full border top-4 md:top-6 ${
        isTransparent
          ? "bg-white/5 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          : "bg-warm-white/90 backdrop-blur-xl border-border shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold group-hover:scale-105 transition-transform">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={`font-heading font-semibold text-2xl tracking-tight transition-colors duration-300 ${isTransparent ? 'text-warm-white' : 'text-ink'}`}>BALAJI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          <div 
            className="h-full flex items-center relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <Link
              href="/projects"
              className={`font-heading font-medium transition-all duration-300 px-5 py-2 rounded-full ${
                isTransparent 
                  ? 'text-warm-white hover:bg-white/10' 
                  : 'text-ink-light hover:bg-black/5 hover:text-ink'
              }`}
            >
              Projects
            </Link>
            
            <AnimatePresence>
              {megaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-[600px] bg-warm-white border border-border shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-[24px] p-8 grid grid-cols-2 gap-8 before:absolute before:-top-6 before:left-0 before:w-full before:h-6"
                >
                  <div>
                    <h4 className="font-heading font-semibold text-ink mb-4">Featured Collections</h4>
                    <ul className="space-y-3 font-sans text-sm text-ink-muted">
                      <li><Link href="/projects" className="hover:text-gold transition-colors block">Luxury Apartments</Link></li>
                      <li><Link href="/projects" className="hover:text-gold transition-colors block">Premium Villas</Link></li>
                      <li><Link href="/projects" className="hover:text-gold transition-colors block">Commercial Spaces</Link></li>
                      <li><Link href="/projects" className="hover:text-gold transition-colors block">Ongoing Developments</Link></li>
                    </ul>
                  </div>
                  <div className="relative h-40 rounded-[16px] overflow-hidden group">
                    <Image src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=400" alt="Featured" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent flex items-end p-4">
                      <p className="text-warm-white font-heading font-medium text-sm">View Signature Project</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-heading font-medium transition-all duration-300 px-5 py-2 rounded-full ${
                isTransparent 
                  ? 'text-warm-white hover:bg-white/10' 
                  : 'text-ink-light hover:bg-black/5 hover:text-ink'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[linear-gradient(135deg,#B8860B,#D4A017)] text-warm-white font-heading font-medium shadow-sm transition-all duration-300 hover:-translate-y-px hover:shadow-[0_20px_60px_rgba(184,134,11,0.15),0_4px_16px_rgba(0,0,0,0.06)]"
          >
            Book a Site Visit
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 p-2 transition-colors duration-300 ${isTransparent ? 'text-warm-white' : 'text-ink'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} className="text-ink" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Slide Down */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-warm-white border border-border shadow-[0_20px_40px_rgba(0,0,0,0.1)] absolute top-full mt-2 left-0 w-full rounded-[1.5rem]"
          >
            <div className="flex flex-col px-4 py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading font-medium text-lg text-ink-light hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-6 py-3 rounded-full bg-[linear-gradient(135deg,#B8860B,#D4A017)] text-warm-white font-heading font-medium shadow-sm active:scale-95 transition-transform"
              >
                Book a Site Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
