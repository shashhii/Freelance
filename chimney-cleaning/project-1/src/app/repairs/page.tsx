import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hammer, Wrench, CheckCircle2 } from "lucide-react";

export default function RepairsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <Hammer className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Chimney & Masonry Repairs</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Expert restoration and structural repairs to keep your chimney safe, efficient, and waterproof.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="prose prose-orange dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">Restoring Structural Integrity</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Weather and heat take a toll on masonry. From mortar joint deterioration to chimney cap damage, our team specializes in identifying and fixing structural issues before they lead to costly water damage or safety hazards.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {[
                    "Mortar Joint Repair",
                    "Masonry Restoration",
                    "Chimney Cap Repair",
                    "Fireplace Structural Fixes",
                    "Water Leak Detection",
                    "Crown Rebuilding"
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" 
                alt="Masonry Repair" 
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
