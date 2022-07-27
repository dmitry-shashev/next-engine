import React from 'react'
import LayoutKind from '@lib/constants/layout-kind'
import PagePath from '@lib/constants/page-path'
import StrHelper from '@lib/helpers/str.helper'
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import ProductModel from '@lib/interfaces/product.model'
import ProductDetailed from '@components/composite/ProductDetailed/ProductDetailed'
import PageWithProps from '@lib/interfaces/page/page-with-props'
import { REVALIDATE_TIME } from '@lib/constants/site'
import BreadCrumbsBlock from '@components/primitive/BreadCrumbsBlock/BreadCrumbsBlock'
import RequestService from '@lib/services/request.service'

interface Props {
  product: ProductModel
}

const ProductIdPage: PageWithProps<Props> = ({ product }) => {
  return (
    <div>
      <BreadCrumbsBlock
        data={[
          {
            label: 'Catalog',
            link: PagePath.CATALOG,
          },
          {
            label: product.category,
          },
          {
            label: product.title,
          },
        ]}
      />
      <ProductDetailed product={product} />
    </div>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const productId = StrHelper.base64Decode(params?.id ?? '')
  const product = await RequestService.getProduct(productId)
  return {
    props: {
      product,
    },
    revalidate: REVALIDATE_TIME,
  }
}

ProductIdPage.pageMeta = {
  title: 'New ID Page',
  description: 'New ID Page',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.PRODUCT_ID,
}

export default ProductIdPage
