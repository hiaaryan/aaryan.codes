import React from 'react'
import SEO from '../layouts/seo'

function Index() {

    return (

            <>

            <SEO title='Aaryan Kapoor // php & js Developer' />

            <div className="antialiased font-mono text-gray-900 p-12">
        
                <div className="font-mono">
                    <h3 className="font-bold text-2xl">hello, i am aaryan.</h3>
                    <span className="text-indigo-400 text-sm lg:text-base">i am from gurugram, india. a self taught web developer.</span>

                    <div className="mt-6 text-sm text-gray-700">
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

                    <p className="mt-6 inline-flex items-center">
                        <i className="mr-3 fab fa-js-square fa-2x text-yellow-500"></i> :: <i className="ml-3 mr-6 fab fa-react fa-2x text-blue-500"></i> ||
                        
                        <i className="ml-6 mr-3 fab fa-php fa-2x text-indigo-500"></i> :: <i className="ml-3 fab fa-laravel fa-2x text-red-400"></i>
                    </p>
                </div>
            
            </div>

            </>

    )
}

export default Index