import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const About: NextPage = () => {
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
                <div className="flex flex-col gap-4 p-4 bg-white select-none font-mono h-auto lg:min-h-screen w-auto">
					<div className="relative lg:w-1/2 h-full">
						<img src="/aaryan.jpeg" className="w-full h-full object-center object-cover" />
					</div>
                    <div className="relative lg:w-1/2 h-full">
						<img src="/aaryan.jpeg" className="w-full h-full object-center object-cover" />
					</div>
				</div>
			</div>
		</>
	)
}

export default About
