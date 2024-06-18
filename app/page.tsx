import { IconInfoCircle } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aaryan Kapoor // Strategist → Branding & Digital ⚡️",
  description:
    "Hello there! I am a creative branding & marketing professional with 1.5+ years of experience. Breaking rules, making things happen drive me.",
};

export default function Home() {
  return (
    <main className="flex min-h-dvh justify-center">
      <div className="lg:mx-56 mx-6 py-16 w-full lg:py-20">
        <div className="flex flex-col">
          <div className="w-full justify-between mb-16 flex items-center">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="relative rounded-xl shadow-xl overflow-hidden h-12 w-12">
                <Image
                  src="/aaryan.jpeg"
                  fill
                  alt="Aaryan Kapoor"
                  className="brightness-105"
                />
              </div>
              <div className="flex flex-col">
                <div>Hello, I'm Aaryan.</div>
                <div className="opacity-50 flex items-center text-nowrap">
                  I'm a freelance brand strategist.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row item-center lg:space-x-4 lg:space-y-0 space-y-4 w-full">
              <Link
                href={"/projects/athletico"}
                className="group/athletico cursor-pointer duration-500 relative w-full lg:w-1/2 h-52 lg:h-[20.5rem] rounded-3xl overflow-hidden hover:scale-[.99]"
              >
                <Image
                  alt="athletico"
                  src={"/athletico/Frame 12.png"}
                  fill
                  className="object-cover duration-500"
                />
                <div className="z-50 scale-[0.8] lg:scale-100 origin-bottom-left absolute bottom-4 left-5 flex gap-2 items-center">
                  <div className="flex gap-1 items-center bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    <IconInfoCircle className="h-3 w-3" /> athletico
                  </div>
                  <div className="bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    Strategy & Visual Identity
                  </div>
                </div>
              </Link>
              <Link
                href={"/projects/melea"}
                className="group/melea cursor-pointer duration-500 relative w-full lg:w-1/2 h-52 lg:h-[20.5rem] rounded-3xl overflow-hidden hover:scale-[.99]"
              >
                <Image
                  alt="melea"
                  src={"/melea/Frame 12.png"}
                  fill
                  className="object-cover duration-500"
                />
                <div className="z-50 scale-[0.8] lg:scale-100 origin-bottom-left absolute bottom-4 left-5 flex gap-2 items-center">
                  <div className="flex gap-1 items-center bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    <IconInfoCircle className="h-3 w-3" /> Melea
                  </div>
                  <div className="bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    Strategy & Visual Identity
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row item-center lg:space-x-4 lg:space-y-0 space-y-4 w-full">
              <Link
                href={"/projects/beep-beep"}
                className="group/beep-beep cursor-pointer duration-500 relative w-full lg:w-2/3 h-52 lg:h-[20.5rem] rounded-3xl overflow-hidden hover:scale-[.99]"
              >
                <Image
                  alt="beep-beep"
                  src={"/beep-beep/Frame 12.png"}
                  fill
                  className="object-cover"
                />
                <div className="z-50 scale-[0.8] lg:scale-100 absolute origin-bottom-left bottom-4 left-5 flex gap-2 items-center">
                  <div className="flex gap-1 items-center bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    <IconInfoCircle className="h-3 w-3" /> Beep Beep
                  </div>
                  <div className="bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    Strategy & Visual Identity
                  </div>
                </div>
              </Link>
              <Link
                href={"/projects/flotek"}
                className="group/flotek cursor-pointer duration-500 relative w-full lg:w-1/3 h-52 lg:h-[20.5rem] rounded-3xl overflow-hidden hover:scale-[.99]"
              >
                <Image
                  alt="flotek"
                  src={"/flotek/Frame 3.png"}
                  fill
                  className="object-cover origin-left brightness-105"
                />
                <div className="z-50 scale-[0.8] lg:scale-100 absolute bottom-4 left-5 origin-bottom-left flex gap-2 items-center">
                  <div className="flex gap-1 items-center bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    <IconInfoCircle className="h-3 w-3" /> FLOTEK
                  </div>
                  <div className="bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    Strategy & Visual Identity
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
