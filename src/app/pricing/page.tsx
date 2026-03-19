import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PricingPageSection } from "@/components/sections/pricing-page-section";
import { FAQSection } from "@/components/sections/faq";
import { CTABannerSection } from "@/components/sections/cta-banner";

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <main>
                <PricingPageSection />
                <FAQSection />
                <CTABannerSection />
            </main>
            <Footer />
        </>
    );
}
