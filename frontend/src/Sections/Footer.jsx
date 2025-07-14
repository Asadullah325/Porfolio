import React, { useEffect, useRef } from 'react'

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const footer = footerRef.current;
        const handleScroll = () => {
            if (!footer) return;
            const rect = footer.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                footer.classList.add('animate-fade-in-up');
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check in case already in view
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer
            ref={footerRef}
            className="
                bg-[#dbb5cf] dark:bg-[#3e013a]
                text-gray-900 dark:text-white
                text-center
                py-6
                border-t border-gray-700 dark:border-gray-600
                transition-colors duration-500
                opacity-0
            "
        >
            <div>
                &copy; {new Date().getFullYear()} Asad Coder. All rights reserved.
            </div>
            <div className="mt-2">
                <a
                    href="https://porfolio-asad-coder.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9b177e] dark:text-[#ff69b4] hover:underline transition-colors duration-300"
                >
                    Live Portfolio
                </a>
                {' | '}
                <a
                    href="mailto:asad.coder@example.com"
                    className="text-[#9b177e] dark:text-[#ff69b4] hover:underline transition-colors duration-300"
                >
                    Contact
                </a>
            </div>
            <style>
                {`
                .animate-fade-in-up {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                    transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
                }
                `}
            </style>
        </footer>
    )
}

export default Footer