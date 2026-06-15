"use strict";
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ShoppingBag, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FireplaceIcon } from "./icons/IndustryIcons";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: "Wood Stoves", img: "/images/stoves.png" },
  { name: "Fireplace Inserts", img: "/images/inserts.png" },
  { name: "Pellet Stoves", img: "/images/pellet.png" }
];

export function ShopPreview() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".shop-item", {
      scrollTrigger: {
        trigger: ".shop-grid",
        start: "top 85%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section id="shop" ref={container} className="py-24 bg-background relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-primary font-semibold uppercase tracking-widest mb-2">The Fireplace Shop</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Premium Wood & Pellet Heating</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
            View All Products <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="shop-grid grid md:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <div key={i} className="shop-item group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer">
              <Image 
                src={item.img} 
                alt={item.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-2xl font-bold mb-2">{item.name}</h4>
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-4 w-4" /> Shop Now
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
