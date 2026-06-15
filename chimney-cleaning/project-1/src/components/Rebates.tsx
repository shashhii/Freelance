"use strict";
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Zap, Leaf, Home } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const rebates = [
  {
    title: "Heat Pump Upgrade",
    incentive: "$2,350",
    description: "For replacing a wood-burning appliance with a high-efficiency heat pump.",
    icon: Zap,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Pellet Appliance",
    incentive: "$1,050",
    description: "For replacing an old woodstove with a 2020 or newer EPA-certified pellet stove.",
    icon: Leaf,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Wood-Burning Upgrade",
    incentive: "$550",
    description: "For replacing an uncertified appliance with a 2020 or newer EPA-certified woodstove.",
    icon: Home,
    color: "bg-orange-500/10 text-orange-500"
  }
];

export function Rebates() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".rebate-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section className="py-24 bg-card" ref={container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest mb-2">Incentive Programs</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Community Wood Smoke Reduction</h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            The Regional District of Nanaimo and CVRD offer rebate incentive programs when you remove your old wood burning stove.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {rebates.map((item, i) => (
            <div key={i} className="rebate-card p-10 rounded-3xl border border-border bg-background flex flex-col items-center text-center">
              <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6", item.color)}>
                <item.icon className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
              <div className="text-4xl font-extrabold text-primary mb-4">{item.incentive}</div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
