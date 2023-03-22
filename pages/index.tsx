import { IconArrowRight, IconAt, IconBrandLinkedin, IconFileExport } from '@tabler/icons-react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="font-sans h-screen w-screen flex items-center">
      <Head>
        <title>aaryan kapoor // creative brand strategist</title>
        <meta name="description" content="🙋🏻‍♂️ hey there, i am aaryan. i am a brand strategist specializing in brand design &amp; experience." />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>


      <main className="font-mono flex p-8 lg:p-16 select-none">
          <div className="h-full z-50">
            <div className="w-full flex-col text-left">
              <div className="py-6 text-base font-medium lg:text-lg text-gray-400">
                <img className="w-20 mb-10" src="/memoji.png" />
                hello! i am <span className="text-black">aaryan kapoor</span>.
                <p className="mt-6 lowercase lg:max-w-2xl">
                  I am currently based in the UK persuing my <br className="hidden lg:block" /> Masters in Marketing and Brand Management
                  from <br className="hidden lg:block" /> Nottingham Trent University. <br className="hidden lg:block" /><br className="hidden lg:block" />

                  I love to work on amazing brand experiences and strategies. <br />
                </p>
                <div className="mt-10 flex gap-4">
                  <a href="https://www.linkedin.com/in/hiaaryan" target="_blank" className="flex items-center bg-gray-400 hover:bg-black transition duration-400 text-white px-4 py-2 rounded-lg">
                    linkedin <IconArrowRight className="ml-2" size={21} />
                  </a>

                  <a href="mailto:hi.aaryankapoor@gmail.com" target="_blank" className="flex items-center bg-gray-400 hover:bg-black transition duration-400 text-white px-4 py-2 rounded-lg">
                    email <IconArrowRight className="ml-2" size={21} />
                  </a>

                  <a href="/resume.pdf" target="_blank" className="flex items-center bg-gray-400 hover:bg-black transition duration-400 text-white px-4 py-2 rounded-lg">
                    resume <IconArrowRight className="ml-2" size={21} />
                  </a>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Home
