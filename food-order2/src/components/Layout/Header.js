import React,{ Fragment } from 'react'
import styles from './Header.module.css'
import food_img from '../../assets/food.jpg'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={food_img} alt="food" />
      </div>
    </Fragment>
  )
}
