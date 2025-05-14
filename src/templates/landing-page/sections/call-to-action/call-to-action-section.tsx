import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90 " />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 container">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className=" text-gray-100 text-balance text-heading-xl">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button asChild className="mt-6">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
