import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItems = () => {
    return (
        <>
            <nav className="flex space-x-8">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-gray-900 dark:text-white text-xl tracking-wider hover:text-gray-700 dark:hover:text-gray-400 
                    ${isActive ? 'font-bold' : ''}`
                    }>
                    Home
                </NavLink>
                <NavLink

                    to="/projects"
                    className={({ isActive }) =>
                        `text-gray-900 dark:text-white text-xl tracking-wider hover:text-gray-700 dark:hover:text-gray-400 
                ${isActive ? 'font-bold' : ''}`
                    }>
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `text-gray-900 dark:text-white text-xl tracking-wider hover:text-gray-700 dark:hover:text-gray-400 
                ${isActive ? 'font-bold' : ''}`
                    }>
                    Contact
                </NavLink>
            </nav>
        </>
    )
}

export default NavItems