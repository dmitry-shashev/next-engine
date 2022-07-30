import ProductModel from '@lib/interfaces/product.model'
import PaginationModel from '@lib/interfaces/pagination.model'
import PageMeta from '@lib/interfaces/page/page-meta'
import PagePath from '@lib/constants/page-path'
import LayoutKind from '@lib/constants/layout-kind'
import BreadCrumbModel from '@lib/interfaces/bread-crumb.model'

export function getTestProduct(): ProductModel {
  return {
    id: 2,
    image: '/12',
    title: 't1',
    description: 'Some',
    category: 'c1',
    price: 23,
    rating: {
      rate: 12,
      count: 44,
    },
  }
}

export function getTestProductsList(): Array<ProductModel> {
  const result: Array<ProductModel> = []
  for (let i = 0; i < 12; ++i) {
    result.push({
      id: i,
      image: `/${i}`,
      title: `t${i}`,
      description: `Some ${i}`,
      category: `c${i}`,
      price: i * 10,
      rating: {
        rate: i * 100,
        count: i * 1000,
      },
    })
  }
  return result
}

export function getPagination(): PaginationModel {
  return {
    offset: 20,
    limit: 10,
    total: 100,
  }
}

export function getPageMeta(): PageMeta {
  return {
    title: 'Test Page',
    description: 'Some Test Page',
    path: PagePath.ABOUT,
    keywords: '1 2 3',
    layoutKind: LayoutKind.Main,
  }
}

export function getBreadCrumbs(): Array<BreadCrumbModel> {
  return [
    {
      label: '1',
      link: '/1',
    },
    {
      label: '2',
      link: '/2',
    },
    {
      label: '3',
    },
  ]
}
