import HeroSection from "../sections/HeroSection";
import ProductsSection from "../sections/ProductsSection";
import TestimonialSection from "../sections/TestimonialSection";
import PricingSection from "../sections/PricingSection";
import ContactSection from "../sections/ContactSection";
import CTASection from "../sections/CTASection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ProductsSection />
            <TestimonialSection />
            <PricingSection />
            <ContactSection />
            <CTASection />
        </>
    );
}