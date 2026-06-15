"use strict";
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { SafetyIcon } from "./icons/IndustryIcons";

gsap.registerPlugin(ScrollTrigger);

export function WettSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".wett-content > *", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
    
    gsap.from(".wett-image", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="wett-content space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm">
              <SafetyIcon className="h-4 w-4" /> WETT Certified Professionals
            </div>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              Safety First with Site Comprehensive WETT Inspections
            </h3>
            <p className="text-lg text-muted-foreground">
              Ryan is a WETT certified Site Comprehensive WETT Inspector, chimney sweep, and chimney technician with extensive experience sweeping, repairing, and installing wood burning systems.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="font-bold text-primary">01.</div>
                <div>
                  <h5 className="font-bold">Insurance Compliance</h5>
                  <p className="text-muted-foreground text-sm">Our inspections meet all major insurance provider requirements for wood burning appliances.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-primary">02.</div>
                <div>
                  <h5 className="font-bold">Professional Expertise</h5>
                  <p className="text-muted-foreground text-sm">Years of hands-on experience in Nanaimo, Cedar, Yellow Point, and Ladysmith.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="wett-image aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/images/wett.png" 
                alt="WETT Inspection" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl hidden md:block z-10">
              <p className="text-white font-bold text-2xl uppercase">Wett Certified</p>
              <p className="text-white/80">Site Comprehensive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
