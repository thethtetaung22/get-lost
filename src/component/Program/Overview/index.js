import React from 'react'
import { Container } from './Elements'
import './Overview.css';

const Overview = () => {

    return (
        <Container>
            <p className='overview-text'>
                Join the team’s shenanigans with our boss, Ryan Tan, 
                <br />as we travel around the world filming anything and 
                <br />everything with overpriced equipment! <br/><br/>
                Through our channel, we want to provide entertainment 
                <br />covering comedic, lifestyle and informative aspects! <br /><br/>
                Where to explore in Singapore? What is there to do? 
                <br />What else is there outside of Singapore? <br />
                We make it a point to bring answers to our viewers, 
                <br />with a more personal &#38; fun approach :D
            </p>

            <p className='overview-header-text'>
                Don’t like us? GET LOST.
            </p>

            <div className='embeded-video-wrapper'>
                <div>
                    <iframe width="484" height="272" src="https://www.youtube.com/embed/7Ya11Tr66oY" title="Get Lost In Sydney | Official Cinematic Teaser [4K]" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </Container>
    )
}

export default Overview