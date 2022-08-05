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
    0% { transform: translate(0, 50px); }
    50%  { transform: translate(150px, -100px); }
    100% { transform: translate(0, 50px); } 
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
    50% { transform: translate(0, 0); }
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
    background: url('home-bg.png');
    text-align: center;
    overflow-y: hidden;
`;

export const ImageLogo = styled.img`
    will-change: transform;
    transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    position: relative;
    left: 0px;
    top: 3%;
    right: 0%;
    bottom: 0%;
    z-index: 2;
`;

export const CloudLogo1 = styled.img`
    position: absolute;
    left: 13%;
    top: 22%;
    right: 0%;
    bottom: 0%;
    z-index: 1;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 16%;
    margin-left: 0%;
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

export const CloudLogo4 = styled.img`
    position: absolute;
    left: 15%;
    top: 73%;
    right: 0%;
    bottom: 0%;
    z-index: 9991;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 30%;

    animation-name: ${Cloud4Animation};
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const CloudLogo5= styled.img`
    position: absolute;
    left: 57%;
    top: 69%;
    right: 0%;
    bottom: 0%;
    z-index: 9991;
    display: block;
    overflow: hidden;
    width: 100%;
    max-width: 30%;

    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
    animation-name: ${Cloud5Animation};
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const CameraLogo = styled.img`
    position: absolute;
    left: 21%;
    top: 45%;
    right: 0%;
    bottom: 0%;
    z-index: 11;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 12%;
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

export const RocketLogo = styled.img`
    position: absolute;
    left: 20%;
    top: 19%;
    right: 0%;
    bottom: 0%;
    z-index: 2;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 10%;
    margin-left: 0%;
    animation-name: ${RocketAnimation};
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const IslandLogo = styled.img`
    position: absolute;
    left: 30%;
    top: 19%;
    right: 0%;
    bottom: 0%;
    z-index: 8;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 45%;
`;

export const BagLogo = styled.img`
    position: absolute;
    left: 77%;
    top: 46.3%;
    right: 0%;
    bottom: 0%;
    z-index: 37;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 5%;

    animation-name: ${MovingAnimation('15px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const KittyLogo = styled.img`
    position: absolute;
    left: 29.5%;
    top: 67%;
    right: 0%;
    bottom: 0%;
    z-index: 39;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 6%;

    animation-name: ${ReverseAnimation};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const SleepyBirdLogo = styled.img`
    position: absolute;
    left: 58.5%;
    top: 41%;
    right: 0%;
    bottom: 0%;
    z-index: 38;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 6%;

    animation-name: ${MovingAnimation('15px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const SkateboardLogo = styled.img`
    position: absolute;
    left: 64%;
    top: 62%;
    right: 0%;
    bottom: 0%;
    z-index: 4;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 9%;
    margin-left: 0%;
`;

export const GiftBoxLogo = styled.img`
    position: absolute;
    left: 80%;
    top: 60%;
    right: 0%;
    bottom: 0%;
    z-index: 39;
    display: block;
    overflow: hidden;
    width: 100%;
    height: auto;
    max-width: 7%;
    margin-left: 0%;

    animation-name: ${MovingAnimation('15px')};
    animation-duration: ${AnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
