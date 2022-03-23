import React, { Fragment, useContext, useState } from 'react'
import Card from '../UI/Card/Card'
import styles from './Navbar.module.css'
import Button from '../UI/Button/Button'
import AuthContext from '../store/auth-context'
import ReactDOM from 'react-dom'
import Cart from '../Cart/Cart'
import { Cart4 } from 'react-bootstrap-icons'

export default function Navbar() {

  const ctx = useContext(AuthContext)
  const [isVisible,setIsVisible] = useState(false)
  
  function onClose(){
    setIsVisible(false)
  }

  function showCart(){
    setIsVisible(true)
  }

  return (
    <Fragment>
      {isVisible && ReactDOM.createPortal(<Cart onClose={onClose}/>, document.getElementById('popup'))}
      <Card className={styles.navbar}>
        <h2>ReactMeals</h2>
        <Button onClick={showCart}> <Cart4 />&nbsp; Your Cart &nbsp;
          <span style={{backgroundColor:'darkorange',borderRadius:'5px',padding:'0.2rem'}}>{ctx.size}</span>
        </Button>
      </Card>
    </Fragment>
  )
}
