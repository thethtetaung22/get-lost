import React, { useEffect, useState } from 'react';
import ContactUs from '../../component/ContactUs';
import Footer from '../../component/Footer';
import { HomeComponent } from '../../component/Home';
import Navbar from '../../component/Navbar';
import OurPlatforms from '../../component/OurPlatforms';
import Program from '../../component/Program';
import Testimonials from '../../component/Testimonials';
import WhatWeDo from '../../component/WhatWeDo';

const Home = () => {

  const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => setScrollY(window.pageYOffset);

    useEffect(()=> {
        console.log('Home:',scrollY);
    }, [scrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div>
        <HomeComponent />
        <Navbar />
        <div style={{ height: '430vh', zIndex: 9 }}>
          <Program scrollY={scrollY} />
        </div>
        <OurPlatforms />
        <WhatWeDo scrollY={scrollY} />
        <Testimonials />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Home;
