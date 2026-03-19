import Header from "@/components/anniversary/Header";
import Hero from "@/components/anniversary/Hero";
import Timeline from "@/components/anniversary/Timeline";
import StatsSection from "@/components/anniversary/StatsSection";
import CarouselSection from "@/components/anniversary/CarouselSection";
import PhotoGallery from "@/components/anniversary/PhotoGallery";
import ResourcesSection from "@/components/anniversary/ResourcesSection";
import TributeSection from "@/components/anniversary/TributeSection";
import ContactSection from "@/components/anniversary/ContactSection";
import Footer from "@/components/anniversary/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <section id="impact">
          <StatsSection />
        </section>

        {/* Timeline */}
        <section id="timeline">
          <Timeline />
        </section>

        {/* Carousel Section */}
        <CarouselSection />

        {/* Photo Gallery / Memories */}
        <PhotoGallery />

        {/* Resources */}
        <section id="resources">
          <ResourcesSection />
        </section>

        {/* Tribute / Message Section */}
        <TributeSection />

        {/* Contact */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
