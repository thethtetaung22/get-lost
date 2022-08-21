import React, { useEffect, useRef } from 'react';
import './WhatWeDo.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Joker from '../../assets/images/WhatWeDo/joker.png'
import MeetTheTeam from './MeetTheTeam';

const Item = ({data}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    useEffect(() => {
        console.log('scrollyprogress:', scrollYProgress);
    }, [scrollYProgress]);

    return (
        <div className='section' ref={ref}>
            <motion.h1
                className='title'
            >
                <b>{data.title}</b>
            </motion.h1>
            <motion.p className='description'>{data.description}</motion.p>
        </div>
    )
}

const WhatWeDo = ({ offset = 1500 }) => {

    const data = [
        {
            title: 'Content Creation',
            description: 'We strive to consistently produce the best content that are relevant to our community. We curate trending content, plan and collaborate with your team to showcase your products/service in our production.'
        },
        {
            title: 'Cinematics Video Production',
            description: 'Having produced multiple videos since 2012, our team of passionate cinematographers and video editors strives to bring quality and impressive productions to the industry by incorporating the latest and most innovative trends into our production.'
        },
        {
            title: 'Advertising and Publicity',
            description: 'We Produce, We Film and We Distribute. Our content will be distributed to the relevant platforms in our ecosystem :D'
        },
        {
            title: 'Community Engagement',
            description: `We ARE the community and we want to connect the brands we work with, with OUR community! We believe the key is to value-add to our community is by understanding the communities' needs and aspirations, and curates content that resonates with them.`
        }
    ];
    const startY = 5000;


    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [startY, offset + startY], [3, 0]);
    const moveDown = useTransform(scrollY, [startY, offset + startY], [0, 100]);

    useEffect(() => {
        console.log('Scroll:', scrollY)
    }, [useScroll]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 100 }}>
            <div id='WhatWeDo'>
                <motion.img src={Joker} width={'500px'} />
                <section className='motion-section'>
                    {
                        data.map(d => (<Item data={d} />))
                    }
                </section>
            </div>
            <MeetTheTeam />
        </div>
    )
}

export default WhatWeDo;
