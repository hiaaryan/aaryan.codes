import { IconBrandLinkedin, IconInbox } from "@tabler/icons-react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>aaryan kapoor // about</title>
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
        <div className="mt-14 flex h-screen w-auto select-none flex-col bg-white p-4 pt-0 font-mono lg:mt-0 lg:flex-row lg:gap-4">
          <div className="flex h-auto lg:w-1/3 lg:items-end lg:justify-start">
            <img
              src="/aaryan.jpeg"
              className="h-auto w-full object-cover object-center"
            />
          </div>
          <div className="flex h-full flex-col text-sm lg:w-1/2 lg:justify-end lg:text-base">
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <div>
                <img
                  src="/ak[full].svg"
                  className="z-10 h-12 text-white mix-blend-difference"
                />
              </div>
              <div>
                <img
                  src="/arrow.svg"
                  className="z-10 mb-1 mr-1 h-10 text-white mix-blend-difference"
                />
              </div>
            </div>
            <div className="my-4 text-justify lg:-mb-1 lg:mt-8 lg:max-w-4xl">
              Hello there! I am Aaryan. Aaryan Kapoor. I am a creative brand
              &lsquo;artisan&lsquo; and an adult fan of LEGO (AFOL). I always
              like to build and fiddle with things and that&#39;s what led me to
              the world of design.
              <br />
              <br />I strongly believe that design has the power to change
              everything. This is why I have a true passion for crafting emotive
              (& sometimes crazy) brand experiences that forge powerful
              connections with target audiences. I leverage exceptional design
              skills across platforms like Adobe Illustrator, Photoshop, After
              Effects and Figma to develop visually compelling brand assets. I
              pair this with strong technical expertise in frontend development
              using tools like CSS, TypeScript, JavaScript, and ReactJS.
              <div className="my-4 mt-5 flex gap-4 text-xs font-medium lg:text-sm">
                <Link
                  href="https://www.linkedin.com/in/hiaaryan/"
                  target="_blank"
                  className="flex !cursor-pointer items-center"
                >
                  <IconBrandLinkedin
                    size={25}
                    stroke={2}
                    className="-ml-1.5 mr-2"
                  />{" "}
                  LinkedIn
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex !cursor-pointer items-center"
                >
                  <IconInbox size={25} stroke={2} className="mr-2" /> Resume
                </Link>
              </div>
              I love collaborating with risk taking brands and agencies to
              create unique and memorable brand experiences. I am currently on
              the lookout for new internship opportunities to work with brands
              that are looking to make a difference in the world.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
