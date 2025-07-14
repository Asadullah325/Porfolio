import React from 'react'
import AboutMeImage from '@/assets/About.jpg'
import { FaCss3, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const AboutMe = () => {
    return (
        <div className="min-h-[70vh] 
            bg-[#dbb5cf] dark:bg-[#3e013a] 
            bg-300 animate-gradient-x 
            text-gray-900 dark:text-white
        ">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full py-10 px-4 lg:px-16 space-y-4 md:space-y-0 md:space-x-6">

                {/* Image Section */}
                <div className="flex flex-col md:w-1/3 items-center justify-center space-y-4 md:items-start">
                    <img
                        src={AboutMeImage}
                        alt="About Me"
                        className="
                            w-80 h-80 rounded-full object-cover animate-pulse
                            shadow-[0_0_40px_rgba(219,181,207,0.6)] 
                            dark:shadow-[0_0_40px_rgba(155,23,126,0.7)]
                            hover:shadow-[0_0_60px_rgba(219,181,207,0.8)] 
                            dark:hover:shadow-[0_0_60px_rgba(255,105,180,0.9)]
                            transition-shadow duration-500
                        "
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1">
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-3xl font-bold text-center md:text-left">About Me</h2>

                        <p className="text-lg">
                            I am a passionate web developer with a love for creating beautiful and functional websites.
                            My journey in web development started with a curiosity to understand how the web works,
                            and it has since evolved into a full-fledged career.
                        </p>

                        <p className="text-lg">
                            I specialize in front-end development, crafting responsive and user-friendly interfaces.
                            My goal is to bring your ideas to life through code and design.
                        </p>

                        <p className="text-lg">
                            I am constantly learning and adapting to new technologies, and I thrive in collaborative environments where I can contribute my skills and learn from others.
                        </p>

                        <div className="flex flex-col space-y-2">
                            <h3 className="text-xl font-semibold mb-4">Skills</h3>
                            <ul className="list-disc flex flex-wrap gap-4 ml-4">
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-3 py-1 rounded-md">
                                    <FaHtml5 className="text-[#E34F26] mr-2 text-xl" />
                                    HTML5
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-3 py-1 rounded-md">
                                    <FaCss3 className="text-[#1572B6] mr-2 text-xl" />
                                    CSS3
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-3 py-1 rounded-md">
                                    <FaJs className="text-[#F7DF1E] mr-2 text-xl" />
                                    JavaScript
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-3 py-1 rounded-md">
                                    <FaReact className="text-[#61DAFB] mr-2 text-xl" />
                                    React
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-3 py-1 rounded-md">
                                    <FaNodeJs className="text-[#339933] mr-2 text-xl" />
                                    Node.js
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-3 py-1 rounded-md">
                                    <SiExpress className="text-[#000000] mr-2 text-xl" />
                                    Express.js
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-3 py-1 rounded-md">
                                    <SiMongodb className="text-[#47A248] mr-2 text-xl" />
                                    MongoDB
                                </li>
                                <li className="flex items-center bg-black dark:bg-[#3e013a] text-white px-3 py-1 rounded-md">
                                    <FaGithub className="text-[#181717] bg-white rounded-full mr-2 text-xl" />
                                    Git & GitHub
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
