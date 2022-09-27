import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    <ImageSlider currentSlide={2}/>
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('root')
);
