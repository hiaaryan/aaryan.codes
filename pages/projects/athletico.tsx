import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const athletico: NextPage = () => {
  return (
    <>
      <Head>
        <title>aaryan kapoor // athletico.</title>
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
        <div className="mt-14 flex w-auto select-none flex-col gap-4 p-4 pt-0 font-mono lg:min-h-screen lg:pt-4">
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 1.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 2.png" className="h-full w-full" />
          </div>
          <div className="relative flex h-full w-full gap-4">
            <img
              src="/athletico/Moodboard.png"
              className="h-full w-full invert filter"
            />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 3.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 4.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 5.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 6.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 7.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 8.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 9.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 10.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 12.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 13.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 14.png" className="h-full w-full" />
          </div>
          <div className="relative h-full w-full">
            <img src="/athletico/Frame 15.png" className="h-full w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default athletico;
