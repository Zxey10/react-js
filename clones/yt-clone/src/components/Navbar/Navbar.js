import React from 'react'
import styles from './Navbar.module.scss'
import { Nav, NavLogo, NavText, NavBrand } from './NavbarElements'
import logo from '../../assets/images/youtube.png'

export default function Navbar() {
    return (
        <Nav className={styles.nav}>
            <NavBrand>
                <NavLogo logo={logo} />
                <NavText>YouTube</NavText>
            </NavBrand>
        </Nav>
    )
}
