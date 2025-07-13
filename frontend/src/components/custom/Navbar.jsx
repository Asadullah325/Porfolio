import React from 'react'
import ThemeSwither from './ThemeSwither';
import Logo from './Logo';
import NavItems from './NavItems';

const Navbar = () => {

    return (
        <>
            <div className="absolute top-2 left-0 right-0 w-[95%] mx-auto flex items-center justify-between p-2 px-4 bg-gradient-to-r from-[#e0c8f2] to-[#e9b3d8] 
        dark:from-[#4a0040] dark:to-[#9B177E] 
        bg-300 animate-gradient-x text-gray-900 dark:text-white rounded-full shadow-lg">
                <Logo />
                <NavItems />
                <ThemeSwither />
            </div>
        </>
    )
}

export default Navbar