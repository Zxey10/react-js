import React from 'react'
import Card from '../UI/Card/Card'
import styles from './Header.module.css'

/* <img src={process.env.PUBLIC_URL + '/img/food.jpg'} alt='food'></img> */

export default function Header() {

    

  return (
    <Card className={styles.header}>
        <Card className={styles.subHeader}>
            <h2>Delicious Food Delivered To You!</h2>
            <p>Mbfg owi howe weioirwr rwerowerw ewurw rpweoruew9prdjf Mbfg owi howe weioirwr rwerowerw ewurw rpweoruew9prdjf</p>
            <p>Mbfg owi howe weioirwr rwerowerw ewurw rpweoruew9prdjf Mbfg owi howe weioirwr rwerowerw ewurw rpweoruew9prdjf</p>
        </Card>
    </Card>
  )
}
