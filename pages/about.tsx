import { IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>aaryan kapoor // about</title>
				<meta name="description"
				content="🙋🏻‍♂️ hey there, i am aaryan. i am a creative brand artisan specializing in design &amp; experience." />
			</Head>
			<div className="select-none font-mono">
				<Link href="/">
				    <img src="/arrow.svg" className="!cursor-pointer z-10 text-white mix-blend-difference fixed top-0 left-0 m-4 h-6 lg:h-9 transform rotate-180" />
				</Link>
				<Link href="/">
				    <img src="/ak.svg" className="!cursor-pointer z-10 text-white mix-blend-difference fixed top-0 right-0 m-4 h-6 lg:h-9" />
				</Link>
                <div className="flex flex-col lg:flex-row mt-14 lg:mt-0 gap-4 p-4 bg-white select-none font-mono h-screen w-auto">
					<div className="flex lg:items-end lg:justify-end lg:w-1/2 h-auto">
						<img src="/aaryan.jpeg" className="w-full h-auto object-center object-cover" />
					</div>
					<div className="flex flex-col lg:justify-end text-sm lg:text-base lg:w-1/2 h-full">
						<div className="text-justify mt-4">
							Hello there! I am Aaryan. Aaryan Kapoor. I am a and a creative brand 'artisan' and an adult fan of LEGO (AFOL). I always like to build and fiddle with things and that&#39;s what led me to the world of design.
							<br /><br />
							I strongly believe that design has the power to change everything. This is why I have a true passion for crafting emotive (& sometimes crazy) brand experiences that forge powerful connections with target audiences. 
							I leverage exceptional design skills across platforms like Adobe Illustrator, Photoshop, After Effects and Figma to develop visually compelling brand assets. 
							I pair this with strong technical expertise in frontend development using tools like CSS, TypeScript, JavaScript, and ReactJS.
							<br /><br />
							I love collaborating with risk taking brands and agencies to create unique and memorable brand experiences. 
							I am currently on the lookout for new internship opportunities to work with brands that are looking to make a difference in the world.
						</div>
						<div className="flex gap-4 mt-5 mb-8 lg:mb-0 font-medium">
							<Link href="https://www.linkedin.com/in/hiaaryan/" target='_blank' className="!cursor-pointer flex items-center">
								<IconBrandLinkedin size={30} stroke={2} className="-ml-1.5 mr-2" /> Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
