import React,{ Fragment, useContext } from 'react'
import styles from './Header.module.css'
import food_img from '../../assets/food.jpg'
import HeaderCartButton from './HeaderCartButton'
import { AuthContext } from '../../store/auth-context'
import WaitingCart from '../WaitingCart/WaitingCart'


export default function Header(props) {

  const authContext = useContext(AuthContext)

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        {authContext.isLoggedIn && <button onClick={authContext.logout}>Logout</button>}
        <WaitingCart />
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={food_img} alt="food" />
      </div>
    </Fragment>
  )
}
