import React from 'react';
import ContactUs from '../../component/ContactUs';
import { HomeComponent } from '../../component/Home';
import Navbar from '../../component/Navbar';
import OurPlatforms from '../../component/OurPlatforms';
import Testimonials from '../../component/Testimonials';
import WhatWeDo from '../../component/WhatWeDo';

const Home = () => {
  return (
    <div className='container'>
        <HomeComponent />
        <Navbar />
        <OurPlatforms />
        <WhatWeDo />
        <Testimonials />
        <ContactUs />
    </div>
  )
}

export default Home;
