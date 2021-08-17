import { IconBrandLinkedin, IconArrowUpRight, IconBrandGithub } from '@tabler/icons'
import React from 'react'
import SEO from '../layouts/seo'

function Lost() {

    return (

            <>

            <SEO title='Aaryan Kapoor' />

                <div className="h-screen flex flex-col justify-center lg:items-center overflow-hidden">
                    <img className="w-24 lg:w-40 rounded-full" src="/avatar.png" alt="avatar" />

                    <h3 className="mt-8 w-full text-black lg:text-4xl text-2xl lg:text-center">
                        Hi, I am Aaryan.
                    </h3>

                    <p className="lg:max-w-full max-w-xl mt-6 text-gray-400 lg:text-lg text-sm">
                        I am a student from Gurugram, India,
                        studying <span className="text-black">business administration </span>
                        in <span className="text-black">JK Business School</span>.<br className="lg:flex hidden" /> I love to
                        <span className="text-black"> manage and market brands</span>. Just for some more thrill, I code in <span className="text-black">php & js</span> as a hobby.
                    </p>

                    <div className="grid lg:grid-flow-col grid-flow-row lg:gap-4 gap-1 mt-8 lg:text-base text-sm">
                        <a className="inline-flex items-center hover:text-gray-400 transform duration-200 focus:outline-none" rel="noreferrer" href="https://linkedin.com/in/hiaaryan" target="_blank">
                            LinkedIn <IconBrandLinkedin className="ml-1" size={24} />
                        </a>
                        <a className="inline-flex items-center hover:text-gray-400 transform duration-200 focus:outline-none" rel="noreferrer" href="/resume.pdf" target="_blank">
                            Resume <IconArrowUpRight className="ml-1" size={24} />
                        </a>
                        <a className="inline-flex items-center hover:text-gray-400 transform duration-200 focus:outline-none" rel="noreferrer" href="/resume.pdf" target="_blank">
                            GitHub <IconBrandGithub className="ml-1.5 mb-0.5" size={21} />
                        </a>
                    </div>
                </div>

            </>

    )
}

export default Lost