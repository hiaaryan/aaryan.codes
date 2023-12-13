import { IconBrandBehance, IconBrandDribbble, IconBrandGithub, IconBrandGithubCopilot, IconFidgetSpinner, IconPlayerPlay } from '@tabler/icons-react'
import { IconArrowDown, IconBrandLinkedin, IconColorFilter, IconFile, IconHeart } from '@tabler/icons-react'
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
				<div className="w-full absolute mt-10 md:mt-20 px-10 md:px-20">
					<div className="flex items-center justify-between">
						<div className="flex items-center !cursor-pointer text-black text-lg">
							<img src="/aaryan.jpeg" className="w-12 rounded-full mr-3" />
							<span className="font-bold">aaryan</span>.kapoor
						</div>
						<div className="invisible md:visible !cursor-pointer flex items-center gap-2 text-gray-300">
							<a href="https://www.linkedin.com/in/hiaaryan/" target="_blank" className="flex !cursor-pointer transition duration-300 hover:text-black hover:-translate-y-1">
								<IconBrandLinkedin className="mr-2" size={24}/>
							</a>
							<a href="https://www.behance.net/hiaaryan" className="flex !cursor-pointer transition duration-300 hover:text-black hover:-translate-y-1">
								<IconBrandBehance className="mr-2" size={21}/>
							</a>
							<a href="https://dribbble.com/hiaaryan" className="flex !cursor-pointer transition duration-300 hover:text-black hover:-translate-y-1">
								<IconBrandDribbble className="mr-2" size={21}/>
							</a>
							<a href="https://github.com/hiaaryan" className="flex !cursor-pointer transition duration-300 hover:text-black hover:-translate-y-1">
								<IconBrandGithub size={21}/>
							</a>
						</div>
					</div>
				</div>
				{/* <div className="w-full px-36 py-2 flex text-sm md:text-base justify-start absolute top-10">
					<div className="!cursor-pointer px-4 py-2 text-gray-300 hover:text-black hover:bg-gray-200 transition duration-300 rounded-full">
						Home
					</div>
					<div className="!cursor-pointer px-4 py-2 text-gray-300 hover:text-black hover:bg-gray-200 transition duration-300 rounded-full">
						About Me
					</div>
					<div className="!cursor-pointer px-4 py-2 text-gray-300 hover:text-black hover:bg-gray-200 transition duration-300 rounded-full">
						Blog
					</div>
				</div>
				<div className="hidden md:block absolute top-14 right-36">
					<a href="#" className="!cursor-pointer px-4 py-2 text-white hover:text-black hover:bg-gray-200 transition duration-300 rounded-full">
						Khufiya Kamra?
					</a>
				</div> */}
				<div id="home" className="h-screen px-10 md:px-20">
					<div className="h-full w-full flex items-center">
						<div className="w-full flex flex-col gap-8 md:gap-16">
							<div className="text-base font-medium md:font-normal md:text-7xl text-gray-300">
								Hello, I am <span className="text-black">Aaryan</span>. <br /> I bring brands to life, creatively.
							</div>
							<div className="w-full flex flex-col md:flex-row gap-8">
								<div className="w-full md:w-2/3">
									<video className="object-cover h-40 md:h-64 w-full rounded-3xl shadow-xl" autoPlay muted loop playsInline>
										<source src="/video[asset][2].mp4" type="video/mp4" />
									</video>	
								</div>
								<div className="w-full md:w-1/3">
									<video className="object-cover h-40 md:h-64 w-full rounded-3xl shadow-xl" autoPlay muted loop playsInline>
										<source src="/video[asset][1].mp4" type="video/mp4" />
									</video>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="h-full absolute bottom-8 right-8 mx-8">
						<div className="h-full flex items-end md:items-end">
							<div className="mt-8 md:mt-0 text-sm font-medium md:font-normal text-white text-right flex items-center">
								<IconPlayerPlay className="mr-2" size={21}/> Listening to U n I (Mere Dil Vich Hum Tum)
							</div>
						</div>
					</div> */}
				</div>
				{/* <div className="text-gray-300 text-sm md:text-base absolute bottom-10 md:bottom-20 left-10 md:left-20">
					<a href="#about" className="flex items-center !cursor-pointer transition duration-300 hover:text-black hover:-translate-y-1">
						<IconArrowDown className="mr-2 -mt-0.5" size={21}/>
						Scroll down for more information
					</a>
				</div>
				<div id="about" className="h-screen md:flex gap-12 px-36 py-28">
					<div className="h-full md:w-1/3 bg-gray-50 rounded-3xl">
						<video className="object-cover h-full w-full rounded-3xl" autoPlay muted loop playsInline>
							<source src="/video.mp4" type="video/mp4" />
						</video>
					</div>
					<div className="flex flex-col gap-12 w-1/3">
						<div className="hover:scale-[1.01] transition duration-300 relative h-1/2 bg-gray-50 rounded-3xl w-full p-12">
							<div className="absolute -top-5 text-3xl">
								🏠
							</div>
						</div>
						<div className="hover:scale-[1.01] transition duration-300 relative h-1/2 bg-gray-50 rounded-3xl w-full p-12">
							<div className="absolute -top-5 text-3xl">
								🥁
							</div>
						</div>
					</div>
					<div className="hover:scale-[1.01] transition duration-300 relative h-full w-1/3 bg-gray-50 rounded-3xl p-12">
						<div className="absolute -top-5 text-3xl">
							🏢
						</div>
					</div>
				</div> */}

				{/* <div className="h-full z-50">*/}
				{/*	<div className="w-full flex-col text-left">*/}
				{/*		<div className="py-6 text-base font-medium md:text-lg text-gray-400">*/}
				{/*			<Image alt="aaryans picture" width={64} height={64} className="mb-10" src="/memoji.png" />*/}
				{/*			<p>hello! i am <span className="text-black">aaryan kapoor</span>.</p>*/}
				{/*			<div className="mt-6 lowercase md:max-w-2xl">*/}
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
				{/*</div> */}

			</div>
		</>
	)
}

export default Home
