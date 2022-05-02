import React from 'react'
import Card from '../UI/Card'
import styles from './Cart.module.scss'
import Button from '../UI/Button'

export default function Cart() {
    return (
        <Card className={styles.cart}>
            <h2>Your Shopping Cart</h2>
            <hr />
            <Card className={styles.cartItem}>
                <h1>Test Item</h1>
                <h2>x3</h2>
                <h2>$18.00($6.00/item)</h2>
                <div>
                    <Button>-</Button>
                    <Button>+</Button>
                </div>
            </Card>
        </Card>
    )
}
