import React from 'react';
import './OurPlatforms.css';
import { motion, useAnimation } from 'framer-motion';
import Instagram from '../../assets/images/social/instagram.png';
import Youtube from '../../assets/images/social/youtube.png';
import Tiktok from '../../assets/images/social/tiktok.png';

const OurPlatforms = () => {
  const igAnimate = useAnimation(), 
    ytAnimate =  useAnimation(), 
    ttAnimate = useAnimation();

  const variants = {
    start: (i) => ({
      y: [0, -100, 0, -30, 0],
      transition: {
        repeat: 0,
        duration: 1.2
      }
    }),
    reset: () => ({
      y: 0
    })
  }

  return (
    <div id='OurPlatforms' className='container'>
      <h1 className='title'>Our Platforms</h1>
      <div className='body'>
        <motion.img
          className='shake'
          src={Instagram}
          width={'25%'} height={'auto'}
          variants={variants}
          initial='reset'
          animate={igAnimate}
          onHoverEnd={e => {
            igAnimate.start('start');
          }}
        />
        <motion.img
          className='shake'
          src={Youtube}
          width={'25%'} height={'auto'}
          variants={variants}
          initial='reset'
          animate={ytAnimate}
          onHoverEnd={e => {
            ytAnimate.start('start');
          }}
          />

        <motion.img
          className='shake'
          src={Tiktok}
          width={'25%'} height={'auto'}
          variants={variants}
          animate={ttAnimate}
          onHoverEnd={e => {
            ttAnimate.start('start');
          }}
          />
          
      </div>
    </div>
  )
}

export default OurPlatforms;
