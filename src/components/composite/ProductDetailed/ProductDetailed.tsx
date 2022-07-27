import React, { FC } from 'react'
import styles from './ProductDetailed.module.scss'
import ProductModel from '@lib/interfaces/product.model'
import Image from 'next/image'
import StrHelper from '@lib/helpers/str.helper'

interface Props {
  product: ProductModel
}

const ProductDetailed: FC<Props> = ({ product }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          width={400}
          height={400}
          aria-label="Product Image"
        />
      </div>
      <div className={styles.contentWrap}>
        <div aria-label="title" className={styles.title}>
          {product.title}
        </div>
        <div aria-label="category" className={styles.category}>
          {product.category}
        </div>
        <div aria-label="description" className={styles.description}>
          {product.description}
        </div>
        <div aria-label="rating" className={styles.rating}>
          Rating: <span>{product.rating.rate}</span>
        </div>
        <div aria-label="price" className={styles.price}>
          Price: <span>{StrHelper.formatMoney(product.price)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailed
