import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ShopPreview } from "@/components/ShopPreview";
import { WettSection } from "@/components/WettSection";
import { Rebates } from "@/components/Rebates";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ShopPreview />
      <WettSection />
      <Rebates />
      <ContactSection />
      <Footer />
    </main>
  );
}
