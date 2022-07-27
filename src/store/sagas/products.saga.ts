import { productsSlice } from '@store/reducers/productSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { simpleRequest } from '@store/sagas/common/common'
import RequestService from '@lib/services/request.service'
import ProductModel from '@lib/interfaces/product.model'

const { requestProducts, setProducts } = productsSlice.actions

export function* requestProductsSaga(action: PayloadAction): Generator {
  yield simpleRequest(
    action.type,
    function* () {
      return yield call(RequestService.getAllProducts)
    },
    function* (products: Array<ProductModel>) {
      yield put(setProducts(products))
    }
  )
}

export function* watchProductsSaga(): Generator {
  yield takeEvery(requestProducts.type, requestProductsSaga)
}
