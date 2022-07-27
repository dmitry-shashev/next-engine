import ProductModel from '@lib/interfaces/product.model'

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
