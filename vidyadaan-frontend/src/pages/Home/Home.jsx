import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import AboutSection from "./AboutSection";
import FeaturedSchools from "./FeaturedSchools";
import HowItWorks from "./HowItWorks";
import NGOSection from "./NGOSection";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import ContactPreview from "./ContactPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturedSchools />
      <HowItWorks />
      <NGOSection />
      <Testimonials />
      <FAQ />
      <CTASection />
      <ContactPreview />
    </>
  );
}