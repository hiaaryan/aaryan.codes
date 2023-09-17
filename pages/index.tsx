import { IconArrowDown, IconBrandGithub, IconBrandLinkedin, IconFile } from '@tabler/icons-react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>aaryan kapoor // creative brand strategist</title>
				<meta name="description"
				content="🙋🏻‍♂️ hey there, i am aaryan. i am a brand strategist specializing in brand design &amp; experience."/>
			</Head>
			<div className="select-none font-mono">
				<div className="w-full px-2 py-2 flex justify-center absolute top-10 !cursor-pointer">
					<div className="px-4 py-2 text-gray-300 hover:text-black hover:bg-gray-200 transition duration-300 rounded-full">
						Home
					</div>
					<div className="px-4 py-2 text-gray-300 hover:text-black hover:bg-gray-200 transition duration-300 rounded-full">
						About Me
					</div>
					<div className="px-4 py-2 text-gray-300 hover:text-black hover:bg-gray-200 transition duration-300 rounded-full">
						Contact
					</div>
				</div>
				<div id="home" className="h-screen flex items-center px-36">
					<div className="text-5xl max-w-5xl text-gray-300">
						Hello, I am <span className="text-black">Aaryan</span>. <br />I create wonderful brand experiences.
					</div>
					<div className="text-gray-300 absolute bottom-28 left-36">
						<a href="#about" className="flex !cursor-pointer transition duration-300 hover:text-black hover:-translate-y-1">
							<IconArrowDown className="mr-2" size={21}/>
							Scroll for more information
						</a>
					</div>
				</div>
				<div id="about" className="h-screen flex gap-12 px-36 py-28">
					<div className="h-full w-1/3 bg-gray-50 rounded-3xl">

					</div>
					<div className="flex flex-col gap-12 w-1/3">
						<div className="h-1/2 bg-gray-50 rounded-3xl w-full">

						</div>
						<div className="h-1/2 bg-gray-50 rounded-3xl w-full">

						</div>
					</div>
					<div className="h-full w-1/3 bg-gray-50 rounded-3xl">

					</div>
				</div>

				{/*<div className="h-full z-50">*/}
				{/*	<div className="w-full flex-col text-left">*/}
				{/*		<div className="py-6 text-base font-medium lg:text-lg text-gray-400">*/}
				{/*			<Image alt="aaryans picture" width={64} height={64} className="mb-10" src="/memoji.png" />*/}
				{/*			<p>hello! i am <span className="text-black">aaryan kapoor</span>.</p>*/}
				{/*			<div className="mt-6 lowercase lg:max-w-2xl">*/}
				{/*				<p>I am currently based in the UK pursuing my Masters in Marketing and Brand Management*/}
				{/*					from Nottingham Trent University.</p>*/}
				{/*				<p>I love to work on amazing brand experiences and strategies.</p>*/}
				{/*			</div>*/}
				{/*			<div className="mt-10 flex gap-4">*/}
				{/*				<a href="https://www.linkedin.com/in/hiaaryan" target="_blank" rel="noopener noreferrer"*/}
				{/*					 className="flex items-center bg-gray-400 hover:bg-black transition duration-400 text-white px-4 py-2 rounded-lg">*/}
				{/*					linkedin <IconArrowRight className="ml-2" size={21}/>*/}
				{/*				</a>*/}

				{/*				<a href="mailto:hi.aaryankapoor@gmail.com" target="_blank" rel="noopener noreferrer"*/}
				{/*					 className="flex items-center bg-gray-400 hover:bg-black transition duration-400 text-white px-4 py-2 rounded-lg">*/}
				{/*					email <IconArrowRight className="ml-2" size={21}/>*/}
				{/*				</a>*/}

				{/*				<a href="/resume.pdf" target="_blank" rel="noopener noreferrer"*/}
				{/*					 className="flex items-center bg-gray-400 hover:bg-black transition duration-400 text-white px-4 py-2 rounded-lg">*/}
				{/*					resume <IconArrowRight className="ml-2" size={21}/>*/}
				{/*				</a>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}

			</div>
		</>
	)
}

export default Home
