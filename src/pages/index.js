import React from 'react'
import SEO from '../layouts/seo'

function Index() {

    return (

            <>

            <SEO title='Aaryan Kapoor // php & js Developer' />

                <div className="max-w-lg">
                    <img className="w-24 mb-4" src={'/favicon-trimmed.png'} />
                    <h3 className="font-bold text-2xl">hello, i am aaryan.</h3>

                    <p className="text-gray-400 text-xs lg:text-sm mt-4">
                        i am from gurugram, india. a self taught web developer.
                        i created an enterprise resource planner at the age of 17, using laravel & tailwind.
                        i have been working on several freelance projects since, started two enterprises, knowed & foxsys-xyz which are in development.
                    </p>

                    <p className="text-gray-400 text-xs lg:text-sm mt-4">
                        i am also a business student, doing my bachelors in business administration.
                    </p>

                    <div className="mt-6 text-sm text-gray-400">
                        <a className="inline-flex items-center" rel="noreferrer" href="https://github.com/myselfaaryan" target="_blank">
                            <i className="fab fa-github mr-3"></i>
                        </a>
                        <a className="md:ml-3 inline-flex items-center" rel="noreferrer" href="https://instagram.com/myselfaaryan/" target="_blank">
                            <i className="fab fa-instagram mr-3"></i>
                        </a>
                        <a className="md:ml-3 inline-flex items-center" rel="noreferrer" href="https://twitter.com/myselfaaryan/" target="_blank">
                            <i className="fab fa-twitter mr-3"></i>
                        </a>
                        <a className="md:ml-3 inline-flex items-center" rel="noreferrer" href="mailto:myself.aaryankapoor@gmail.com" target="_blank">
                            <i className="fas fa-at mr-3"></i>
                        </a>
                    </div>

                    <p className="mt-6 inline-flex items-center text-sm lg:text-base">
                        <i className="mr-3 fab fa-js-square fa-2x text-yellow-500"></i> :: <i className="ml-3 mr-6 fab fa-react fa-2x text-blue-500"></i> ||
                        
                        <i className="ml-6 mr-3 fab fa-php fa-2x text-blue-500"></i> :: <i className="ml-3 fab fa-laravel fa-2x text-red-400"></i>
                    </p>

                    <p className="flex top-0 mt-6 text-red-600 text-xs lg:text-sm">
                        ✖ 1 problem (1 error, 0 warnings).
                    </p>

                    <p className="flex top-0 mt-6 text-gray-400 text-xs lg:text-sm">
                        Yea, just ignore that. I deal with it every minute. I have a thing with semicolons and tags.
                    </p>
                </div>

            </>

    )
}

export default Index