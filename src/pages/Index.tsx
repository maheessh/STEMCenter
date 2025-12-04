import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBanner from "@/components/LogoBanner";
import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import FeaturesSection from "@/components/FeaturesSection";
import FutureSection from "@/components/FutureSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <LogoBanner />
        <AboutSection />
        <ExploreSection />
        <FeaturesSection />
        <FutureSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
