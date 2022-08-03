import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen font-mono p-8 lg:p-16">
      <Head>
        <title>aaryan kapoor // digital marketer &amp; developer</title>
        <meta name="description" content="🙋🏻‍♂️ hey there, i am aaryan. i am a developer, and a digital marketer specializing in brand design &amp; management." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="w-full h-full flex items-center">
          <div>
            <div>
              <div className="mb-6 lg:flex items-center">
                <img className="w-14 lg:w-20 mr-6" src={'/image.png'} />
                <h1 className="mt-6 lg:mt-0 text-gray-400 font-black text-3xl lg:text-5xl">
                  hello, <br />
                  i am <span className="text-black">aaryan</span>.
                </h1>
              </div>
              
              <p className="text-xs lg:text-base">👨🏻‍💼 i am a digital marketer specializing in brand design and management. <div className="mt-2 lg:mt-0" /> 
              👨🏻‍💻 i also develop webapps & native apps with php, js & tailwind.</p>
            </div>

            <div className="text-xs lg:text-base absolute bottom-8 lg:bottom-16 flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/hiaaryan" target="_blank" className="flex items-center text-gray-400 hover:text-black transition duration-150">
                <IconBrandLinkedin className="w-6 mr-1.5 mb-0.5" stroke={2} /> LinkedIn
              </a>
              <a href="https://github.com/hiaaryan" target="_blank" className="flex items-center text-gray-400 hover:text-black transition duration-150">
                <IconBrandGithub className="w-5 mr-1.5 mb-0.5" stroke={2} /> GitHub
              </a>
              <a href={'/resume.pdf'} target="_blank" className="flex items-center text-gray-400 hover:text-black transition duration-150">
                <IconArrowUpRight className="w-6 mr-1.5" stroke={2} /> Resume
              </a>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Home
