"use strict";
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const container = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    gsap.from(".contact-info > *", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    });
    
    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
    });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate email sending
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your request has been sent to Canadian Chimney.");
    }, 2000);
  };

  return (
    <section id="contact" ref={container} className="py-24 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="contact-info space-y-8">
            <div>
              <h2 className="text-primary font-semibold uppercase tracking-widest mb-2">Get In Touch</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Let's Keep Your Home Safe & Warm</h3>
              <p className="text-muted-foreground text-lg">
                Whether you need a routine sweep or a complex masonry repair, our team is ready to help.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:2507510411" className="flex items-center gap-4 group p-4 rounded-2xl border border-border bg-background hover:border-primary transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Call Us Today</p>
                  <p className="text-xl font-bold">(250) 751-0411</p>
                </div>
              </a>

              <a href="mailto:ryan@canadianchimney.com" className="flex items-center gap-4 group p-4 rounded-2xl border border-border bg-background hover:border-primary transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Email Us</p>
                  <p className="text-xl font-bold">ryan@canadianchimney.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Location</p>
                  <p className="text-xl font-bold">Nanaimo & Ladysmith, BC</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form bg-background p-8 md:p-12 rounded-3xl border border-border shadow-2xl space-y-6">
            <h4 className="text-2xl font-bold mb-4">Request a Service</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                <input required type="text" className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                <input required type="tel" className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="(250) 555-0123" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Service Type</label>
              <select className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                <option>Chimney Sweep</option>
                <option>WETT Inspection</option>
                <option>Masonry Repair</option>
                <option>Installation</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea rows={4} className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : <Send className="h-5 w-5" />}
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
