import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './Product.module.scss'

export default function Product() {
  return (
    <Card className={styles.product}>
      <h2>Test</h2>
      <span>$6.00</span>
      <p>This is a first product</p>
      <Button>Add to Cart</Button>
    </Card>
  )
}
