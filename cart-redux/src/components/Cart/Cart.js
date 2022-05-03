import React from 'react'
import Card from '../UI/Card'
import styles from './Cart.module.scss'
import Button from '../UI/Button'
import { useSelector } from 'react-redux'
import { cartActions } from '../store/cart'
import { useDispatch } from 'react-redux'

export default function Cart() {

    const cartItems = useSelector(state => state.cart.items);
    // const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispacthItems = useDispatch();

    console.log(cartItems)

    return (
        <Card className={styles.cart}>
            <h2>Your Shopping Cart</h2>
            <hr />
            {cartItems.map(item => (
                <Card key={Math.random()} className={styles.cartItem}>
                <h1>{item.name}</h1>
                <h2>x{item.amount}</h2>
                <h2>{`${item.amount * item.price} ${' '} ($${item.price}/item)`}</h2>
                <div>
                    <Button onClick={() => {dispacthItems(cartActions.removeFromCart({item: item}))}}>-</Button>
                    <Button onClick={() => {dispacthItems(cartActions.addToCart({item: item}))}}>+</Button>
                </div>
            </Card>
            ))}
        </Card>
    )
}
