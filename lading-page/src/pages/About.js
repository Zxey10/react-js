import React from 'react'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={img1} alt='Loading...' onDragStart={handleDragStart} role="presentation" />,
  <img src={img2} alt='Loading...' onDragStart={handleDragStart} role="presentation" />,
  <img src={img3} alt='Loading...' onDragStart={handleDragStart} role="presentation" />
];

export default function About() {
  return (
    <div className="slide-container">
      <AliceCarousel
        className='slider'
        mouseTracking items={items}
        autoPlayStrategy='none'
        autoPlay 
        infinite
        renderNextButton={false}
        autoPlayInterval={3000} />
    </div>
  )
}
