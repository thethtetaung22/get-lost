import React from 'react';
import './ArticlesComponent.css';
import { motion } from 'framer-motion';

const Item = ({ url, heading, desc }) => {
  return (
    <div className='item-container'>
      <div className='img-container'>
        <img className='img-vlog' src={url} alt='idfmage'/>
      </div>

      <span className='blog-heading-small'>{ heading }</span>
      <div className='blog-detail'>{desc}</div>
      <div className='read-more'>
          <span>Read more</span> 
          <motion.img 
              src='https://uploads-ssl.webflow.com/61e3676105f1b2c1ff4012ca/61e3676105f1b279b34012e0_Arrow%20-%20Right.svg' 
              style={{
                  paddingTop: '4px',
                  paddingLeft: '5px'
              }}
          />
      </div>
    </div>
  )
}

const ArticlesComponent = () => {
  return (
    <div className='main'>
        <h3 className='article-header'>ARTICLES</h3>
        <div style={{ display: 'flex', maxWidth: '80%' }}>
            <Item 
                url={'https://uploads-ssl.webflow.com/628450f89c7d1ec07271bb35/6298547e478d1e34add403a7_Balloon-p-1600.jpeg'} 
                heading={'5 Things We Learnt in Sydney'}
                desc={'Make sure to ALWAYS carry around sunscreen because Mr Sun is vicious! Ideally, it should be reapplied every two hours for consistent protection, especially after water activities or sweating.'}
            />
            <Item url={'https://uploads-ssl.webflow.com/628450f89c7d1ec07271bb35/62985b5ed5fbc94d08ecee68_Camera-p-1600.jpeg'} 
            heading={'5 Things We Learnt in Sydney'}
            desc={'Make sure to ALWAYS carry around sunscreen because Mr Sun is vicious! Ideally, it should be reapplied every two hours for consistent protection, especially after water activities or sweating.'}/>
        </div>
    </div>
  )
}

export default ArticlesComponent