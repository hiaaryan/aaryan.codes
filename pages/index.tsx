import { IconAt, IconBrandLinkedin, IconFileExport } from '@tabler/icons'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="font-sans h-screen w-screen">
      <Head>
        <title>aaryan kapoor // creative brand strategist</title>
        <meta name="description" content="🙋🏻‍♂️ hey there, i am aaryan. i am a developer, and a digital marketer specializing in brand design &amp; management." />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex items-center justify-center w-screen h-screen p-8 lg:p-16 select-none">
          <div className="w-full z-50">
            <div className="w-full flex-col text-left">
              <div className="py-6 font-semibold text-2xl lg:text-4xl">
                Hello there! <br />
                I am <span className="text-blue-700 font-semibold">Aaryan Kapoor</span> :)
                <p className="mt-6 text-base lg:text-xl font-semibold lg:max-w-2xl">
                  I am currently based in the UK persuing my <br className="hidden lg:block" /> Masters in Marketing and Brand Management
                  from <br className="hidden lg:block" /> Nottingham Trent University. <br className="hidden lg:block" /><br className="hidden lg:block" />

                  I love to work on amazing brand experiences and strategies. <br />
                </p>
              </div>
            </div>

            <div className="mt-3 lg:mt-6 w-full gap-1 text-base lg:text-lg font-semibold flex lg:justify-start">
              <a href="https://www.linkedin.com/in/hiaaryan" target="_blank" rel="noreferrer" className="hover:drop-shadow-lg text-blue-500 flex items-center transition duration-150">
                <IconBrandLinkedin className="mr-1.5" stroke={2} size={24} />
              </a>
              <a href="mailto:hi.aaryankapoor@gmail.com" target="_blank" rel="noreferrer" className="hover:drop-shadow-lg flex items-center text-green-500 transition duration-150">
                <IconAt className="mr-1.5" stroke={2} size={21} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:drop-shadow-lg flex items-center text-orange-500 transition duration-150">
                <IconFileExport className="mr-1.5" stroke={2} size={20} /> View my Resume
              </a>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Home
