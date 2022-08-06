import React from 'react';

import {
    Airplane,
    Alien,
    Bag,
    Camera,
    Cloud,
    Cloud1,
    Cloud2,
    Cloud6,
    CloudReverse,
    GiftBox,
    Island,
    Kitty,
    LogoText,
    Rocket,
    Skateboard,
    Chicken
} from '.';

import {
    AirplaneLogo,
    AlienLogo,
    AlienParallax,
    BagLogo,
    CameraLogo,
    CameraParallax,
    Cloud1Parallax,
    Cloud4Parallax,
    Cloud5Parallax,
    Cloud6Logo,
    Cloud6Parallax,
    CloudLogo1,
    CloudLogo2,
    CloudLogo3,
    CloudLogo4,
    CloudLogo5,
    Container,
    GiftBoxLogo,
    ImageLogo,
    IslandLogo,
    IslandParallax,
    KittyLogo,
    KittyParallax,
    RocketLogo,
    RocketParallax,
    SkateboardLogo,
    SkateboardParallax,
    ChickenLogo,
    ChickenParallax,
    BagParallax,
    GiftBoxParallax
} from './Elements';

const Landing = () => {

    return (
        <Container>
            <ImageLogo src={LogoText} />
            <CloudLogo2 src={Cloud} />
            <CloudLogo3 src={Cloud} />
            <AirplaneLogo src={Airplane} />

            <Cloud1Parallax speed={-5}>
                <CloudLogo1 src={Cloud1} />
            </Cloud1Parallax>

            <RocketParallax speed={20}>
                <RocketLogo src={Rocket} alt='rocket'/>
            </RocketParallax>

            <CameraParallax speed={30}>
                <CameraLogo src={Camera} alt='camera'/>
            </CameraParallax>

            <GiftBoxParallax speed={25}>
                <GiftBoxLogo src={GiftBox} alt='gift-box'/>
            </GiftBoxParallax>

            <IslandParallax speed={20}>
                <IslandLogo src={Island} alt='island'/>
            </IslandParallax>

            <BagParallax speed={25}>
                <BagLogo src={Bag} alt='bag'/>
            </BagParallax>

            <KittyParallax speed={25}>
                <KittyLogo src={Kitty} alt='kitty'/>
            </KittyParallax>

            <ChickenParallax speed={25}>
                <ChickenLogo src={Chicken} alt='chicken'/>
            </ChickenParallax>

            <SkateboardParallax speed={25}>
                <SkateboardLogo src={Skateboard} alt='skateboard'/>
            </SkateboardParallax>

            <Cloud4Parallax speed={80}>
                <CloudLogo4 src={Cloud2} alt='cloud-4'/>
            </Cloud4Parallax>

            <Cloud5Parallax speed={60}>
                <CloudLogo5 src={CloudReverse} alt='cloud-5'/>
            </Cloud5Parallax>

            <AlienParallax speed={310}>
                <AlienLogo src={Alien} alt='alien'/>
            </AlienParallax>

            <Cloud6Parallax speed={200}>
                <Cloud6Logo src={Cloud6} alt='cloud-6'/>
            </Cloud6Parallax>
        </Container>
    )
}

export default Landing;
