"use client";

import Image from "next/image";
import { AnimatedButton } from "./animated-button";
import { DescriptionText } from "./description-text";
import { GradientText } from "./gradient-text";

type HeroSectionProps = {
  onScrollToFeature: () => void;
};

export default function HeroSection({ onScrollToFeature }: HeroSectionProps) {
  return (
    <section className="container relative mx-auto max-w-7xl px-4 py-8 mt-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-[25rem] lg:w-[30rem]">
          <h1 className="text-gray-100 text-heading-hg text-center md:text-left">
            Discover the World&apos;s <GradientText>Hidden</GradientText>{" "}
            Wonders
          </h1>

          <DescriptionText className="md:hidden" />

          <div className="hidden md:flex flex-col items-start gap-4 w-full">
            <DescriptionText />

            <AnimatedButton
              onClick={onScrollToFeature}
              className="hidden md:block"
            />
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex flex-col items-center justify-center h-[20rem] md:h-full">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={300}
            height={300}
            className="h-full w-auto object-contain"
          />

          <AnimatedButton
            onClick={onScrollToFeature}
            className="mt-4 md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
