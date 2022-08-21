import React, { useEffect } from 'react';
import './Gallery.css';
import HeroSection from './heroSection';

const Gallery = ({ scrollY }) => {

    return (
        <div 
            className={'container'} 
            style={{
                top: scrollY > 940 && scrollY < 4030 ? '0px': '330vh', 
                position: scrollY > 940 && scrollY < 4030 ? 'fixed': 'relative'
            }}>
            <HeroSection isInView={scrollY > 940} />
            <div className='inside-container'>
                <div className='video-wrapper'>
                    <div className='youtube-4 w-embed-youtubevideo'>
                        <iframe className='iframe-video' src="https://www.youtube.com/embed/h0a275RpEh8?rel=0&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;start=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="[4K] Sydney Like You Never Seen Before | Cinematic Travel Film"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery