import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    // SECTION - limita largura com container, centraliza com flex, margem superior
    <section className="container relative flex items-center justify-center mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* GRID principal com 1 coluna no mobile, 2 no md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        {/* COLUNA 1: Título, parágrafo e botão */}
        <div className="flex flex-col items-center justify-center gap-4 md:items-start">
          {/* Título principal */}
          <h1 className="text-gray-100 text-heading-hg">
            Discover the World&apos;s{" "}
            <span className="text-gray-600">Hidden</span> Wonders
          </h1>

          {/* Parágrafo + botão abaixo */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            {/* Parágrafo */}
            <p className="text-gray-300 text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>

            {/* Botão "Welcome" */}
            <Button variant="default" className="mt-2">
              Welcome
            </Button>
          </div>
        </div>

        {/* COLUNA 2: Imagem (aparece em todas as telas agora) */}
        <div className="relative flex items-center justify-center h-[20rem] md:h-full order-first md:order-last">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={300}
            height={300}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
