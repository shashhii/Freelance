"use strict";
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2
    })
    .from(".hero-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.5");
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 text-center px-4">
        <h2 className="hero-title text-primary font-semibold tracking-widest uppercase mb-4">
          Nanaimo & Ladysmith Chimney Services
        </h2>
        <h1 className="hero-title text-4xl md:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          Expert Chimney Sweeps, <br /> Repairs & Inspections
        </h1>
        <p className="hero-title text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          WETT Certified technicians providing safe and professional wood burning fireplace services across British Columbia.
        </p>
        
        <div className="hero-btn">
          <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto transition-all hover:scale-105 active:scale-95">
            Request Service <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
