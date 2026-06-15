"use strict";
"use client";

import { Flame, Mail, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Flame className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">CANADIAN CHIMNEY</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted partner for chimney sweeps, inspections, and repairs in Nanaimo and surrounding areas.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">WETT Inspections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fireplace Shop</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Service Request</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">Nanaimo & Ladysmith, <br /> British Columbia, Canada</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">(250) 751-0411</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">ryan@canadianchimney.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-muted-foreground"><span>Mon - Thu</span> <span>08:00 - 16:30</span></li>
              <li className="flex justify-between text-muted-foreground"><span>Friday</span> <span>08:00 - 15:00</span></li>
              <li className="flex justify-between text-muted-foreground"><span>Saturday</span> <span>10:00 - 13:00</span></li>
              <li className="flex justify-between text-muted-foreground"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Canadian Chimney. All rights reserved. Professional Chimney Sweeps in Nanaimo.</p>
        </div>
      </div>
    </footer>
  );
}
