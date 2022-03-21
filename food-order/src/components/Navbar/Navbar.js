import React, {Fragment} from 'react'
import Card from '../UI/Card/Card'
import styles from './Navbar.module.css'
import Button from '../UI/Button/Button'

export default function Navbar() {
  return (
    <Fragment>
      <Card className={styles.navbar}>
        <h2>ReactMeals</h2>
        <Button>Your Cart &nbsp;
          <span style={{backgroundColor:'darkorange',borderRadius:'5px',padding:'0.2rem'}}>0</span>
        </Button>
      </Card>
    </Fragment>
  )
}
