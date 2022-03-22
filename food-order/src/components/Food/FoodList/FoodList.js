import React, { Fragment } from 'react'
import Card from '../../UI/Card/Card'
import FoodItem from '../FoodItem/FoodItem'
import styles from './FoodList.module.css'
import Cart from '../../Cart/Cart'
import ReactDOM from 'react-dom'

export default function FoodList(props) {
  return (
    <Fragment>
      <Card className={styles.foodList}>
        {props.meals.map(meal => (
          <FoodItem key={meal.id} meal={meal} />
        ))}
      </Card>
    </Fragment>
  )
}
