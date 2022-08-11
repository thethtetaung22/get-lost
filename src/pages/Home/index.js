import React from 'react';
import ContactUs from '../../component/ContactUs';
import { HomeComponent } from '../../component/Home';
import Navbar from '../../component/Navbar';
import OurPlatforms from '../../component/OurPlatforms';
import Program from '../../component/Program';
import Testimonials from '../../component/Testimonials';
import WhatWeDo from '../../component/WhatWeDo';

const Home = () => {

  return (
    <div>
        <HomeComponent />
        <Navbar />
        <Program />
        <OurPlatforms />
        <WhatWeDo />
        <Testimonials />
        <ContactUs />
    </div>
  )
}

export default Home;
