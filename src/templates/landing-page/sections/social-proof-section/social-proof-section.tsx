import { CarFrontIcon } from "lucide-react";

export default function SocialProofSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className=" flex">
        <div className="space-y-2 text-center">
          <div className="w-full flex items-center justify-center p-2">
            <CarFrontIcon
              size={54}
              className="text-white bg-blue-200 border border-blue-400 rounded-full p-2"
            />
          </div>

          <h1 className="text-heading-sm text-white">Mustang GT</h1>
          <p className="text-base font-medium text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="space-y-2 text-center">
          <div className="w-full flex items-center justify-center p-2">
            <CarFrontIcon
              size={54}
              className="text-white bg-blue-200 border border-blue-400 rounded-full p-2"
            />
          </div>

          <h1 className="text-heading-sm text-white">Mustang GT</h1>
          <p className="text-base font-medium text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="space-y-2 text-center">
          <div className="w-full flex items-center justify-center p-2">
            <CarFrontIcon
              size={54}
              className="text-white bg-blue-200 border border-blue-400 rounded-full p-2"
            />
          </div>

          <h1 className="text-heading-sm text-white">Mustang GT</h1>
          <p className="text-base font-medium text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
