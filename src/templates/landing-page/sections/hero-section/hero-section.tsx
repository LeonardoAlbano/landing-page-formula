import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type HeroSectionProps = {
  onScrollToFeature: () => void;
};

export default function HeroSection({ onScrollToFeature }: HeroSectionProps) {
  return (
    <section className="container relative flex items-center justify-center mt-16 mx-auto max-w-7xl px-4 py-8 md:py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start md:w-[25rem] lg:w-[30rem">
          <h1 className="text-gray-100 text-heading-hg text-center md:text-left">
            Discover the World&apos;s{" "}
            <motion.span
              style={{
                background: "linear-gradient(90deg, #4b5563, #9ca3af, #4b5563)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Hidden
            </motion.span>{" "}
            Wonders
          </h1>

          <div className="hidden md:flex flex-col items-start gap-4">
            <p className="text-gray-300 text-base leading-relaxed text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s...
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button onClick={onScrollToFeature} variant="default">
                Ver recursos
              </Button>
            </motion.div>
          </div>

          <p className="text-gray-300 text-base leading-relaxed text-center md:hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s...
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center h-[20rem] md:h-full order-last md:order-last">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={300}
            height={300}
            className="h-full w-auto object-contain"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex items-center justify-center mt-4 md:hidden"
          >
            <Button onClick={onScrollToFeature} variant="default">
              Welcome
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
