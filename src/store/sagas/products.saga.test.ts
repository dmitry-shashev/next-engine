import { productsSlice } from '@store/reducers/productSlice'
import { requestProductsSaga } from './products.saga'
import { call, put } from '@redux-saga/core/effects'
import { getTestProductsList } from '@tests/test-data'
import RequestService from '@lib/services/request.service'
import { testSimpleRequest } from '@tests/utils'

describe('products.saga', () => {
  it('saga', async () => {
    const { requestProducts, setProducts } = productsSlice.actions
    const testProducts = getTestProductsList()
    testSimpleRequest(
      testProducts,
      requestProducts(),
      requestProductsSaga,
      (requestGenerator: Generator) => {
        expect(requestGenerator.next().value).toEqual(
          call(RequestService.getAllProducts)
        )
      },
      (responseGenerator: Generator) => {
        expect(responseGenerator.next().value).toEqual(
          put(setProducts(testProducts))
        )
      }
    )
  })
})
