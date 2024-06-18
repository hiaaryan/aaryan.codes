import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aaryan Kapoor // Beep Beep",
};

export default function BeepBeep() {
  return (
    <main className="flex min-h-dvh justify-center">
      <div className="lg:mx-56 mx-6 py-16 w-full lg:py-20">
        <div className="flex flex-col">
          <div className="w-full justify-between mb-16 flex items-center">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="relative rounded-xl shadow-xl overflow-hidden h-12 w-12">
                <Image src="/beep-beep/Logo.png" fill alt="Aaryan Kapoor" />
              </div>
              <div className="flex flex-col">
                <div>Beep Beep</div>
                <div className="opacity-50 flex items-center text-nowrap">
                  Beepin' Great Ads.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full gap-4 lg:gap-8">
              <div className="hidden lg:block w-full relative rounded-xl lg:rounded-3xl overflow-hidden shadow-xl">
                <video
                  className="w-full scale-110 rounded-lg"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="/beep-beep/Frame 1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="z-10 lg:hidden w-full relative rounded-xl lg:rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/beep-beep/Frame 1.png"
                  fill
                  className="!static h-full w-full"
                  alt="Aaryan Kapoor"
                />
              </div>
              <div className="z-0 w-full relative rounded-xl lg:rounded-3xl overflow-hidden">
                <video
                  className="w-full scale-110 rounded-lg"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="/beep-beep/Bento.mov" type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-8">
                <div className="w-full lg:w-1/2 shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 4.png"
                    fill
                    className="!static h-full w-full lg:scale-[1.7]"
                    alt="Aaryan Kapoor"
                  />
                </div>
                <div className="w-full lg:w-1/2 shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 6.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 3.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 6:5.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 5.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 7.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 8.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 9.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="hidden lg:block w-full relative rounded-xl lg:rounded-3xl overflow-hidden shadow-xl">
                <video
                  className="w-full scale-110 rounded-lg"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="/beep-beep/Frame 10.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="lg:hidden z-10 flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 10.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="z-10 flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 12.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="hidden lg:block items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/beep-beep/Frame 14.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
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
