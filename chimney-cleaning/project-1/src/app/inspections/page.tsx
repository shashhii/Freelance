import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, BadgeCheck, CheckCircle2 } from "lucide-react";

export default function InspectionsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">WETT Inspections</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Site Comprehensive WETT Inspections for insurance, real estate transfers, and safety assurance in Nanaimo.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="prose prose-orange dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold">What is a WETT Inspection?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A Wood Energy Technology Transfer (WETT) inspection is a specialized assessment of your wood-burning system to ensure it is installed safely and complies with relevant building codes and standards.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {[
                    "Insurance Reports",
                    "Real Estate Sales",
                    "Compliance Verification",
                    "Visual Inspections",
                    "Technical Evaluation",
                    "WETT Site Comprehensive"
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BadgeCheck className="text-primary" /> Certified Inspector
                </h3>
                <p className="text-muted-foreground">
                  Our lead inspector, Ryan, is WETT Certified for Site Comprehensive inspections, the highest level of visual inspection for residential wood-burning systems.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                alt="WETT Inspection Tool" 
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
