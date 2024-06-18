import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aaryan Kapoor // FLOTEK",
};

export default function FLOTEK() {
  return (
    <main className="flex min-h-dvh justify-center">
      <div className="lg:mx-56 mx-6 py-16 w-full lg:py-20">
        <div className="flex flex-col">
          <div className="w-full justify-between mb-16 flex items-center">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="relative rounded-xl shadow-xl overflow-hidden h-12 w-12">
                <Image src="/flotek/Logo.png" fill alt="Aaryan Kapoor" />
              </div>
              <div className="flex flex-col">
                <div>FLOTEK</div>
                <div className="opacity-50 flex items-center text-nowrap">
                  Great Currents of Innovation.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full gap-4 lg:gap-8">
              <div className="w-full relative rounded-xl lg:rounded-3xl overflow-hidden shadow-xl">
                <video
                  className="w-full scale-110 rounded-lg"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="/flotek/Frame 1.webm" type="video/webm" />
                </video>
              </div>
              <div className="flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-8">
                <div className="w-full lg:w-1/2 shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 1.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
                <div className="w-full lg:w-1/2 shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 3.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 4.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 6.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 5.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 7.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 8.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 9.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 10.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex-col flex lg:flex-row items-center w-full gap-4 lg:gap-8">
                <div className="w-full lg:w-1/2 shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 11.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
                <div className="w-full lg:w-1/2 shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 12.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 13.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 14.png"
                    fill
                    className="!static h-full w-full"
                    alt="Aaryan Kapoor"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="w-full shadow-xl rounded-xl lg:rounded-3xl overflow-hidden">
                  <Image
                    src="/flotek/Frame 15.png"
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
