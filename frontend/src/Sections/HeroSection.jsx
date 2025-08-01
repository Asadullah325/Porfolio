import React from "react";
import HeroImage from "@/assets/Hero.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import WordAnimate from "@/components/custom/WordAnimate";

const HeroSection = () => {
    return (
        <>
            <div
                className="min-h-[100vh] 
                bg-gradient-to-r from-[#e9b3d8] via-[#e0c8f2] to-[#f3e8ff] 
                dark:from-[#9B177E] dark:via-[#4a0040] dark:to-[#0a001f] 
                bg-300 animate-gradient-x 
                text-gray-900 dark:text-white
                transition-colors duration-500
            "
            >
                <div className="container mx-auto flex flex-col space-y-4 items-center md:flex-row justify-between h-full pt-40 pb-10 px-4 lg:px-16">
                    <div className="flex flex-col md:w-2/3 items-center space-y-4 md:items-start">
                        <h1 className="text-xl font-bold mb-4 text-center md:text-left">
                            Welcome to My World ☪
                        </h1>
                        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
                            Hi', I'm{" "}
                            <span className="text-primary text-2xl">Muhammad Asadullah</span>
                        </h1>
                        <WordAnimate />
                        <p className="md:w-[80%] text-xl text-center md:text-left">
                            I create stunning and functional websites that elevate your online
                            presence. Let's build something amazing together!
                        </p>
                        <div className="flex space-x-2 mt-4">
                            <Link
                                to="/projects"
                                className="bg-primary text-white py-1 px-4 flex items-center rounded-md dark:text-black"
                            >
                                View Projects
                            </Link>
                            <Button variant="outline">Download CV</Button>
                        </div>
                        <div className="flex space-x-4 mt-4 text-2xl">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <img
                            src={HeroImage}
                            alt="Hero"
                            className="
                                w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover
                                shadow-[0_0_40px_rgba(219,181,207,0.6)] 
                                dark:shadow-[0_0_40px_rgba(155,23,126,0.7)]
                                hover:shadow-[0_0_60px_rgba(219,181,207,0.8)]
                                dark:hover:shadow-[0_0_60px_rgba(255,105,180,0.9)]
                                transition-shadow duration-500 cursor-pointer
                            "
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
