import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <ul className='nav__list'>
                <li className="nav__list__item">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? `nav__list__item__link active` : 'nav__list__item__link'}>Home</NavLink>
                </li>
                <li className="nav__list__item">
                    <NavLink to={'/about'} className={({ isActive }) => isActive ? `nav__list__item__link active` : 'nav__list__item__link'}>About</NavLink>
                </li>
                <li className="nav__list__item">
                    <NavLink to={'/contact'} className={({ isActive }) => isActive ? `nav__list__item__link active` : 'nav__list__item__link'}>Contact</NavLink>
                </li>
                <li className="nav__list__item">
                    <NavLink to={'/products'} className={({ isActive }) => isActive ? `nav__list__item__link active` : 'nav__list__item__link'}>Products</NavLink>
                </li>
                <li className="nav__list__item">
                    <NavLink to={'/gallery'} className={({ isActive }) => isActive ? `nav__list__item__link active` : 'nav__list__item__link'}>Gallery</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
