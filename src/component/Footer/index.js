import React from 'react';
import './Footer.css';
import FooterImg from '../../assets/images/footer-img.png';
import Instagram from '../../assets/images/social/instagram.png';
import Youtube from '../../assets/images/social/youtube.png';
import Tiktok from '../../assets/images/social/tiktok.png';
import { NavBtnLink, NavItem, NavLink, NavMenu } from '../Navbar/Elements';

const Footer = () => {

    const handleSocialClick = (name) => {
        let url = '';

        if (name === 'youtube') {
            url = 'https://www.youtube.com/channel/UCN4KjsqbovLvPiAnyp64mIQ'
        } else if (name === 'instagram') {
            url = 'https://www.instagram.com/getlostsg/';
        } else {
            url = 'https://www.tiktok.com/@getlostsg';
        }
        window.open(url)
    }

    return (
        <div className='footer'>
            <div className='footer-body'>
                <img src={FooterImg} className='shake' alt='footer' width={70} height={100} />
                <p className='copyright-text'>2022 © Copyright by Get Lost - All rights reserved</p>
                <NavMenu>
                    <NavItem>
                        <NavLink to='Home' smooth="true" duration={500} spy={true} exact='true' offset={-80}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='OurPlatforms' smooth="true" spy={true} duration={500} exact='true' offset={-80}>
                            Our Platforms
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='WhatWeDo' smooth="true" spy={true} duration={500} exact='true' offset={-80}>
                            What We Do
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavBtnLink to='/articles' smooth="true" spy={"true"} duration={500} exact='true' offset={-80}>
                            Aritcles
                        </NavBtnLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='Testimonials' smooth="true" duration={500} spy={true} exact='true' offset={-80}>
                            Testimonials
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='Contact-Us' smooth="true" spy={true} duration={500} exact='true' offset={-80}>
                            Contact Us
                        </NavLink>
                    </NavItem>
                </NavMenu>

                <div className='socials'>
                    <img
                        className='shake'
                        alt='instagram'
                        onClick={() => handleSocialClick('instagram')}
                        src={Instagram}
                        width={'35px'} 
                        height={'auto'}
                    />
                    <img
                        className='shake'
                        onClick={() => handleSocialClick('youtube')}
                        alt='Youtube'
                        src={Youtube}
                        width={'35px'} 
                        height={'auto'}
                    />
                    <img
                        className='shake'
                        alt='Tiktok'
                        onClick={() => handleSocialClick('tiktok')}
                        src={Tiktok}
                        width={'35px'} 
                        height={'auto'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;
