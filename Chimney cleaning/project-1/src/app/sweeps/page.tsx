import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Wind, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SweepsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <Wind className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Professional Chimney Sweeps</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Serving Nanaimo, Ladysmith, and surrounding areas with thorough, mess-free cleaning for all wood-burning systems.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="prose prose-orange dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">Why Regular Sweeping is Essential</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Creosote is a highly flammable byproduct of burning wood. Over time, it builds up inside your chimney or stove pipe, significantly increasing the risk of a dangerous chimney fire. Our professional sweeps remove this buildup, ensuring your system draws properly and burns efficiently.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {[
                    "Creosote Removal",
                    "Blockage Clearing",
                    "Safety Check",
                    "Mess-Free Process",
                    "Stove Pipe Cleaning",
                    "Oil Furnace Sweeps"
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-3xl border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-primary" /> Insurance Compliance
                </h3>
                <p className="text-muted-foreground">
                  Many home insurance policies require proof of annual chimney maintenance. We provide a professional receipt that serves as documentation for your provider.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop" 
                alt="Chimney Sweeping" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
