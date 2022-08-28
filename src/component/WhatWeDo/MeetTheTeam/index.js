import React from 'react';
import './MeetTheTeam.css';
import Avery from '../../../assets/images/WhatWeDo/team/avery.jpeg';
import Bryant from '../../../assets/images/WhatWeDo/team/bryant.jpeg';
import Isabelle from '../../../assets/images/WhatWeDo/team/isabelle.jpeg';
import Krystal from '../../../assets/images/WhatWeDo/team/krystal.jpeg';
import Lutfi from '../../../assets/images/WhatWeDo/team/lutfi.jpeg';
import Ryan from '../../../assets/images/WhatWeDo/team/ryan.jpeg';
import Titus from '../../../assets/images/WhatWeDo/team/titus.jpeg';
import XsinJoo from '../../../assets/images/WhatWeDo/team/xsin_joo.jpeg';
import YSKE from '../../../assets/images/WhatWeDo/team/yske.jpeg';
import { DisplayOver, Hover, OverText, TeamImg1 } from './Elements';

const MeetTheTeam = () => {
    const team1 = [
        {
            name: 'Ryan',
            position: 'Director | Founder',
            src: Ryan,
            id: 'ryan',
            alt: 'ryan',
            desc: 'Our broke and divorced boss who is too nice for his own good. He also makes sure that the team is well fed and does not lose weight.'
        },
        {
            name: 'Isabelle',
            position: 'Social Media Manager',
            src: Isabelle,
            id: 'Isabelle',
            alt: 'Isabelle',
            desc: 'A walking cartoon character that is bad at singing. It is hard to keep up with her energy sometimes.'
        }
    ];

    const team2 = [
        {
            name: 'YSKE',
            position: 'Producer',
            src: YSKE,
            id: 'YSKE',
            alt: 'YSKE',
            desc: `Youngest in the team and a true debater-at-heart. She will fight for justice and never let you win, but she definitely won't let you down either!`
        },
        {
            name: 'Bryant',
            position: 'Production Director Cinematographer',
            src: Bryant,
            id: 'Bryant',
            alt: 'Bryant',
            desc: `Skater boiii, and supposedly has a third eye (for cinematography). He seems scary at first, but when you get to know him, he is still scary.`
        },
        {
            name: 'Avery',
            position: 'Production Lead',
            src: Avery,
            id: 'Avery',
            alt: 'Avery',
            desc: `Girl with superhuman strength. She has a very distinctive laugh which everyone recognises`
        },
        {
            name: 'Titus',
            position: 'Production Lead',
            src: Titus,
            id: 'Titus',
            alt: 'Titus',
            desc: `Looks intimidating, but… yeah that’s it.`
        },
        {
            name: 'Krystal',
            position: 'Graphic Designer',
            src: Krystal,
            id: 'Krystal',
            alt: 'Krystal',
            desc: `She is addicted to coffee and needs it every morning. Even though she is good at drawing, she has very shaky hands…`
        },
        {
            name: 'Lutfi',
            position: 'Illustrator',
            src: Lutfi,
            id: 'Lutfi',
            alt: 'Lutfi',
            desc: `He is like a white terrier. He tries to be intimidating but in reality he is very soft inside. He also has separation anxiety from Bryant.`
        },
        {
            name: 'XsinJoo',
            position: 'Crew, Compositor',
            src: XsinJoo,
            id: 'XsinJoo',
            alt: 'XsinJoo',
            desc: `She is somehow taller than 90% of the team… actually she might be the tallest. She also has scary black nail extensions.`
        }
    ];
    return (
        <div id='MeetTheTeam'>
            <div className='header'>
                <span className='title'>Meet The Team</span>
                <span className='sub'>teamwork makes the dream work</span>
            </div>
            <div className='section1'>
                {
                    team1.map(team => (
                        <div className='team' style={{marginRight: '20px'}}>
                            <TeamImg1>
                                <img
                                    className='img1'
                                    src={team.src}
                                    id={team.id}
                                    alt={team.alt}
                                    width={'auto'}
                                    height={'100%'}
                                />
                                <DisplayOver>
                                    <Hover>
                                        <OverText>{team.desc}</OverText>
                                    </Hover>
                                </DisplayOver>
                            </TeamImg1>

                            <span className='team-name'>{team.name}</span>
                            <span className='team-position'>{team.position}</span>
                        </div>
                    ))
                }
            </div>
            <div className='section2'>
                {
                    team2.map(team => (
                        <div className='team'>
                            <TeamImg1 width={140}>
                                <img
                                    className='img1'
                                    src={team.src}
                                    id={team.id}
                                    alt={team.alt}
                                />
                                <DisplayOver>
                                    <Hover>
                                        <OverText>{team.desc}</OverText>
                                    </Hover>
                                </DisplayOver>
                            </TeamImg1>
                            <span className='team-name'>{team.name}</span>
                            <span className='team-position'>{team.position}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MeetTheTeam;