import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import Overview from './Overview';
import './Program.css'

const Program = ({ scrollY }) => {
    

    return (
        <div className='container' style={{ zIndex: scrollY > 5130 ? '1': ''}}>
            <Overview />
            <Gallery scrollY={scrollY} />
        </div>
    )
}

export default Program;