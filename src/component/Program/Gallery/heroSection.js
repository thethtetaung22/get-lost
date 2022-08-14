import React from 'react';
// 1.
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import './Hero.css';
import MapImage from '../../../assets/images/zoom-resources/map.png';
import CameraImage from '../../../assets/images/zoom-resources/camera-zoom.png';
import PenImage from '../../../assets/images/zoom-resources/pen.png';
import ListBoardImage from '../../../assets/images/zoom-resources/list-board.png';
import CompassImg from '../../../assets/images/zoom-resources/compass.png';
import Cloud3Img from '../../../assets/images/zoom-resources/cloud3.png';
import Cloud9Img from '../../../assets/images/zoom-resources/cloud9.png';
import Cloud8Img from '../../../assets/images/zoom-resources/cloud8.png';
import MountainCycleImg from '../../../assets/images/zoom-resources/mountain-cycle.png';
import PizzaSliceImg from '../../../assets/images/zoom-resources/pizza-slice.png';
import ShipImg from '../../../assets/images/zoom-resources/yatch.png';
import StarPinRedImg from '../../../assets/images/zoom-resources/star-pin-red.png';
import StarPinYellowImg from '../../../assets/images/zoom-resources/yellow-star-pin.png';
import AirplaneImg from '../../../assets/images/zoom-resources/airplane.png';
import Ballon1Img from '../../../assets/images/zoom-resources/ballon1.png';
import Ballon2Img from '../../../assets/images/zoom-resources/ballon2.png';

export default function HeroSection({ isInView, offset = 1500 }) {

    const { scrollY } = useScroll();
    const startY = 2500;

    const scale = useTransform(scrollY, [startY, offset + startY], [1, 5]);
    const opacity = useTransform(scrollY, [startY, offset + startY], [3, 0]);
    const moveDown = useTransform(scrollY, [startY, offset + startY], [0, -50]);
    const pizzaTransform = useTransform(scrollY, [startY, offset + startY], [0, 200]);
    const mountainCycleTransform = useTransform(scrollY, [startY, offset + startY], [0, 240]);
    const airplaneMotionX = useTransform(scrollY, [startY, offset + startY], [0, 1100]);
    const airplaneMotionY = useTransform(scrollY, [startY, offset + startY], [0, 1700]);
    const moveRight = useTransform(scrollY, [startY, offset + startY], [0, 600]);
    const cloud8Motion = useTransform(scrollY, [startY, offset + startY], [0, 250]);
    const cloud1MotionY = useTransform(scrollY, [startY, offset + startY], [0, 500]);
    const physics = { damping: 15, mass: 3.27, stiffness: 55 }
    const pinSpring = useSpring(pizzaTransform, physics);

    const ballon1Motion = useTransform(scrollY, [startY, offset + startY], [0, -1000]);
    const ballon2MotionX = useTransform(scrollY, [startY, offset + startY], [0, 200]);
    const ballon2MotionY = useTransform(scrollY, [startY, offset + startY], [0, 150]);
    const yellowPinMotion = useTransform(scrollY, [startY, offset + startY], [0, 100]);

    return (
        <div className={'imageContainer'} style={{ display: isInView ? 'block' : 'none' }}>
            <motion.div
                alt='Model'
                className='motion-div'
                style={{
                    opacity: opacity,
                    scale: scale,
                    y: moveDown,
                    top: '100vh'
                }}
            >
                <img className='absolute img-map' src={MapImage} width={'80%'} height={'auto'} />
                <img className='absolute img-camera' src={CameraImage} width={'30%'} height='auto' />
                <img className='absolute img-pen' src={PenImage} width={'12%'} height='auto' />
                <img className='absolute img-list-board' src={ListBoardImage} width={'12%'} height='auto' />
                <img className='absolute img-compass' src={CompassImg} width={'9.5%'} height='auto' />
                <img className='absolute img-ship' src={ShipImg} width={'9.5%'} height='auto' />
                <motion.img
                    alt='Airplane'
                    className='absolute img-airplane'
                    src={AirplaneImg}
                    width={'10%'}
                    height='auto'
                    style={{
                        x: airplaneMotionX,
                        y: airplaneMotionY
                    }}
                />
                <motion.img
                    alt='ballon1'
                    className='absolute img-ballon1'
                    src={Ballon1Img}
                    width={'8%'}
                    height='auto'
                    style={{
                        x: ballon1Motion
                    }}
                />

                <motion.img
                    alt='Cloud 1'
                    className='absolute img-cloud-1'
                    src={Cloud3Img}
                    width={'8%'}
                    height='auto'
                    style={{
                        x: airplaneMotionX,
                        y: cloud1MotionY
                    }}
                />

                <motion.img
                    alt='Cloud 2'
                    className='absolute img-cloud-2'
                    src={Cloud9Img}
                    width={'11%'}
                    height='auto'
                    style={{
                        x: moveRight,
                    }}
                />

                <motion.img
                    alt='Cloud 3'
                    className='absolute img-cloud-3'
                    src={Cloud3Img}
                    width={'10%'}
                    height='auto'
                    style={{
                        x: moveRight,
                    }}
                />

                <motion.img
                    alt='Cloud 4'
                    className='absolute img-cloud-4'
                    src={Cloud3Img}
                    width={'12%'}
                    height='auto'
                    style={{
                        // x: moveRight,
                    }}
                />

                <motion.img
                    className='absolute img-cloud-5'
                    src={Cloud9Img}
                    width={'8%'}
                    height='auto'
                    style={{
                        x: moveRight,
                    }}
                />

                <motion.img
                    alt='Ballon 2'
                    className='absolute img-ballon-2'
                    src={Ballon2Img}
                    width={'4%'}
                    height='auto'
                    style={{
                        x: ballon2MotionX,
                        y: ballon2MotionY
                    }}
                />

                <motion.img
                    className='absolute img-star-pin-red'
                    src={StarPinRedImg}
                    width={'6%'}
                    height='auto'
                    style={{
                        y: pinSpring,
                    }}
                />
                <motion.img
                    className='absolute img-pizza'
                    src={PizzaSliceImg}
                    width={'15%'}
                    height='auto'
                    style={{
                        y: pizzaTransform
                    }}
                />

                <motion.img
                    className='absolute img-yellow-star-pin'
                    src={StarPinYellowImg}
                    width={'4%'}
                    height='auto'
                    style={{
                        y: yellowPinMotion
                    }}
                />

                <motion.img
                    className='absolute img-mountain-cycle'
                    src={MountainCycleImg}
                    width={'5%'}
                    height='auto'
                    style={{
                        x: mountainCycleTransform
                    }}
                />
                <motion.img
                    className='absolute img-cloud-8'
                    src={Cloud8Img}
                    width={'18%'}
                    height='auto'
                    style={{
                        x: cloud8Motion,
                    }}
                />
                <motion.img
                    className='absolute img-cloud-9'
                    src={Cloud9Img}
                    width={'10%'}
                    height='auto'
                    style={{
                        x: moveRight,
                    }}
                />
            </motion.div>
        </div>
    );
}
