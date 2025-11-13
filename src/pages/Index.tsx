import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ClientsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
