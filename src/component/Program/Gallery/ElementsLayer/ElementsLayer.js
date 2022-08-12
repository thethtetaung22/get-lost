import React from 'react';
import MapImage from '../../../../assets/images/zoom-resources/download.png'
import CameraImage from '../../../../assets/images/zoom-resources/screen.jpeg'
import './ElementsLayer.css';

const ElementsLayer = () => {
  return (
    <div className='container'>
      <img className='img-map' src={MapImage} width={'80%'} height={'auto'} />
      {/* <img className='img-camera' src={CameraImage} width={'20%'} height='auto' /> */}
    </div>
  )
}

export default ElementsLayer;
