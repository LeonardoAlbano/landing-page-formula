import CallToActionSection from "./sections/call-to-action/call-to-action-section";
import FeatureSection from "./sections/features-section/features-section";
import HeroSection from "./sections/hero-section/hero-section";
import SupportSection from "./sections/support-section/support-section";

export default function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CallToActionSection />
    </article>
  );
}
