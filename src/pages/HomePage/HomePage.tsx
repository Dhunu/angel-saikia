import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

const HomePage = () => {
    return (
        <div className="h-full pt-16 md:pt-20 bg-black">
            <HeroSection />
            <AboutMeSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
};

export default HomePage;
