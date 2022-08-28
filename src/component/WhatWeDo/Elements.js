import styled from "styled-components";

export const WWDTitle = styled.h1`
    font-family: 'Sofia Pro Soft Bold';
    color: #373947;
    font-size: 1.4em;
    line-height: 42px;
    will-change: transform;
    opacity: ${({ scrollY, startY }) =>  true ? 1 : 0};
    transform: ${({ scrollY, startY }) => `translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);`};
    transform-style: preserve-3d;
`;