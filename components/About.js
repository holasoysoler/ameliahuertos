import React from "react"
import Image from "next/image"
import profile from "../public/profile.png"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-800 lg:text-6xl dark:text-white">
                        Hola,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        Soy Amelia, graduada en Marketing e investigación de mercados, 
                        con master en gestión cultural y apasionada por la cultura. En los últimos años
                        me he especializado en gestión de proyectos europeos. Creo que los negocios 
                        y proyectos locales son el corazón de una región, por eso quiero ayudar a todas las personas emprendedoras 
                        a destacar y tener una mayor visibilidad, 
                        facilitando soluciones. 
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;