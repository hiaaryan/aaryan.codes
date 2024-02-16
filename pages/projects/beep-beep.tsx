import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const BeepBeep: NextPage = () => {
  return (
    <>
      <Head>
        <title>aaryan kapoor // beep beep</title>
        <meta
          name="description"
          content="🙋🏻‍♂️ hey there, i am aaryan. i am a creative brand artisan specializing in design &amp; experience."
        />
      </Head>
      <div className="select-none font-mono">
        <Link href="/">
          <img
            src="/arrow.svg"
            className="fixed left-0 top-0 z-10 m-4 h-6 rotate-180 transform !cursor-pointer text-white mix-blend-difference lg:h-9"
          />
        </Link>
        <Link href="/">
          <img
            src="/ak.svg"
            className="fixed right-0 top-0 z-10 m-4 h-6 !cursor-pointer text-white mix-blend-difference lg:h-9"
          />
        </Link>
        <div className="mt-14 flex w-auto select-none flex-col gap-4 p-4 pt-0 font-mono lg:mt-4 lg:min-h-screen">
          <div className="relative h-full w-full">
            <video
              className="hidden h-full w-full object-cover object-center lg:block"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="/beep-beep/Frame 1.mp4" type="video/mp4" />
            </video>
            <img
              src="/beep-beep/Frame 1.png"
              className="block h-full w-full object-cover object-center lg:hidden"
            />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 2.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 3.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 4.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 5.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 6.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 7.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 8.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 9.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <video
              className="hidden h-full w-full object-cover object-center lg:block"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="/beep-beep/Frame 10.mp4" type="video/mp4" />
            </video>
            <img
              src="/beep-beep/Frame 10.png"
              className="block h-full w-full object-cover object-center lg:hidden"
            />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 11.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 12.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 13.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 14.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/beep-beep/Frame 15.png" className="h-full w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeepBeep;
