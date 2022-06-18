import React, { Fragment } from 'react'
import styles from './Hamburger.module.scss';

export default function Hamburger() {

  const burger1 = `${styles.burger} ${styles.burger1}`
  const burger2 = `${styles.burger} ${styles.burger2}`
  const burger3 = `${styles.burger} ${styles.burger3}`    

  return (
    <Fragment>
        <div className={styles.hamburger}>
            <div className={burger1}></div>
            <div className={burger2}></div>
            <div className={burger3}></div>
        </div>
    </Fragment>
  )
}
