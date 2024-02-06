import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const BeepBeep: NextPage = () => {
	return (
		<>
			<Head>
				<title>aaryan kapoor // about</title>
				<meta name="description"
				content="🙋🏻‍♂️ hey there, i am aaryan. i am a brand strategist specializing in brand design &amp; experience."/>
			</Head>
			<div className="select-none font-mono">
				<Link href="/">
				    <img src="/arrow.svg" className="cursor-pointer z-10 text-white mix-blend-difference fixed top-0 left-0 m-4 h-6 lg:h-9 transform rotate-180" />
				</Link>
				<Link href="/">
				    <img src="/ak.svg" className="cursor-pointer z-10 text-white mix-blend-difference fixed top-0 right-0 m-4 h-6 lg:h-9" />
				</Link>
                <div className="p-4 flex flex-col gap-4 bg-white select-none font-mono lg:min-h-screen w-auto">
					<div className="relative w-full h-full">
						<video className="hidden lg:block w-full h-full object-center object-cover" autoPlay muted playsInline loop>
							<source src="/beep-beep/Frame 1.mp4" type="video/mp4" />
						</video>
						<img src="/beep-beep/Frame 1.png" className="block lg:hidden w-full h-full object-center object-cover" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 2.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 3.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 4.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 5.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 6.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 7.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 8.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 9.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<video className="hidden lg:block w-full h-full object-center object-cover" autoPlay muted playsInline loop>
							<source src="/beep-beep/Frame 10.mp4" type="video/mp4" />
						</video>
						<img src="/beep-beep/Frame 10.png" className="block lg:hidden w-full h-full object-center object-cover" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 11.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 12.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 13.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 14.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/beep-beep/Frame 15.png" className="w-full h-full" />
					</div>
				</div>
			</div>
		</>
	)
}

export default BeepBeep
