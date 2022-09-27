import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  const images = ['hand', 'heart', 'hey', 'okay'];
  const [currentImage, setCurrentImage] = useState('hand');

  useEffect(() => {
      const intervalId = setInterval(() => {
          setCurrentImage(images[Math.floor(Math.random() * images.length)]);
      }, 1000)

      return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="font-sans bg-white h-screen w-screen">
      <Head>
        <title>aaryan kapoor // creative brand strategist</title>
        <meta name="description" content="🙋🏻‍♂️ hey there, i am aaryan. i am a developer, and a digital marketer specializing in brand design &amp; management." />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="flex items-center justify-center content h-screen p-4 lg:p-16 cursor-crosshair select-none">
          <div className="w-full">
            <div className="w-full flex-col text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <img alt="greeting image" className="w-16 animate-bounce" src={'/' + currentImage + '.png'} />
              </div>
              <div className="py-6 lg:max-w-xl">
                <span className="text-base font-bold">
                  hey i am,
                </span>
                <h1 className="mb-6 text-4xl lg:text-5xl font-500">
                  aaryan kapoor.
                </h1>
                <p className="text-sm lg:text-base">
                  a creative marketing & brand enthusiast &
                  a self taught web developer specializing in php, js and css.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-auto lg:gap-6 text-sm lg:text-base flex justify-evenly lg:justify-start">
              <a href="https://www.linkedin.com/in/hiaaryan" target="_blank" rel="noreferrer" className="flex items-center text-gray-400 hover:text-black transition duration-150">
                <IconBrandLinkedin className="w-5 mr-1.5 mb-0.5" stroke={2} /> LinkedIn
              </a>
              <a href="https://github.com/hiaaryan" target="_blank" rel="noreferrer" className="flex items-center text-gray-400 hover:text-black transition duration-150">
                <IconBrandGithub className="w-4 mr-1.5 mb-0.5" stroke={2} /> GitHub
              </a>
              <a href={'/resume.pdf'} target="_blank" rel="noreferrer" className="flex items-center text-gray-400 hover:text-black transition duration-150">
                <IconArrowUpRight className="w-5 mr-1.5" stroke={2} /> Resume
              </a>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Home
