import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FlameKindling, Home, CheckCircle2 } from "lucide-react";

export default function InstallsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <FlameKindling className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Wood Stove & Fireplace Installs</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Safe, compliant, and efficient installation of modern wood stoves, inserts, and factory-built chimneys.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="prose prose-orange dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">Upgrade Your Home's Warmth</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are replacing an old unit or adding a new fireplace, proper installation is critical for safety and performance. We ensure your installation meets all manufacturer specifications and BC building codes.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {[
                    "Wood Stove Installation",
                    "Fireplace Inserts",
                    "Chimney Systems",
                    "EPA Certified Units",
                    "Code Compliance",
                    "Safety Verification"
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
                  <Home className="text-primary" /> Fireplace Shop
                </h3>
                <p className="text-muted-foreground">
                  Visit our shop to see our selection of cleaner-burning wood stoves, pellet stoves, and fireplace inserts.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=2070&auto=format&fit=crop" 
                alt="Wood Stove Install" 
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
