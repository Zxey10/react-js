import React from 'react'
import styles from './Navbar.module.scss'
import { Nav, NavLogo, NavText, NavBrand } from './NavbarElements'
import logo from '../../assets/images/youtube.png'
import { HiOutlineSearch } from 'react-icons/hi'
import { BsFillMicFill } from 'react-icons/bs'
import { BiVideoPlus } from 'react-icons/bi'
import { MdApps } from 'react-icons/md'
import { AiOutlineBell } from 'react-icons/ai'
import earth from '../../assets/images/planet-earth.png'

export default function Navbar() {
    return (
        <Nav className={styles.nav}>
            <NavBrand>
                <NavLogo logo={logo} />
                <NavText>YouTube</NavText>
            </NavBrand>
            <div className='nav__search'>
                <div className='nav_search-inp'>
                    <input className='nav__search__input' type="text" placeholder='Search'></input>
                    <button className='nav__search__button'>
                        <HiOutlineSearch className='nav__search__icon' color='white' />
                    </button>
                </div>
                <button className='nav_search__button--mic' aria-label='Search with your voice'>
                    <BsFillMicFill className='nav__search__icon' color='white' />
                </button>
            </div>
            <div className='nav__icons'>
                <ul className='nav__icons-list'>
                    <li><button className='nav__icons-btn'><BiVideoPlus color='white' /></button></li>
                    <li><button className='nav__icons-btn'><MdApps color='white' /></button></li>
                    <li><button className='nav__icons-btn'><AiOutlineBell color='white' /></button></li>
                    <li><button className='nav__icons-btn'><img src={earth} className='nav__icons-img' alt='Loading ...'></img></button></li>
                </ul>
            </div>
        </Nav>
    )
}
