import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>aaryan kapoor // creative brand artisan</title>
				<meta name="description"
				content="🙋🏻‍♂️ hey there, i am aaryan. i am a creative brand artisan specializing in design &amp; experience." />
			</Head>
			<div className="select-none font-mono">
				<Link href="/about">
				    <img src="/ak.svg" className="!cursor-pointer z-10 text-white mix-blend-difference fixed top-0 left-0 m-4 h-6 lg:h-9" />
				</Link>
				<div className="bg-white select-none font-mono h-screen w-auto">
					<div className="relative flex justify-right items-end w-full h-full">
						<div>
							<video className="absolute top-0 right-0 h-full w-5/6 lg:4/6 xl:3/6 -mt-20 lg:-mt-10" autoPlay muted playsInline loop>
								<source src="/video.mp4" type="video/mp4" />
							</video>
						</div>
						<div className="absolute flex gap-8 bottom-0 right-0 p-4 lg:mr-3 bg-white text-black">
							<div className="text-sm lg:text-lg">
								<Link href="/#work" className="!cursor-pointer flex items-center">
									<img src="/arrow.svg" className="h-3 mr-2 mix-blend-difference" /> work
								</Link>
							</div>
							<div className="text-sm lg:text-lg">
								<Link href="/about" className="!cursor-pointer flex items-center">
									<img src="/arrow.svg" className="h-3 mr-2 mix-blend-difference" /> about
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div id="work" className="flex flex-col gap-4 p-4 bg-white select-none font-mono h-auto lg:min-h-screen w-auto">
					<Link href="/projects/athletico" className="!cursor-pointer relative w-full h-full hover:cursor-pointer">
						<img src="/athletico/Frame 8.png" className="w-full h-full object-center object-cover" />
					</Link>
					<Link href="/projects/beep-beep" className="!cursor-pointer relative w-full h-full hover:cursor-pointer">
						<img src="/beep-beep/Frame 12.png" className="w-full h-full object-center object-cover" />
					</Link>
					<Link href="/projects/flotek" className="!cursor-pointer relative w-full h-full hover:cursor-pointer">
						<img src="/flotek/Frame 3.png" className="w-full h-full object-center object-cover" />
					</Link>
					<Link href="/projects/tbim" className="!cursor-pointer relative w-full h-full hover:cursor-pointer">
						<img src="/tbim/Frame 4.png" className="w-full h-full object-center object-cover" />
					</Link>
				</div>
			</div>
		</>
	)
}

export default Home
