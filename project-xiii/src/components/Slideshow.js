import React from 'react'
import Slider from "react-slick";
import img1 from '../assets/images/l1.jpg'
import img2 from '../assets/images/l2.jpg'
import img3 from '../assets/images/l3.jpg'
import img4 from '../assets/images/l4.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slideshow = () => {
  return (
    <div className='slider'>
      <Slider 
        dots={true}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}>
        <div className='slider__img'>
          <a href="#link"><img src={img1} alt='Loading... ' /></a>
        </div>
        <div className='slider__img'>
          <a href="#link"><img src={img2} alt='Loading... ' /></a>
        </div>
        <div className='slider__img'>
          <a href="#link"><img src={img3} alt='Loading... ' /></a>
        </div>
        <div className='slider__img'>
          <a href="#link"><img src={img4} alt='Loading... ' /></a>
        </div>
        <div className='slider__img'>
          <a href="#link"><img src={img2} alt='Loading... ' /></a>
        </div>
      </Slider>
    </div>
  )
}

export default Slideshow
