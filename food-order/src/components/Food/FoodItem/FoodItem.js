import React from 'react'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import styles from './FoodItem.module.css'

export default function FoodItem(props) {
    return (
        <Card className={styles.foodItem}>
            <div>
                <h4>{props.meal.name}</h4>
                <p>{props.meal.info}</p>
                <h5>${props.meal.price}</h5>
            </div>
            <div className={styles.add}>
                <label htmlFor='amount'>Amount: &nbsp;
                    <input type='number' id='amount'></input>
                </label>
                <Button type="button">+Add Item</Button>
            </div>
        </Card>
    )
}
