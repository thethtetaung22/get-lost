import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import HeroSection from './Gallery/heroSection';
import Overview from './Overview';
import './Program.css'

const Program = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => setScrollY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='container'>
            <Overview />
            <Gallery scrollY={scrollY} />
        </div>
    )
}

export default Program;