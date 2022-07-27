import React, { FC } from 'react'
import ProductsList from '@components/composite/ProductsList/ProductsList'
import { useAppSelector } from '@store/store'
import { getProducts, productsSlice } from '@store/reducers/productSlice'
import useActiveRequests from '@lib/hooks/useActiveRequests'
import ContentBlock from '@components/primitive/ContentBlock/ContentBlock'

const { requestProducts } = productsSlice.actions

const ProductsListComplex: FC = () => {
  const products = useAppSelector(getProducts)
  const loading = useActiveRequests([requestProducts.type])

  return (
    <ContentBlock data={products} loading={loading}>
      <ProductsList products={products} />
    </ContentBlock>
  )
}

export default ProductsListComplex
