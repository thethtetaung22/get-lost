import React from 'react';

import { 
  Airplane, 
  Bag, 
  Camera, 
  Cloud, 
  Cloud2, 
  CloudReverse, 
  GiftBox, 
  Island, 
  Kitty, 
  LogoText, 
  Rocket,
  Skateboard
} from '.';

import { 
  AirplaneLogo, 
  BagLogo, 
  CameraLogo, 
  CloudLogo1, 
  CloudLogo2, 
  CloudLogo3, 
  CloudLogo4, 
  CloudLogo5, 
  Container, 
  GiftBoxLogo, 
  ImageLogo, 
  IslandLogo, 
  KittyLogo, 
  RocketLogo,
  SkateboardLogo
} from './Elements';

const Landing = () => {
  return (
    <Container>
      <ImageLogo src={LogoText} />
      <CloudLogo1 src={Cloud} />
      <CloudLogo2 src={Cloud} />
      <CloudLogo3 src={Cloud} />
      <CloudLogo4 src={Cloud2} />
      <CloudLogo5 src={CloudReverse} />
      <AirplaneLogo src={Airplane} />
      <RocketLogo src={Rocket} />
      <IslandLogo src={Island} />
      <CameraLogo src={Camera} />
      <KittyLogo src={Kitty} />
      <BagLogo src={Bag} />
      <SkateboardLogo src={Skateboard} />
      <GiftBoxLogo src={GiftBox} />
    </Container>
  )
}

export default Landing;
