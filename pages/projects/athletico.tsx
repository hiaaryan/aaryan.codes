import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const athletico: NextPage = () => {
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
                        <img src="/athletico/Frame 1.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 2.png" className="w-full h-full" />
					</div>
                    <div className="relative w-full h-full">
						<img src="/athletico/Moodboard.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 3.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 4.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 5.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 6.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 7.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 8.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 9.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
                        <img src="/athletico/Frame 10.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 11.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 12.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 13.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 14.png" className="w-full h-full" />
					</div>
					<div className="relative w-full h-full">
						<img src="/athletico/Frame 15.png" className="w-full h-full" />
					</div>
				</div>
			</div>
		</>
	)
}

export default athletico
