import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav? '#f2e5d9': 'transparent')};
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 300;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    z-index: 1;
    padding: 0 24px;
`;

export const NavLogo = styled.img`
    width: 120px;
    padding: 10px 20px 0 20px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 55px;
    display: flex;
    align-items: center;
`;

export const NavLink = styled(LinkS)`
    padding: 12px 24px;
    border-radius: 50px;
    background-color: transparent;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    font-family: 'Sofia pro soft', sans-serif;
    color: #ad3c42;
    font-size: 0.9em;
    line-height: 0.3em;
    font-weight: 500;
    letter-spacing: -0.01em;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
`;

export const NavBtnLink = styled(LinkR)`
    padding: 12px 24px;
    border-radius: 50px;
    background-color: transparent;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    font-family: 'Sofia pro soft', sans-serif;
    color: #ad3c42;
    font-size: 0.9em;
    line-height: 0.3em;
    font-weight: 500;
    letter-spacing: -0.01em;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
`