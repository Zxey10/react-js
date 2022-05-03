import React, { Fragment } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './Product.module.scss'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart'
import { PRODUCTS } from '../data/products'

export default function Product() {

  const dispacthItems = useDispatch()

  function addToCartHandler(product) {
    dispacthItems(cartActions.addToCart({item: product}))
  }

  return (
    <Fragment>
      {PRODUCTS.map(product => (
        <Card key={Math.random()} className={styles.product}>
          <h2>{product.name}</h2>
          <span>${product.price}</span>
          <p>{product.description}</p>
          <Button onClick={addToCartHandler.bind(null,product)}>Add to Cart</Button>
        </Card>
      ))}
    </Fragment>
  )
}
