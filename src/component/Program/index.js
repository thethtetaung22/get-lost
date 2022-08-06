import React from 'react';
import Gallery from './Gallery';
import Overview from './Overview';

const Program = ({ scrollY }) => {
    return (
        <div style={{ width: '100%', height: 'calc(100vh + 85px)', position: 'relative'}}>
            <Overview scrollY={scrollY}/>
            <Gallery />
        </div>
    )
}

export default Program;