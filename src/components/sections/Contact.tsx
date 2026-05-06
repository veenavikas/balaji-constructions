"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    alert("Thank you for your interest. Our team will contact you shortly.");
    reset();
  };

  return (
    <section id="contact" className="bg-background py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-primary mb-6"
          >
            Let&apos;s Build Your Dream. <br className="hidden md:block" />
            <span className="text-foreground">Together.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 max-w-6xl mx-auto">
          {/* Left: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-card border border-border p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <h3 className="text-2xl font-serif text-foreground mb-8">Register Your Interest</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div>
                  <input 
                    {...register("name")}
                    placeholder="Full Name" 
                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-none"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      {...register("phone")}
                      placeholder="Phone Number" 
                      className="w-full bg-transparent border-b border-border/50 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-none"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>
                  <div>
                    <input 
                      {...register("email")}
                      placeholder="Email Address" 
                      className="w-full bg-transparent border-b border-border/50 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-none"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                <div>
                  <select 
                    {...register("interest")}
                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-none appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-background text-muted-foreground">Interested In</option>
                    <option value="Residential" className="bg-background">Residential (Flats/Apartments)</option>
                    <option value="Villas" className="bg-background">Luxury Villas</option>
                    <option value="Commercial" className="bg-background">Commercial Spaces</option>
                    <option value="Other" className="bg-background">Other Enquiries</option>
                  </select>
                  {errors.interest && <span className="text-red-500 text-xs mt-1 block">{errors.interest.message}</span>}
                </div>

                <div>
                  <textarea 
                    {...register("message")}
                    placeholder="Any specific requirements? (Optional)" 
                    rows={3}
                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-none resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? "Submitting..." : "Begin Your Journey"}
                  {!isSubmitting && <span>→</span>}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right: Map & Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 mb-8 border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.854612869557!2d83.3516584!3d17.8203593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395963503f3903%3A0xc07c724733d83870!2sMadhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-foreground font-serif text-xl mb-2">Grand Office</h4>
                    <p className="text-muted-foreground font-light leading-relaxed text-sm">
                      Balaji Towers, 4th Floor,<br />
                      Madhurawada, Visakhapatnam,<br />
                      Andhra Pradesh - 530048
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-primary font-display uppercase tracking-widest text-sm mb-4">Connect</h4>
                <div className="flex flex-col gap-4 text-muted-foreground">
                  <a href="tel:+919876543210" className="flex gap-3 items-center hover:text-foreground transition-colors group">
                    <Phone size={20} className="text-primary" />
                    <span className="font-light">+91 98765 43210</span>
                  </a>
                  <a href="mailto:hello@balajiconstructions.com" className="flex gap-3 items-center hover:text-foreground transition-colors group">
                    <Mail size={20} className="text-primary" />
                    <span className="font-light">hello@balajiconstructions.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Chat with us
        </span>
      </a>
    </section>
  );
}
