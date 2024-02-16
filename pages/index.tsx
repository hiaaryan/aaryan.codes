import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>aaryan kapoor // creative brand artisan</title>
        <meta
          name="description"
          content="🙋🏻‍♂️ hey there, i am aaryan. i am a creative brand artisan specializing in design &amp; experience."
        />
      </Head>
      <div className="select-none bg-white font-mono">
        <div id="screen" className="relative h-screen w-screen">
          <Link
            href="/about"
            className="fixed left-0 top-0 z-30 m-4 flex flex-col gap-2 mix-blend-difference"
          >
            <img
              src="/ak.svg"
              className="z-10 h-6 !cursor-pointer mix-blend-difference lg:h-9"
            />
          </Link>
          <div className="h-screen w-screen select-none overflow-hidden font-mono">
            <div className="flex h-full w-full items-center justify-end">
              <video
                className="z-10 -mt-20 w-5/6 lg:-mt-10"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-20 flex w-screen justify-around bg-white p-4 text-black">
          <div className="text-sm font-medium lg:text-base">
            <Link href="/#work" className="flex !cursor-pointer items-center">
              <img src="/arrow.svg" className="mr-2 h-3 mix-blend-difference" />{" "}
              work
            </Link>
          </div>
          <div className="text-sm font-medium lg:text-base">
            <Link href="/about" className="flex !cursor-pointer items-center">
              <img src="/arrow.svg" className="mr-2 h-3 mix-blend-difference" />{" "}
              about
            </Link>
          </div>
          <div className="text-sm font-medium lg:text-base">
            <Link
              href="mailto:hi.aaryankapoor@gmail.com"
              className="flex !cursor-pointer items-center"
            >
              <img src="/arrow.svg" className="mr-2 h-3 mix-blend-difference" />{" "}
              email
            </Link>
          </div>
        </div>
        <div
          id="work"
          className="flex h-auto w-auto select-none flex-col gap-4 p-4 font-mono"
        >
          <Link
            href="/projects/athletico"
            className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
          >
            <img
              src="/athletico/Frame 8.png"
              className="h-full w-full object-cover object-center"
            />
          </Link>
          <Link
            href="/projects/beep-beep"
            className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
          >
            <img
              src="/beep-beep/Frame 8.png"
              className="h-full w-full object-cover object-center"
            />
          </Link>
          <Link
            href="/projects/flotek"
            className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
          >
            <img
              src="/flotek/Frame 3.png"
              className="h-full w-full object-cover object-center"
            />
          </Link>
          <Link
            href="/projects/melea"
            className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
          >
            <img
              src="/melea/Frame 12.png"
              className="h-full w-full object-cover object-center"
            />
          </Link>
          <Link
            href="/projects/tbim"
            className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
          >
            <img
              src="/tbim/Frame 5.png"
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
