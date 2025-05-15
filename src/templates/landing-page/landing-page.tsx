"use client";

import { useRef } from "react";
import CallToActionSection from "./sections/call-to-action/call-to-action-section";
import CustomerStorySection from "./sections/customer-story-section/customer-story-section";
import FeatureSection from "./sections/features-section/features-section";
import HeroSection from "./sections/hero-section/hero-section";
import SupportSection from "./sections/support-section/support-section";

export default function LandingPage() {
  const featureRef = useRef<HTMLElement>(null);

  const scrollToFeature = () => {
    featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection onScrollToFeature={scrollToFeature} />
      <FeatureSection sectionRef={featureRef} />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  );
}
