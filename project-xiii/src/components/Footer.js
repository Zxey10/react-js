import React from 'react'
import icon_li from '../assets/images/li.png'
import icon_fb from '../assets/images/fb.png'
import icon_gn from '../assets/images/gh.png'


const Footer = () => {
  return (
    <div className='footer'>
        <hr />
      <ul className='footer__list'>
        <li><a href='/5'><img src={icon_fb} alt="FB" /></a></li>
        <li><a href='/5'><img src={icon_li} alt="LI" /></a></li>
        <li><a href='/5'><img src={icon_gn} alt="GH" /></a></li>
      </ul>
      <p className='footer__cp'>@Copyright. All rights reserved.</p>
    </div>
  )
}

export default Footer
