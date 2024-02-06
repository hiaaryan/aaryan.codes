import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const TBIM: NextPage = () => {
	return (
		<>
			<Head>
				<title>aaryan kapoor // about</title>
				<meta name="description"
				content="🙋🏻‍♂️ hey there, i am aaryan. i am a brand strategist specializing in brand design &amp; experience."/>
			</Head>
			<div className="select-none font-mono">
				<Link href="/">
				    <img src="/arrow.svg" className="cursor-pointer z-10 text-white mix-blend-difference fixed top-0 left-0 m-10 h-9 transform rotate-180 ml-12" />
				</Link>
                <div className="p-2 lg:p-36 flex flex-col gap-2 bg-black select-none font-mono lg:min-h-screen w-auto">
					<div className="relative w-full h-full">
                        <video className="w-full h-full" autoPlay playsInline loop muted>
							<source src="/tbim/Frame 1.mp4" type="video/mp4" />
						</video>
					</div>
					<div className="relative w-full h-full">
                        <video className="w-full h-full" autoPlay playsInline loop muted>
							<source src="/tbim/Frame 2.mp4" type="video/mp4" />
						</video>
					</div>
					<div className="relative w-full h-full">
						<img src="/tbim/Frame 3.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/tbim/Frame 4.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/tbim/Frame 5.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/tbim/Frame 6.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/tbim/Frame 7.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/tbim/Frame 8.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/tbim/Frame 9.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
                        <img src="/tbim/Frame 10.png" className="w-full h-full" />
					</div>
				</div>
			</div>
		</>
	)
}

export default TBIM
