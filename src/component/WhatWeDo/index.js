import React from 'react';
import './WhatWeDo.css';
import Joker from '../../assets/images/WhatWeDo/joker.png'
import MeetTheTeam from './MeetTheTeam';
import { WWDTitle } from './Elements';


const WhatWeDo = ({ scrollY }) => {

    const data = [
        {
            title: 'Content Creation',
            description: 'We strive to consistently produce the best content that are relevant to our community. We curate trending content, plan and collaborate with your team to showcase your products/service in our production.'
        },
        {
            title: 'Cinematics Video Production',
            description: 'Having produced multiple videos since 2012, our team of passionate cinematographers and video editors strives to bring quality and impressive productions to the industry by incorporating the latest and most innovative trends into our production.',
            start: 5600
        },
        {
            title: 'Advertising and Publicity',
            description: 'We Produce, We Film and We Distribute. Our content will be distributed to the relevant platforms in our ecosystem :D',
            start: 5800
        },
        {
            title: 'Community Engagement',
            description: `We ARE the community and we want to connect the brands we work with, with OUR community! We believe the key is to value-add to our community is by understanding the communities' needs and aspirations, and curates content that resonates with them.`,
            start: 6031
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 100 }}>
            <div id='WhatWeDo'>
                <img src={Joker} alt="joker" width={'650px'} className={'joker-img'} />
                <section className='motion-section'>
                    {
                        data.map((d, i) => (
                            <div className='section'>
                                <WWDTitle className='title'>
                                    <b>{d.title}</b>
                                </WWDTitle>
                                <p className='description'>
                                    {d.description}
                                </p>
                                {
                                    i < data?.length - 1 &&
                                    <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <div style={{
                                            width: '100%',
                                            maxWidth: '80%',
                                            height: '2px',
                                            background: '#d26066'
                                        }}>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))
                    }
                </section>
            </div>
            <MeetTheTeam />
        </div>
    )
}

export default WhatWeDo;
