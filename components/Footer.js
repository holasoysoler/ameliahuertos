import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>ameliahuertos@gmail.com</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        
                        <a
                            href="https://www.instagram.com/ameliahuertos/"
                            className={"transition-colors hover:text-green-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                        
                        <a
                            href="https://www.linkedin.com/in/amelia-h-550b4a12a/"
                            className={"transition-colors hover:text-green-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://estudio-lahoguera.es/"
                            className={"transition-colors hover:text-green-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LaHoguera
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;