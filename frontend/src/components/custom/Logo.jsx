import React from 'react'
import LogoImage from '@/assets/Logo.jpg'; // Assuming you have a logo image

const Logo = () => {
    return (
        <div className="flex items-center">
            <img src={LogoImage} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
        </div>
    )
}

export default Logo