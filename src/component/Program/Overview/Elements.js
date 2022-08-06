import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ececec;
    z-index: 8;
    will-change: transform; 
    transform: ${({ startY, scrollY }) => (scrollY > startY ? `translate3d(0px, -${scrollY - startY}vh, 0px)`: `translate3d(0px, -0vh, 0px)`)} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
    transform-style: preserve-3d;
`;
