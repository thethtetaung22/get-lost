import React, { useEffect, useState } from 'react'

import CameraImage from '../../../assets/images/camera-for-zoom-out.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const CameraZoom = ({ scrollYPosition, offset = 1500 }) => {
    const { scrollY } = useScroll();
    const [isInView, setIsInView] = useState(false);

    // 3.
    const scale = useTransform(scrollY, [0, offset], [1, 5]);
    const opacity = useTransform(scrollY, [0, offset], [3, 0]);
    const moveDown = useTransform(scrollY, [0, offset], [0, -500]);

    useEffect(() => {
        setIsInView(scrollYPosition > 940 && scrollYPosition < 1875);
    }, [scrollYPosition]);

    return (
        <div className='motion-container'>
            <motion.div
                alt='Model'
                className={'container'}
                style={{
                    // opacity: opacity,
                    // scale: scale,
                    // y: moveDown,
                    display: 'flex',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={CameraImage} />
            </motion.div>
        </div>
    )
}

export default CameraZoom;
