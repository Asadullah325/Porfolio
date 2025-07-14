import React from 'react'
import HeroImage from '@/assets/Hero.jpg'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";



const HeroSection = () => {
    return (
        <>
            <div className="min-h-[80vh] 
        bg-gradient-to-r from-[#e9b3d8] via-[#e0c8f2] to-[#f3e8ff] 
        dark:from-[#9B177E] dark:via-[#4a0040] dark:to-[#0a001f] 
        bg-300 animate-gradient-x text-gray-900 dark:text-white ">
                <div className="container mx-auto flex flex-col space-y-4 items-center md:flex-row justify-between h-full pt-30 pb-10 px-10 lg:px-20">
                    <div className="flex flex-col md:w-2/3 items-center space-y-4 md:items-start">
                        <h1 className="text-xl font-bold mb-4 text-center md:text-left">Welcome to My World ☪ </h1>
                        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Hi', I'm <span className="text-primary text-2xl">Muhammad Asadullah</span></h1>
                        <h1 className="text-6xl font-bold mb-4 text-center md:text-left text-[#9B177E] dark:text-[#0a001f]">WEB DEVELOPER</h1>
                        <p className="md:w-[80%] text-xl text-center md:text-left">
                            I create stunning and functional websites that elevate your online presence.
                            Let's build something amazing together!
                        </p>
                        <div className="flex space-x-2 mt-4">
                            <Link to="/projects" className="bg-primary text-white py-1 px-4 flex items-center rounded-md dark:text-black">View Projects</Link>
                            <Button className="" variant="outline">
                                Download CV
                            </Button>
                        </div>
                        <div className="flex space-x-4 mt-4 text-2xl">
                            <FaFacebook />
                            <FaLinkedinIn />
                            <FaGithub />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={HeroImage} alt="Hero" className="w-80 h-80 rounded-full object-cover animate-pulse" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection