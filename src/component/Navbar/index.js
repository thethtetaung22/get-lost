import React, { useEffect, useState } from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from './Elements';
// import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../assets/images/logo-text.png';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        {/* <MobileIcon onClick={toggle}>
                            <h1>HHH</h1>
                        </MobileIcon> */}
                        <NavMenu>
                            <NavItem>
                                <NavLink to='Home' smooth duration={500} spy exact='true' offset={-80}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='OurPlatforms' smooth spy duration={500} exact='true' offset={-80}>
                                    Our Platforms
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='WhatWeDo' smooth spy duration={500} exact='true' offset={-80}>
                                    What We Do
                                </NavLink>
                            </NavItem>

                            <NavLogo src={Logo} />

                            <NavItem>
                                <NavBtnLink to='/articles' smooth spy duration={500} exact='true' offset={-80}>
                                    Aritcles
                                </NavBtnLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to='Testimonials' smooth duration={500} spy exact='true' offset={-80}>
                                    Testimonials
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='Contact-Us' smooth spy duration={500} exact='true' offset={-80}>
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
