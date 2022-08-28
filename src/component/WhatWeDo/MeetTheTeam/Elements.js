import styled from "styled-components";

export const OverText = styled.span({
    transform: "translate3d(0, 25px, 0)",
    transition: "transform 1000ms ease",
});

export const DisplayOver = styled.div({
    position: "absolute",
    height: "100%",
    left: "0",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
    color: '#f2e5d9',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    textAlign: 'center'
});

export const Hover = styled.div({
    opacity: 0,
    transition: "opacity .2s ease",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
});

export const TeamImg1 = styled.div({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    background: 'white',
    color: "#FFF",
    position: "relative",
    cursor: "pointer",
    width: (({width}) => width? `${width}px`: '200px' ),
    overflow: 'hidden',
    height: '250px',
    margin: '5px',
    borderRadius: '300px 0px 300px 300px',
    [`:hover ${DisplayOver}`]: {
        backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${OverText}`]: {
        transform: "translate3d(0,0,0)",
    },
    [`:hover ${Hover}`]: {
        opacity: 1,
    },
});
