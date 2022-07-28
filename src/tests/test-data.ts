import ProductModel from '@lib/interfaces/product.model'
import PaginationModel from '../lib/interfaces/pagination.model'

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

export function getPagination(): PaginationModel {
  return {
    offset: 20,
    limit: 10,
    total: 100,
  }
}
