import Card from '@/components/custom/Card';
import React, { useEffect, useRef } from 'react'

const Services = () => {
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
            className="min-h-[60vh] 
                bg-gradient-to-r from-[#e9b3d8] via-[#e0c8f2] to-[#f3e8ff] 
                dark:from-[#9B177E] dark:via-[#4a0040] dark:to-[#0a001f] 
                bg-300 animate-gradient-x 
                text-gray-900 dark:text-white
                transition-colors duration-500
                opacity-0
      "
        >
            <div className='container mx-auto px-4 py-10 flex flex-col items-center justify-center text-center'>
                <div className='max-w-2xl'>
                    <h2 className='text-3xl font-bold mb-4'>My Services</h2>
                    <p className='text-lg mb-6'>
                        I offer a range of services to help you achieve your digital goals.
                    </p>
                </div>
                <div>
                    <Card />
                </div>
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
        </div>
    )
}

export default Services