"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an option"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B8860B', '#D4A017', '#C9A84C', '#FFFFFF']
    });
  };

  const CheckmarkIcon = () => (
    <motion.svg 
      initial={{ scale: 0, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      className="w-5 h-5 text-sage absolute right-4 top-1/2 -translate-y-1/2" 
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </motion.svg>
  );

  return (
    <section id="contact" className="py-24 bg-cream-deep">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-[48px] md:text-[64px] text-ink leading-[1.1] mb-6">
              Your Dream Home Awaits.
            </h2>
            <p className="font-sans text-ink-light text-lg mb-10 max-w-md">
              Our advisors are ready to guide you from vision to keys in hand.
            </p>
            
            <div className="space-y-6 mb-10">
              {/* Phone Card */}
              <a href="tel:+919876543210" className="flex items-center gap-6 p-6 neu-raised rounded-[20px] bg-cream group hover:shadow-[0_20px_60px_rgba(184,134,11,0.08)] transition-shadow">
                <div className="w-12 h-12 rounded-full border border-gold-pale flex items-center justify-center bg-white text-gold group-hover:bg-grad-gold group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-1">Phone</p>
                  <p className="font-heading font-medium text-ink text-lg">+91 98765 43210</p>
                </div>
              </a>
              
              {/* Email Card */}
              <a href="mailto:hello@balajiconstructions.com" className="flex items-center gap-6 p-6 neu-raised rounded-[20px] bg-cream group hover:shadow-[0_20px_60px_rgba(184,134,11,0.08)] transition-shadow">
                <div className="w-12 h-12 rounded-full border border-gold-pale flex items-center justify-center bg-white text-gold group-hover:bg-grad-gold group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-1">Email</p>
                  <p className="font-heading font-medium text-ink text-lg">hello@balajiconstructions.com</p>
                </div>
              </a>
              
              {/* Address Card */}
              <div className="flex items-center gap-6 p-6 neu-raised rounded-[20px] bg-cream">
                <div className="w-12 h-12 rounded-full border border-gold-pale flex items-center justify-center bg-white text-gold shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-1">Address</p>
                  <p className="font-heading font-medium text-ink text-lg">VIP Road, Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-heading font-medium text-lg hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp →
            </a>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-warm-white p-8 md:p-12 rounded-[24px] border border-border shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-sage">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl text-ink mb-4">Request Received</h3>
                  <p className="font-sans text-ink-light mb-8">
                    Thank you for your interest. One of our property advisors will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="font-heading font-medium text-gold hover:text-gold-light"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[11px] uppercase tracking-widest text-ink-muted pl-4">Full Name</label>
                    <div className="relative">
                      <input 
                        {...register("name")}
                        className={`w-full px-6 py-4 bg-neu-bg rounded-full outline-none transition-all duration-300 ${
                          errors.name ? 'border-red-500 shadow-none' : 
                          'border-transparent shadow-[inset_4px_4px_8px_var(--neu-shadow-drk),inset_-4px_-4px_8px_var(--neu-shadow-lit)] focus:border-gold focus:shadow-[0_0_0_3px_var(--gold-pale)]'
                        } border-2`}
                        placeholder="John Doe"
                      />
                      {!errors.name && dirtyFields.name && <CheckmarkIcon />}
                    </div>
                    <AnimatePresence>
                      {errors.name && (
                        <motion.span 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-red-500 text-xs pl-4"
                        >
                          {errors.name.message}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[11px] uppercase tracking-widest text-ink-muted pl-4">Phone Number</label>
                      <div className="relative">
                        <input 
                          {...register("phone")}
                          className={`w-full px-6 py-4 bg-neu-bg rounded-full outline-none transition-all duration-300 ${
                            errors.phone ? 'border-red-500 shadow-none' : 
                            'border-transparent shadow-[inset_4px_4px_8px_var(--neu-shadow-drk),inset_-4px_-4px_8px_var(--neu-shadow-lit)] focus:border-gold focus:shadow-[0_0_0_3px_var(--gold-pale)]'
                          } border-2`}
                          placeholder="+91"
                        />
                        {!errors.phone && dirtyFields.phone && <CheckmarkIcon />}
                      </div>
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.span 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="text-red-500 text-xs pl-4"
                          >
                            {errors.phone.message}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[11px] uppercase tracking-widest text-ink-muted pl-4">Email Address</label>
                      <div className="relative">
                        <input 
                          {...register("email")}
                          type="email"
                          className={`w-full px-6 py-4 bg-neu-bg rounded-full outline-none transition-all duration-300 ${
                            errors.email ? 'border-red-500 shadow-none' : 
                            'border-transparent shadow-[inset_4px_4px_8px_var(--neu-shadow-drk),inset_-4px_-4px_8px_var(--neu-shadow-lit)] focus:border-gold focus:shadow-[0_0_0_3px_var(--gold-pale)]'
                          } border-2`}
                          placeholder="john@example.com"
                        />
                        {!errors.email && dirtyFields.email && <CheckmarkIcon />}
                      </div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.span 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="text-red-500 text-xs pl-4"
                          >
                            {errors.email.message}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Interested In */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[11px] uppercase tracking-widest text-ink-muted pl-4">Interested In</label>
                    <div className="relative">
                      <select 
                        {...register("interest")}
                        className={`w-full px-6 py-4 bg-neu-bg rounded-full outline-none appearance-none transition-all duration-300 ${
                          errors.interest ? 'border-red-500 shadow-none' : 
                          'border-transparent shadow-[inset_4px_4px_8px_var(--neu-shadow-drk),inset_-4px_-4px_8px_var(--neu-shadow-lit)] focus:border-gold focus:shadow-[0_0_0_3px_var(--gold-pale)]'
                        } border-2 text-ink-light`}
                      >
                        <option value="">Select a property type...</option>
                        <option value="luxury-apartments">Luxury Apartments</option>
                        <option value="villas">Premium Villas</option>
                        <option value="commercial">Commercial Spaces</option>
                        <option value="general">General Inquiry</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 mb-2">
                    <label className="font-mono text-[11px] uppercase tracking-widest text-ink-muted pl-4">Message (Optional)</label>
                    <textarea 
                      {...register("message")}
                      rows={3}
                      className="w-full px-6 py-4 bg-neu-bg rounded-[24px] outline-none border-2 border-transparent shadow-[inset_4px_4px_8px_var(--neu-shadow-drk),inset_-4px_-4px_8px_var(--neu-shadow-lit)] focus:border-gold focus:shadow-[0_0_0_3px_var(--gold-pale)] transition-all duration-300 resize-none"
                      placeholder="Tell us about your specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-grad-cta text-warm-white font-heading font-medium text-lg hover:scale-[1.01] transition-transform duration-300 shadow-[0_4px_16px_rgba(184,134,11,0.3)] hover:shadow-[0_10px_30px_rgba(184,134,11,0.4)] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center min-h-[60px]"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Request a Site Visit →"
                    )}
                  </button>

                  <div className="text-center mt-2">
                    <p className="font-sans text-xs text-ink-muted">
                      RERA Registered | AP/XXX/XXXX · Your data is secure.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
