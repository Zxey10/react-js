import React,{useState, useContext} from 'react'
import AuthContext from '../../store/auth-context'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import styles from './FoodItem.module.css'

export default function FoodItem(props) {

    const [amountValue,setAmountValue] = useState(1)
    const [isInCart,setIsInCart] = useState(false)
    const ctx = useContext(AuthContext)


    function amountHandler(e){
        console.log(e.target.value);
        setAmountValue(e.target.value)
    }

    function addItemToCart(){
        ctx.addItem(props.meal,amountValue,isInCart)
        setIsInCart(true)
        ctx.addOnSize(amountValue)
        ctx.addOnTotal(props.meal.price * amountValue)
    }

    return (
        <Card className={styles.foodItem}>
            <div>
                <h4>{props.meal.name}</h4>
                <p>{props.meal.info}</p>
                <h5>${props.meal.price}</h5>
            </div>
            <div className={styles.add}>
                <label htmlFor='amount'>Amount: &nbsp;
                    <input value={amountValue} type='number' id='amount' onChange={amountHandler}></input>
                </label>
                <Button onClick={addItemToCart} type="button">+Add Item</Button>
            </div>
        </Card>
    )
}
