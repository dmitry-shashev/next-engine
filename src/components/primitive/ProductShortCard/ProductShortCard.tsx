import React, { FC } from 'react'
import styles from './ProductShortCard.module.scss'
import ProductModel from '@lib/interfaces/product.model'
import PageHelper from '@lib/helpers/page.helper'
import PagePath from '@lib/constants/page-path'
import Link from 'next/link'
import Image from 'next/image'
import StrHelper from '@lib/helpers/str.helper'

interface Props {
  product: ProductModel
}

const ProductShortCard: FC<Props> = ({ product }) => {
  return (
    <Link href={PageHelper.buildUrl(PagePath.PRODUCT_ID, product.id)}>
      <a className={styles.wrap} aria-label="Product Card">
        <div className={styles.imageWrap}>
          <Image src={product.image} width={200} height={200} />
        </div>

        <div className={styles.content}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.category}>{product.category}</div>
          <div className={styles.price}>
            {StrHelper.formatMoney(product.price)}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductShortCard
