import { IconInfoCircle } from "@tabler/icons-react";
import Image from "next/image";

export default function Melea() {
  return (
    <main className="flex min-h-dvh justify-center">
      <div className="lg:mx-56 mx-8 w-full py-20">
        <div className="flex flex-col">
          <div className="w-full justify-between mb-16 flex items-center">
            <div className="flex items-center gap-8">
              <div className="relative rounded-xl shadow-red-500/20 shadow-xl overflow-hidden h-12 w-12">
                <Image src="/melea/Logo.png" fill alt="Aaryan Kapoor" />
              </div>
              <div className="flex flex-col">
                <div>Melea</div>
                <div className="opacity-50 flex items-center">
                  Wardrobe for the Planet.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full gap-8">
              <div className="group/melea duration-500 w-full relative rounded-3xl overflow-hidden shadow-xl">
                <video
                  className="w-full scale-110 rounded-lg"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="/melea/Frame 1.mp4" type="video/mp4" />
                </video>
                <div className="z-50 absolute top-4 left-5 flex gap-2 items-center">
                  <div className="flex gap-1 items-center bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    <IconInfoCircle className="h-3 w-3" /> Melea
                  </div>
                  <div className="bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    Strategy & Visual Identity
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 2.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 3.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 4.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 5.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 6.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 7.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 8.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 9.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 10.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 11.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 12.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 13.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/melea/Frame 14.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
