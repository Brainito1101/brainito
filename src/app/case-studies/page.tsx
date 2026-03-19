import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CaseStudiesHero } from "@/components/sections/case-studies-hero";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { CTABannerSection } from "@/components/sections/cta-banner";

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudiesHero />
        <CaseStudiesSection hideHeader showViewAll={false} />
        <CTABannerSection />
      </main>
      <Footer />
    </>
  );
}
