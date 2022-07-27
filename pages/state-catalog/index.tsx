import React, { useEffect } from 'react'
import LayoutKind from '@lib/constants/layout-kind'
import Page from '@lib/interfaces/page/page'
import PagePath from '@lib/constants/page-path'
import ProductsListComplex from '@components/smart/ProductsListComplex/ProductsListComplex'
import { useAppDispatch } from '@store/store'
import { productsSlice } from '@store/reducers/productSlice'

const { requestProducts } = productsSlice.actions

const StateCatalogPage: Page = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(requestProducts())
  }, [])

  return <ProductsListComplex />
}

StateCatalogPage.pageMeta = {
  title: 'New Page',
  description: 'New Page',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.STATE_CATALOG,
}

export default StateCatalogPage
