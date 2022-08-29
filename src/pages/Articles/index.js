import React from 'react'
import ArticlesComponent from '../../component/ArticlesComponent';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';

const Articles = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <ArticlesComponent />
      <Footer />
    </div>
  )
}

export default Articles;