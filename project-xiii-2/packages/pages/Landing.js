import React from 'react'

const Landing = () => {
  return (
    <div className='landing'>
      <p className='landing__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ligula quis viverra pulvinar. Maecenas accumsan sed mi nec rutrum. Ut consequat tincidunt magna, vitae egestas massa consequat in. Nam quis rhoncus odio. </p>
      <div className="landing__btn">
        <button className='landing__btn--orange btn'>Show Products</button>
        <button className='landing__btn--pink btn'>Contact Us</button>
      </div>
      <div className="landing__imgs">
        <div className="landing__imgs--big">
        </div>
        <div className="landing__imgs--medium">
        </div>
        <div className="landing__imgs__small">
          <div className="landing__imgs__small--sm1">
          </div>
          <div className="landing__imgs__small--sm2">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
