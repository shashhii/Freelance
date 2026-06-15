"use strict";
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ShieldCheck, Wrench, Search, FlameKindling, Wind, Droplets } from "lucide-react";
import { BroomIcon, InspectionIcon, RepairIcon, FireplaceIcon, SafetyIcon } from "./icons/IndustryIcons";

gsap.registerPlugin(ScrollTrigger);

import Link from "next/link";

const services = [
  {
    title: "Chimney Cleaning",
    description: "Professional sweeps for fireplaces, wood stoves, and oil furnaces to ensure maximum safety.",
    icon: BroomIcon,
    href: "/sweeps"
  },
  {
    title: "WETT Inspections",
    description: "WETT Certified Site Comprehensive inspections for insurance and peace of mind.",
    icon: InspectionIcon,
    href: "/inspections"
  },
  {
    title: "Masonry Repairs",
    description: "Expert mortar joint repair, chimney restoration, and specialized masonry work.",
    icon: RepairIcon,
    href: "/repairs"
  },
  {
    title: "Wood Stove Installs",
    description: "Safe and compliant installation of wood burning stoves and fireplace inserts.",
    icon: FireplaceIcon,
    href: "/installs"
  },
  {
    title: "Water Leak Detection",
    description: "Comprehensive solutions for leaking chimneys and roof leak repairs.",
    icon: Droplets,
    href: "/repairs"
  },
  {
    title: "Dryer Vent Cleaning",
    description: "Reducing fire hazards with professional lint removal and vent maintenance.",
    icon: BroomIcon,
    href: "/sweeps"
  }
];

export function Services() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".service-grid",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary font-semibold uppercase tracking-widest mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Comprehensive Care for Your Home</h3>
        </div>

        <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link 
              key={i}
              href={service.href}
              className="service-card group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
