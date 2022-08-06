import { Parallax } from "react-scroll-parallax";
import styled, { keyframes } from "styled-components";

const AnimationDuration = '10s';

// Animations
const MovingAnimation = (x) => keyframes`
    0% { transform: translate(0,  0px); }
    50% { transform: translate(${x}, 0); }
    100% { transform: translate(0, -0px); } 
`;

const ReverseAnimation = keyframes`
    0% { transform: translate(15px,  0px); }
    50% { transform: translate(0, 0); }
    100% { transform: translate(15px, -0px); } 
`;

const RocketAnimation = keyframes`
    0% { transform: translate(0, 30px); }
    50%  { transform: translate(150px, -50px); }
    100% { transform: translate(0, 30px); } 
`;

const AirplaneAnimation = keyframes`
    0% {
        left: -10%;
    }
    100% {
        left: 100%;
    }
`;

const Cloud5Animation = keyframes`
    0% { transform: translate(50px, 0); }
    50% { transform: translate(0, -0px); }
    100% { transform: translate(50px, 0); } 
`;

const Cloud4Animation = keyframes`
    0% { transform: translate(0,  0px); }
    50% { transform: translate(50px, 0); }
    100% { transform: translate(0, -0px); } 
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    margin-top: -80px;
    background: rgb(253,187,45);
    background: -moz-linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(130,52,140,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(130,52,140,1) 100%);
    background: linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(130,52,140,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fdbb2d",endColorstr="#82348c",GradientType=1);
    overflow-y: hidden;
`;

export const ImageLogo = styled.img`
    will-change: transform;
    transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    position: absolute;
    left: 0px;
    top: 3%;
    right: 0%;
    bottom: 0%;
    z-index: 2;
    width: 30%;
    left: 35%;
`;

export const CloudLogo1 = styled.img`
    width: 55%;
    animation-name: ${MovingAnimation('25px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const CloudLogo2 = styled.img`
    position: absolute;
    left: 53%;
    top: 10%;
    right: 0%;
    bottom: 0%;
    z-index: 3;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 17%;
    margin-left: 0%;
    animation-name: ${MovingAnimation('25px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const CloudLogo3 = styled.img`
    position: absolute;
    left: 73%;
    top: 27%;
    right: 0%;
    bottom: 0%;
    z-index: 6;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 14%;
    margin-left: 0%;

    animation-name: ${MovingAnimation('25px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const CameraLogo = styled.img`
    height: auto;
    max-width: 20%;
    margin-left: 0%;

    animation-name: ${ReverseAnimation};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const AirplaneLogo = styled.img`
    position: absolute;
    left: 47%;
    top: 25%;
    right: 0%;
    bottom: 0%;
    z-index: 5;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 13%;
    margin-left: 0%;
    animation-name: ${AirplaneAnimation};
    animation-duration: 23s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const IslandLogo = styled.img`
    width: 100%;
    height: auto;
`;

export const KittyLogo = styled.img`
    width: 12%;

    animation-name: ${ReverseAnimation};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const ChickenLogo = styled.img`
    width: 20%;

    animation-name: ${MovingAnimation('15px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const SkateboardLogo = styled.img`
    width: 35%;
`;

/*** Rocket Logo ***/
export const RocketLogo = styled.img`
    position: absolute;
    width: 12%;
    height: auto;
    top: 25%;
    left: 5%;
    animation-name: ${RocketAnimation};
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const RocketParallax = styled(Parallax)`
    position: absolute;
    left: 18%;
    top: 5%;
    z-index: 2;
    display: block;
    overflow: auto;
    width: 70%;
    height: 70%;
`;

export const Cloud1Parallax = styled(Parallax)`
    position: absolute;
    top: 18%;
    left: 15%;
    z-index: 1;
    display: block;
    overflow: hidden;
`;

export const CameraParallax = styled(Parallax)`
    position: absolute;
    top: 45%;
    left: 20%;
    z-index: 11;
    display: block;
    overflow: hidden;
`;

/*** Cloud 4 Logo ***/
export const CloudLogo4 = styled.img`
    width: 100%;
    height: auto;
    max-width: 70%;

    animation-name: ${Cloud4Animation};
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const Cloud4Parallax = styled(Parallax)`
    position: absolute;
    top: 48%;
    left: 18%;
    bottom: 0%;
    z-index: 9991;
    display: block;
    overflow: hidden;
    width: 40%;
`;
/*** Cloud 4 Logo ***/

/*** Cloud 5 Logo ***/
export const CloudLogo5= styled.img`
    width: 57%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
    animation-name: ${Cloud5Animation};
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const Cloud5Parallax = styled(Parallax)`
    position: absolute;
    left: 55%;
    top: 55%;
    z-index: 9991;
    display: block;
    overflow: hidden;
`;
/*** Cloud 5 Logo ***/

export const IslandParallax = styled(Parallax)`
    position: absolute;
    top: 18%;
    left: 30%;
    z-index: 8;
    display: block;
    overflow: hidden;
    height: auto;
    width: 48%;
`;


/*** Alien Logo ***/
export const AlienLogo = styled.img`
    width: 50%;
`;

export const AlienParallax = styled(Parallax)`
    position: absolute;
    left: 45%;
    top: 35.5%;
    z-index: 9991;
    display: block;
    overflow: hidden;
`;
/*** Alien Logo ***/

/*** Cloud 6 Logo ***/
export const Cloud6Logo = styled.img`
    width: 40%;
`;

export const Cloud6Parallax = styled(Parallax)`
    position: absolute;
    left: 35%;
    top: 58.5%;
    z-index: 9991;
    display: block;
    overflow: hidden;
`;
/*** Cloud 6 Logo ***/

export const KittyParallax = styled(Parallax)`
    position: absolute;
    left: 29.5%;
    top: 57%;
    right: 0%;
    bottom: 0%;
    z-index: 39;
    display: block;
    overflow: hidden;
`;

export const SkateboardParallax = styled(Parallax)`
    position: absolute;
    left: 67%;
    top: 52%;
    right: 0%;
    bottom: 0%;
    z-index: 4;
    display: block;
    overflow: hidden;
`;

export const ChickenParallax = styled(Parallax)`
    position: absolute;
    left: 58.5%;
    top: 41%;
    right: 0%;
    bottom: 0%;
    z-index: 38;
    display: block;
    overflow: hidden;
`;

/*** Bag Logo ***/
export const BagLogo = styled.img`
    width: 25%;

    animation-name: ${MovingAnimation('15px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const BagParallax = styled(Parallax)`
    position: absolute;
    left: 77%;
    top: 36.3%;
    right: 0%;
    bottom: 0%;
    z-index: 37;
    display: block;
    overflow: hidden;
`;
/*** Bag Logo ***/

/**** Gift Box Logo ****/
export const GiftBoxLogo = styled.img`
    width: 35%;
    animaton-name: ${MovingAnimation('15px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const GiftBoxParallax = styled(Parallax)`
    position: absolute;
    left: 78%;
    top: 55%;
    z-index: 39;
    display: block;
    overflow: hidden;
`;
/**** Gift Box Logo ****/
