import HeroSection from "../sections/HeroSection";
import ProductsSection from "../sections/ProductsSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import CTASection from "../sections/CTASection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ProductsSection />
            <AboutSection/>
            <ContactSection />
            <CTASection />
        </>
    );
}