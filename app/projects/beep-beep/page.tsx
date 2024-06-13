import { IconInfoCircle } from "@tabler/icons-react";
import Image from "next/image";

export default function BeepBeep() {
  return (
    <main className="flex min-h-dvh justify-center">
      <div className="lg:mx-56 mx-8 w-full py-20">
        <div className="flex flex-col">
          <div className="w-full justify-between mb-16 flex items-center">
            <div className="flex items-center gap-8">
              <div className="relative rounded-xl shadow-blue-500/20 shadow-xl overflow-hidden h-12 w-12">
                <Image
                  src="/beep-beep/Logo.png"
                  fill
                  alt="Aaryan Kapoor"
                  className="scale-110"
                />
              </div>
              <div className="flex flex-col">
                <div>Beep Beep</div>
                <div className="opacity-50 flex items-center">
                  Beepin' Great Ads.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full gap-8">
              <div className="group/beep-beep duration-500 w-full relative rounded-3xl overflow-hidden shadow-xl">
                <video
                  className="w-full scale-110 rounded-lg"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="/beep-beep/Frame 1.mp4" type="video/mp4" />
                </video>
                <div className="z-50 absolute top-4 left-5 flex gap-2 items-center">
                  <div className="flex gap-1 items-center bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    <IconInfoCircle className="h-3 w-3" /> Beep Beep
                  </div>
                  <div className="bg-black/20 text-white backdrop-blur px-2 text-xs py-0.5 rounded-full">
                    Strategy & Visual Identity
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-1/2 shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 4.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
                <div className="w-1/2 shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 0.png"
                    fill
                    className="!static h-full w-full scale-[2.25]"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 3.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 6:5.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 5.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 7.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 8.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 9.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full -z-10 rounded-3xl overflow-hidden">
                  <video className="w-full" autoPlay playsInline muted loop>
                    <source src="/beep-beep/Frame 10.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 12.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full -z-10 rounded-3xl overflow-hidden">
                  <video className="w-full" autoPlay playsInline muted loop>
                    <source src="/beep-beep/Bento.mov" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 15.png"
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
