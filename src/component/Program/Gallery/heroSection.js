import React, { useEffect } from 'react';
// 1.
import { motion, useScroll, useTransform } from 'framer-motion';

import heroImage from '../../../assets/images/camera-for-zoom-out.png';
import './Hero.css'
import ElementsLayer from './ElementsLayer/ElementsLayer';

export default function HeroSection({ isInView, offset = 1500 }) {
  // 2.
  const { scrollY } = useScroll();
  const startY = 2500;
  // 3.
  const scale = useTransform(scrollY, [startY, offset+startY], [1, 5]);
  const opacity = useTransform(scrollY, [startY, offset+startY], [3, 0]);
  const moveDown = useTransform(scrollY, [startY, offset+startY], [0, -50]);


  useEffect(() => {
    console.log(scrollY);
  }, [scrollY])
  
  return (
    <>
      <div className={'imageContainer'} style={{display: isInView ? 'block' : 'none'}}>
        {/* 5. */}
        <motion.div
          alt='Model'
          className='motion-div'
          style={{
            opacity: opacity,
            scale: scale,
            y: moveDown,
            top:'100vh'
          }}
        >         
          <ElementsLayer /> 
        </motion.div>
      </div>
    </>
  );
}
