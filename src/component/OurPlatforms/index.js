import React from 'react';
import './OurPlatforms.css';
import { motion } from 'framer-motion';
import Instagram from '../../assets/images/social/instagram.png';
import Youtube from '../../assets/images/social/youtube.png';
import Tiktok from '../../assets/images/social/tiktok.png';

const OurPlatforms = () => {
  return (
    <div id='OurPlatforms' className='container'>
      <h1 className='title'>Our Platforms</h1>
      <div className='body'>
        <motion.img src={Instagram} width={'200px'} height={'200px'}/>
        <motion.img src={Youtube} width={'200px'} height={'200px'}/>
        <motion.img src={Tiktok} width={'200px'} height={'200px'}/>
      </div>
    </div>
  )
}

export default OurPlatforms;
