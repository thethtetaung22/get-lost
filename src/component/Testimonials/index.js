import React, { useState } from 'react';
import './Testimonials.css';
import QuoteImg from '../../assets/images/quote.svg'

const Testimonials = () => {
    const [index, setIndex] = useState(1);

    const data1 = [
        {
            client : 'Lucky Khoon Bathroom Studio',
            text: 'Ryan and the team was a absolute pleasure to work with for the collaboration. Great work ethics, efficient and cares for the brands he showcases.'
        },
        {
            client: 'Line 8 Pte Ltd',
            text: 'Ryan and the team have been incredible to work with. Initiative was taken to introduce other business owners and partners that have strong synergy to us. This allow us to form good business partnerships with them like TDI Interior, An Digital Lock & Grey and Sanders.'
        },
    ];
    const data2 = [
        {
            client: 'Rezt + Relax',
            text: 'Working very closely with Ryan, we were impressed with his professionalism and dedication to his work. It is a pleasant experience working with Renoking, especially Ryan, and not forgetting the whole production team!'
        },
        {
            client: 'Home A Genius',
            text: 'Very responsive client and answered to our requests/questions at his very best. Delivered message to viewers in a very clear, understandable and concise manner. Really like how he can engage the viewers so well despite such technical and complex topic.'
        }
    ];
    const data3 = [
        {
            client: 'Woosa',
            text: 'One of most effective influencers in the online space with extremely high engagement with his audience. Ryan has been a breeze to work with, and is someone who actually cares for the brands he partners with.The amount of research and dedication that goes into supporting his sponsors displays his incredible work ethic.'
        },
        {
            client: 'Klook',
            text: 'It has been a pleasure working with the Get Lost team! They were able to understand and bring our vision to life. Their creative spin also brought the video to the next level. This is truly a team that speaks through their work'
        }
    ];

    return (
        <div id='Testimonials' className='tms-container'>
            <div className='tms-contents'>
                {/* {
                    index === 1 && data1.map(d => (
                        <div className='tms-content'>
                            <img src={QuoteImg} width={'30px'}/>
                            <p className='tms-paragraph'>{d.text}</p>
                            <h1 className='tms-client'>{d.client}</h1>
                        </div>
                    ))
                }
                {
                    index === 2 &&  data2.map(d => (
                        <div className='tms-content'>
                            <img src={QuoteImg} width={'30px'}/>
                            <p className='tms-paragraph'>{d.text}</p>
                            <h1 className='tms-client'>{d.client}</h1>
                        </div>
                    ))
                }
                {
                    index === 3 && data3.map(d => (
                        <div className='tms-content'>
                            <img src={QuoteImg} width={'30px'}/>
                            <p className='tms-paragraph'>{d.text}</p>
                            <h1 className='tms-client'>{d.client}</h1>
                        </div>
                    ))
                } */}
            </div>
        </div>
    )
}

export default Testimonials;
