import React, { useEffect, useRef } from 'react'
import AboutMeImage from '@/assets/About.jpg'
import { FaCss3, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const AboutMe = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const handleScroll = () => {
            if (!section) return;
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('animate-fade-in-up');
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check in case already in view
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={sectionRef}
            className="min-h-[70vh] 
                bg-[#dbb5cf] dark:bg-[#3e013a] 
                bg-300 animate-gradient-x 
                text-gray-900 dark:text-white
                border-t border-gray-700 dark:border-gray-600
                transition-colors duration-500
                opacity-0
            "
        >
            <div className="container mx-auto flex flex-col-reverse space-y-8 md:space-y-0 md:flex-row items-center justify-between h-full py-10 px-4 lg:px-16">
                {/* Image Section */}
                <div className="flex flex-col items-center justify-center space-y-4 md:items-start w-full md:w-1/3 m-0">
                    <img
                        src={AboutMeImage}
                        alt="About Me"
                        className="
                            w-64 h-64 md:w-80 md:h-80 rounded-full object-cover
                            shadow-[0_0_40px_rgba(219,181,207,0.6)] 
                            dark:shadow-[0_0_40px_rgba(155,23,126,0.7)]
                            hover:shadow-[0_0_60px_rgba(219,181,207,0.8)] 
                            dark:hover:shadow-[0_0_60px_rgba(255,105,180,0.9)]
                            transition-shadow duration-500 cursor-pointer
                        "
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-2/3 mb-10 md:mb-0">
                    <div className="flex flex-col space-y-4 w-full">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">About Me</h2>

                        <p className="text-base sm:text-lg text-center md:text-left">
                            I am a passionate web developer with a love for creating beautiful and functional websites.
                            My journey in web development started with a curiosity to understand how the web works,
                            and it has since evolved into a full-fledged career.
                        </p>

                        <p className="text-base sm:text-lg text-center md:text-left">
                            I specialize in front-end development, crafting responsive and user-friendly interfaces.
                            My goal is to bring your ideas to life through code and design.
                        </p>

                        <p className="text-base sm:text-lg text-center md:text-left">
                            I am constantly learning and adapting to new technologies, and I thrive in collaborative environments where I can contribute my skills and learn from others.
                        </p>

                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-center md:text-left">Skills</h3>
                            <ul className="list-disc flex flex-wrap gap-2 sm:gap-4 ml-4 justify-center md:justify-start">
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base">
                                    <FaHtml5 className="text-[#E34F26] mr-2 text-lg sm:text-xl" />
                                    HTML5
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base">
                                    <FaCss3 className="text-[#1572B6] mr-2 text-lg sm:text-xl" />
                                    CSS3
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base">
                                    <FaJs className="text-[#F7DF1E] mr-2 text-lg sm:text-xl" />
                                    JavaScript
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base">
                                    <FaReact className="text-[#61DAFB] mr-2 text-lg sm:text-xl" />
                                    React
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base">
                                    <FaNodeJs className="text-[#339933] mr-2 text-lg sm:text-xl" />
                                    Node.js
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base">
                                    <SiExpress className="text-[#000000] mr-2 text-lg sm:text-xl" />
                                    Express.js
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base">
                                    <SiMongodb className="text-[#47A248] mr-2 text-lg sm:text-xl" />
                                    MongoDB
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base">
                                    <FaGithub className="text-[#181717] bg-white rounded-full mr-2 text-lg sm:text-xl" />
                                    Git & GitHub
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tailwind CSS for fade-in-up animation */}
            <style>
                {`
                .animate-fade-in-up {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                    transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
                }
                `}
            </style>
        </div>
    )
}

export default AboutMe
