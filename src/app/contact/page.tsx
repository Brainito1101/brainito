import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CTABannerSection } from "@/components/sections/cta-banner";
import { ContactSection } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ContactSection />
        <CTABannerSection />
      </main>
      <Footer />
    </>
  );
}

