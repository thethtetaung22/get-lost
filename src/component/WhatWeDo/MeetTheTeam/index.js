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

const MeetTheTeam = () => {
    return (
        <div id='MeetTheTeam'>
            <div className='header'>
                <span className='title'>Meet The Team</span>
                <span className='sub'>teamwork makes the dream work</span>
            </div>
            <div className='section1'>
                <div className='team-container'>
                    <img src={Ryan} />
                    <span className='team-name'>Ryan</span>
                    <span className='team-position'>Director | Founder</span>
                </div>

                <div className='team-container'>
                    <img src={Isabelle} />
                    <span className='team-name'>Isabelle</span>
                    <span className='team-position'>Social Media Manager</span>
                </div>
            </div>
            <div className='section2'>
                <div className='team-container'>
                    <div className='s2-img-container'>
                        <img src={YSKE} />
                    </div>
                    <span className='team-name'>YSKE</span>
                    <span className='team-position'>Producer</span>
                </div>

                <div className='team-container'>
                    <div className='s2-img-container'>
                        <img src={Bryant} />
                    </div>
                    <span className='team-name'>Bryant</span>
                    <span className='team-position'>Production Director Cinematographer</span>
                </div>

                <div className='team-container'>
                    <div className='s2-img-container'>
                        <img src={Avery} />
                    </div>
                    <span className='team-name'>Avery</span>
                    <span className='team-position'>Production Lead</span>
                </div>

                <div className='team-container'>
                    <div className='s2-img-container'>
                        <img src={Titus} />
                    </div>
                    <span className='team-name'>Titus</span>
                    <span className='team-position'>Production Lead</span>
                </div>

                <div className='team-container'>
                    <div className='s2-img-container'>
                        <img src={Krystal} />
                    </div>
                    <span className='team-name'>Krystal</span>
                    <span className='team-position'>Graphic Designer</span>
                </div>

                <div className='team-container'>
                    <div className='s2-img-container'>
                        <img src={Lutfi} />
                    </div>
                    <span className='team-name'>Lutfi</span>
                    <span className='team-position'>Illustrator</span>
                </div>

                <div className='team-container'>
                    <div className='s2-img-container'>
                        <img src={XsinJoo} />
                    </div>
                    <span className='team-name'>Xsin Joo</span>
                    <span className='team-position'>Crew, Compositor</span>
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam;