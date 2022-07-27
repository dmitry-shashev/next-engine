import React from 'react'
import LayoutKind from '@lib/constants/layout-kind'
import PagePath from '@lib/constants/page-path'
import PageWithProps from '@lib/interfaces/page/page-with-props'
import { GetStaticPropsResult } from 'next'
import ProductModel from '@lib/interfaces/product.model'
import ProductsList from '@components/composite/ProductsList/ProductsList'
import { REVALIDATE_TIME } from '@lib/constants/site'
import RequestService from '@lib/services/request.service'

interface Props {
  products: Array<ProductModel>
}

const CatalogPage: PageWithProps<Props> = ({ products }) => {
  return (
    <div>
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await RequestService.getAllProducts()
  return {
    props: {
      products,
    },
    revalidate: REVALIDATE_TIME,
  }
}

CatalogPage.pageMeta = {
  title: 'Catalog',
  description: 'Products Catalog',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.CATALOG,
}

export default CatalogPage
