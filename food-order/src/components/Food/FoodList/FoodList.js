import React from 'react'
import Card from '../../UI/Card/Card'
import FoodItem from '../FoodItem/FoodItem'
import styles from './FoodList.module.css'

export default function FoodList(props) {
  return (
    <Card className={styles.foodList}>
      {props.meals.map(meal => (
          <FoodItem key={meal.id} meal={meal}/>
      ))}
    </Card>
  )
}
