import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen font-mono p-4 lg:p-16">
      <Head>
        <title>aaryan kapoor // digital marketer &amp; developer</title>
        <meta name="description" content="🙋🏻‍♂️ hey there, i am aaryan. i am a developer, and a digital marketer specializing in brand design &amp; management." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="w-full h-full flex items-center">
          <div className="w-full">
            <div className="w-full">
              <div className="w-full mb-6 lg:flex items-center">
                <div className="w-full lg:w-auto flex lg:flex-none justify-center">
                  <img className="w-16 lg:w-20 lg:mr-6 text-center mb-6 lg:mb-0" src={'/image.png'} />
                </div>
                <h1 className="text-center lg:text-left text-gray-400 font-black text-4xl lg:text-5xl">
                  hello, <br />
                  i am <span className="text-black">aaryan</span>.
                </h1>
              </div>
            </div>

            <div className="w-full lg:w-auto lg:gap-6 text-sm lg:text-base lg:absolute lg:bottom-8 flex justify-evenly lg:justify-start">
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
