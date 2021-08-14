import { IconBrandLinkedin } from '@tabler/icons'
import React from 'react'
import SEO from '../layouts/seo'

function Index() {

    return (

            <>

            <SEO title='Aaryan Kapoor' />

                <div className="h-screen flex flex-col justify-center lg:items-center">
                    <img className="w-24 lg:w-40 rounded-full" src="/avatar.png" alt="avatar" />

                    <h3 className="mt-8 w-full text-black text-4xl lg:text-center">
                        Hi, I am Aaryan.
                    </h3>

                    <p className="mt-6 text-gray-400 lg:text-lg text-sm">
                        I am a student from Gurugram, India,
                        studying <span className="text-black">business administration </span>
                        in <span className="text-black">JK Business School</span>.<br /> I love to
                        <span className="text-black"> manage and market brands</span>. Just for some more thrill, I code in <span className="text-black">php & js</span> as a hobby.
                    </p>

                    <div className="grid grid-flow-col gap-4 mt-8">
                        <a className="inline-flex items-center hover:text-gray-400 transform duration-200 focus:outline-none" rel="noreferrer" href="https://linkedin.com/in/hiaaryan" target="_blank">
                            <IconBrandLinkedin size={24} />
                        </a>
                    </div>
                </div>

            </>

    )
}

export default Index