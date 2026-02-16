import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ContactSection />
      <footer className="py-6 bg-foreground text-center">
        <p className="text-primary-foreground/40 font-body text-sm">
          © 2026 ลูกชิ้นแท้ — สดใหม่ทุกวัน
        </p>
      </footer>
    </div>
  );
};

export default Index;
