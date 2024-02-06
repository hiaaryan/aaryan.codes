import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>aaryan kapoor // creative brand strategist</title>
				<meta name="description"
				content="🙋🏻‍♂️ hey there, i am aaryan. i am a brand strategist specializing in brand design &amp; experience."/>
			</Head>
			<div className="select-none font-mono">
				<Link href="/about">
				    <img src="/ak.svg" className="cursor-pointer z-10 text-white mix-blend-difference fixed top-0 left-0 m-10 h-9" />
				</Link>
				<div className="bg-black select-none font-mono h-screen w-auto">
					<div className="relative w-full h-full">
						<div className="absolute flex gap-8 bottom-0 right-0 p-10 text-white">
							<div className="text-lg lg:text-xl">
								<Link href="/#work" className="flex items-center">
									<img src="/arrow.svg" className="h-4 mr-2 mix-blend-difference" /> work
								</Link>
							</div>
							<div className="text-lg lg:text-xl">
								<Link href="/about" className="flex items-center">
									<img src="/arrow.svg" className="h-4 mr-2 mix-blend-difference" /> contact
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div id="work" className="p-2 lg:p-36 bg-black select-none font-mono h-auto lg:h-screen w-auto">
					<Link href="/projects/athletico" className="relative w-full h-full hover:cursor-pointer">
						<img src="/athletico/Frame 1.png" className="w-full h-full object-center object-cover" />
					</Link>
					<div className="flex items-center gap-6 mt-5 text-white text-lg lg:text-2xl font-bold">
						<div className="bg-white text-black p-2 text-xs max-w-fit">
							Concept
						</div>
						<div>
							<img src="/arrow.svg" className="h-5" />
						</div>
						<div>
							athletico.
						</div>
					</div>
				</div>
				<div className="p-2 lg:p-36 bg-black select-none font-mono h-auto lg:h-screen w-auto">
					<Link href="/projects/beep-beep" className="relative w-full h-full hover:cursor-pointer">
						<video className="w-full h-full object-center object-cover" autoPlay playsInline loop muted>
							<source src="/beep-beep/Frame 1.mp4" type="video/mp4" />
						</video>
					</Link>
					<div className="flex items-center gap-6 mt-5 text-white text-lg lg:text-2xl font-bold">
						<div className="bg-white text-black p-2 text-xs max-w-fit">
							Client
						</div>
						<div>
							<img src="/arrow.svg" className="h-5" />
						</div>
						<div>
							Beep Beep
						</div>
					</div>
				</div>
				<div className="p-2 lg:p-36 bg-black select-none font-mono h-auto lg:h-screen w-auto">
					<Link href="/projects/flotek" className="relative w-full h-full hover:cursor-pointer">
						<img src="/flotek/Frame 1.png" className="w-full h-full object-center object-cover" />
					</Link>
					<div className="flex items-center gap-6 mt-5 text-white text-lg lg:text-2xl font-bold">
						<div className="bg-white text-black p-2 text-xs max-w-fit">
							Client
						</div>
						<div>
							<img src="/arrow.svg" className="h-5" />
						</div>
						<div>
							FLOTEK
						</div>
					</div>
				</div>
				<div className="p-2 lg:p-36 bg-black select-none font-mono h-auto lg:h-screen w-auto">
					<Link href="/projects/tbim" className="relative w-full h-full hover:cursor-pointer">
						<img src="/tbim/Frame 4.png" className="w-full h-full object-center object-cover" />
					</Link>
					<div className="flex items-center gap-6 mt-5 text-white text-lg lg:text-2xl font-bold">
						<div className="bg-white text-black p-2 text-xs max-w-fit">
							Personal
						</div>
						<div>
							<img src="/arrow.svg" className="h-5" />
						</div>
						<div>
							The Best in the Making
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
