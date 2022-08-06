import React, { useEffect, useState } from 'react';
import ContactUs from '../../component/ContactUs';
import { HomeComponent } from '../../component/Home';
import Navbar from '../../component/Navbar';
import OurPlatforms from '../../component/OurPlatforms';
import Program from '../../component/Program';
import Testimonials from '../../component/Testimonials';
import WhatWeDo from '../../component/WhatWeDo';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => setScrollY(window.pageYOffset);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div>
        <HomeComponent />
        <Navbar />
        <Program scrollY={scrollY}/>
        <OurPlatforms />
        <WhatWeDo />
        <Testimonials />
        <ContactUs />
    </div>
  )
}

export default Home;
