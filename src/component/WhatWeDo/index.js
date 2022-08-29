import React from 'react';
import './WhatWeDo.css';
import Joker from '../../assets/images/WhatWeDo/joker.png'
import MeetTheTeam from './MeetTheTeam';
import { useScroll, useTransform, motion } from 'framer-motion';

const Item = ({ data: { title, description, startY }, showDivider }) => {
    const { scrollY } = useScroll();

    const offset = 1000, descStartY = startY + 70;
    const titleY = useTransform(scrollY, [startY, offset + startY], [500, 0]);
    const descY = useTransform(scrollY, [descStartY, offset + descStartY], [500, 0]);
    const opacity = useTransform(scrollY, [startY, offset + startY], [-10, 1]);
    const width = useTransform(scrollY, [startY, descStartY], [0, 800]);

    return (
        <>
            {
                showDivider &&
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                    <motion.div style={{
                        width: width,
                        opacity: opacity,
                        height: '2px',
                        background: '#d26066'
                    }}>

                    </motion.div>
                </div>
            }
            <motion.div className='section'>
                <motion.div className='title'
                    style={{
                        y: titleY,
                        opacity: opacity
                    }}>
                    <b>{title}</b>
                </motion.div>
            <motion.p className='description'
                style={{
                    y: descY,
                    opacity: opacity
                }}>
                {description}
            </motion.p>
        </motion.div>
        </>
    );
}

const WhatWeDo = () => {


    const data = [
        {
            title: 'Content Creation',
            description: 'We strive to consistently produce the best content that are relevant to our community. We curate trending content, plan and collaborate with your team to showcase your products/service in our production.',
            startY: 4500
        },
        {
            title: 'Cinematics Video Production',
            description: 'Having produced multiple videos since 2012, our team of passionate cinematographers and video editors strives to bring quality and impressive productions to the industry by incorporating the latest and most innovative trends into our production.',
            startY: 4650
        },
        {
            title: 'Advertising and Publicity',
            description: 'We Produce, We Film and We Distribute. Our content will be distributed to the relevant platforms in our ecosystem :D',
            startY: 4800
        },
        {
            title: 'Community Engagement',
            description: `We ARE the community and we want to connect the brands we work with, with OUR community! We believe the key is to value-add to our community is by understanding the communities' needs and aspirations, and curates content that resonates with them.`,
            startY: 5000
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 100 }}>
            <div id='WhatWeDo'>
                <img src={Joker} alt="joker" width={'650px'} className={'joker-img'} />
                <section className='motion-section'>
                    {
                        data.map((d, i) => (
                            <Item data={d} showDivider={i > 0} />
                        ))
                    }
                </section>
            </div>
            <MeetTheTeam />
        </div>
    )
}

export default WhatWeDo;
