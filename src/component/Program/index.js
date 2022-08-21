import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import Overview from './Overview';
import './Program.css'

const Program = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => setScrollY(window.pageYOffset);

    useEffect(()=> {
        console.log(scrollY);
    }, [scrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='container' style={{ zIndex: scrollY > 5130 ? '1': ''}}>
            <Overview />
            <Gallery scrollY={scrollY} />
        </div>
    )
}

export default Program;