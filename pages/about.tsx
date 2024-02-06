import type { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>aaryan kapoor // about</title>
				<meta name="description"
				content="🙋🏻‍♂️ hey there, i am aaryan. i am a brand strategist specializing in brand design &amp; experience."/>
			</Head>
			<div className="select-none font-mono">
                <a href="/">
				    <img src="/ak.svg" className="cursor-pointer z-10 text-white mix-blend-difference fixed top-0 left-0 m-10 h-9" />
				</a>
                <div className="relative lg:flex px-10 lg:p-36 bg-white select-none font-mono items-center justify-center lg:h-screen w-auto">
					<div className="relative lg:w-1/2 h-full">
						<img src="/aaryan.jpeg" className="w-full h-full object-center object-cover" />
					</div>
                    <div className="relative lg:w-1/2 h-full">
						<img src="/aaryan.jpeg" className="w-full h-full object-center object-cover" />
					</div>
					<div className="absolute flex gap-8 bottom-0 right-0 p-10 text-black">
						<div className="text-lg lg:text-xl">
							<a href="/#work" className="flex items-center">
								<img src="/arrow.svg" className="h-4 mr-2 mix-blend-difference" /> work
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
