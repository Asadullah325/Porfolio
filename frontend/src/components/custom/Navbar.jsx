import { toggleTheme } from '@/store/themestore';
import { MoonIcon, SunIcon } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../ui/button';

const Navbar = () => {

    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();


    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    PortFolio
                </h1>
                <Button
                    onClick={() => dispatch(toggleTheme())}
                    aria-label="Toggle dark mode"
                    className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#e0c8f2] to-[#e9b3d8] text-gray-900 dark:from-[#4a0040] dark:to-[#9B177E] dark:text-white transition-all duration-300 ease-in-out hover:opacity-90"
                >
                    {theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                </Button>
            </div>
        </>
    )
}

export default Navbar