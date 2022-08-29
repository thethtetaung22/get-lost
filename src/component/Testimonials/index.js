import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from 'react';
import './Testimonials.css';
import QuoteImg from '../../assets/images/quote.svg'

var Carousel = require('react-responsive-carousel').Carousel;

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            client: 'Lucky Khoon Bathroom Studio',
            text: 'Ryan and the team was a absolute pleasure to work with for the collaboration. Great work ethics, efficient and cares for the brands he showcases.'
        },
        {
            client: 'Line 8 Pte Ltd',
            text: 'Ryan and the team have been incredible to work with. Initiative was taken to introduce other business owners and partners that have strong synergy to us. This allow us to form good business partnerships with them like TDI Interior, An Digital Lock & Grey and Sanders.'
        },
        {
            client: 'Rezt + Relax',
            text: 'Working very closely with Ryan, we were impressed with his professionalism and dedication to his work. It is a pleasant experience working with Renoking, especially Ryan, and not forgetting the whole production team!'
        },
        {
            client: 'Home A Genius',
            text: 'Very responsive client and answered to our requests/questions at his very best. Delivered message to viewers in a very clear, understandable and concise manner. Really like how he can engage the viewers so well despite such technical and complex topic.'
        },
        {
            client: 'Woosa',
            text: 'One of most effective influencers in the online space with extremely high engagement with his audience. Ryan has been a breeze to work with, and is someone who actually cares for the brands he partners with.The amount of research and dedication that goes into supporting his sponsors displays his incredible work ethic.'
        },
        {
            client: 'Klook',
            text: 'It has been a pleasure working with the Get Lost team! They were able to understand and bring our vision to life. Their creative spin also brought the video to the next level. This is truly a team that speaks through their work'
        }
    ];

    const handleChangeSlide = (action) => {
        if (action === 'previous') {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
        } else {
            setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
        }
    }

    return (
        <div id='Testimonials' className='tms-container'>
            <div className="tms-body">
                <img src='/arrow-left.svg' alt='arrow-left' className='tms-arrow' width={30} height={30} onClick={() => handleChangeSlide('previous')}/>
                <Carousel showArrows={false} showIndicators={false} showStatus={false} className={'carousel'} infiniteLoop={true} selectedItem={currentSlide}>
                    <div className="carousel-content">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <img src={QuoteImg} width={'30px'} height={'30px'} alt={'quote'} style={{ maxWidth: '30px' }}/>
                            <p className='tms-paragraph'>{data[0].text}</p>
                            <h1 className='tms-client'>{data[0].client}</h1>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <img src={QuoteImg} width={'30px'} height={'30px'} alt={'quote'} style={{ maxWidth: '30px' }}/>
                            <p className='tms-paragraph'>{data[1].text}</p>
                            <h1 className='tms-client'>{data[1].client}</h1>
                        </div>
                    </div>

                    <div className="carousel-content">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <img src={QuoteImg} width={'30px'} height={'30px'} alt={'quote'} style={{ maxWidth: '30px' }}/>
                            <p className='tms-paragraph'>{data[2].text}</p>
                            <h1 className='tms-client'>{data[2].client}</h1>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <img src={QuoteImg} width={'30px'} height={'30px'} alt={'quote'} style={{ maxWidth: '30px' }}/>
                            <p className='tms-paragraph'>{data[3].text}</p>
                            <h1 className='tms-client'>{data[3].client}</h1>
                        </div>
                    </div>

                    <div className="carousel-content">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <img src={QuoteImg} width={'30px'} height={'30px'} alt={'quote'} style={{ maxWidth: '30px' }}/>
                            <p className='tms-paragraph'>{data[4].text}</p>
                            <h1 className='tms-client'>{data[4].client}</h1>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <img src={QuoteImg} width={'30px'} height={'30px'} alt={'quote'} style={{ maxWidth: '30px' }}/>
                            <p className='tms-paragraph'>{data[5].text}</p>
                            <h1 className='tms-client'>{data[5].client}</h1>
                        </div>
                    </div>
                </Carousel>
                <img src='/arrow-right.svg' alt='arrow-right' className='tms-arrow' width={30} height={30} onClick={() => handleChangeSlide('next')}/>
            </div>
        </div>
    )
}

export default Testimonials;
