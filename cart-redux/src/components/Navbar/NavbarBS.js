import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Card from '../UI/Card';
import styles from './Navbar.module.scss'
import Button from '../UI/Button';


export default function NavbarBS() {
  return (
    <Card className={styles.navbar}>
      <h1>Redux Cart</h1>
      <Button>Cart 0</Button>
    </Card>
  )
}
