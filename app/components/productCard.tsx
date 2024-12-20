import React from 'react'
import AddToCart from './addToCart'
import styles from "./Product/product.module.css"
const productCard = () => {
  return (
    <div className={styles.card}>
        <AddToCart />
    </div>
  )
}

export default productCard