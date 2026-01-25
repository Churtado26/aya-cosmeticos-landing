import HeroSection from "../sections/HeroSection";
import ProductsSection from "../sections/ProductsSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ProductsSection />
            <AboutSection/>
            <ContactSection />
        </>
    );
}