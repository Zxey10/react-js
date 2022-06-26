import React from 'react'
import logo from '../assets/images/logo.jpeg'

const Landing = () => {
    return (
        <div className='header'>
            <img className='header__img' src={logo} alt="Logo" />
            <h1 className='header__title'>Lorem ipsum dolor sit amet</h1>
            <p className='header__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi assumenda itaque nihil, obcaecati non doloremque iste recusandae, quas, incidunt fugiat sed rem expedita illo aliquid nobis officiis? Laudantium, rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut distinctio, fuga reprehenderit facilis incidunt! Quis mollitia quibusdam, dolor laudantium soluta perspiciatis architecto at ullam voluptatem officiis similique vitae modi!</p>
        </div>
    )
}

export default Landing;
