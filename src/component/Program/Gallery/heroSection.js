import React, { useEffect } from 'react';
// 1.
import { motion, useScroll, useTransform } from 'framer-motion';

import heroImage from '../../../assets/images/camera-for-zoom-out.png';
import './Hero.css'

export default function HeroSection({ isInView, offset = 1500 }) {
  // 2.
  const { scrollY } = useScroll();
  // 3.
  const scale = useTransform(scrollY, [1875, offset+1875], [1, 5]);
  const opacity = useTransform(scrollY, [1875, offset+1875], [3, 0]);
  const moveDown = useTransform(scrollY, [1875, offset+1875], [0, -50]);


  useEffect(() => {
    console.log(scrollY);
  }, [scrollY])
  
  return (
    <>
      <div className={'imageContainer'} style={{display: isInView ? 'block' : 'none'}}>
        {/* 5. */}
        <motion.img
          src={heroImage}
          alt='Model'
          style={{
            opacity: opacity,
            scale: scale,
            y: moveDown,
            top:'100vh'
          }}
        />
      </div>
    </>
  );
}
