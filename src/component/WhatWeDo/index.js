import React from 'react';
import './WhatWeDo.css';
import { motion } from 'framer-motion';
import Joker from '../../assets/images/WhatWeDo/joker.png'
import MeetTheTeam from './MeetTheTeam';

const WhatWeDo = () => {
    






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

    return (
        <>
            <div id='WhatWeDo'>
                <motion.img src={Joker} width={'500px'}/>
                <motion.section className='motion-section'>
                    {
                        data.map(d => (
                            <div className='section'>
                                <h1 className='title'><b>{d.title}</b></h1>
                                <p className='description'>{d.description}</p>
                                <div className='divider'></div>
                            </div>
                        ))
                    }
                </motion.section>
            </div>
            <MeetTheTeam />
        </>
    )
}

export default WhatWeDo;
