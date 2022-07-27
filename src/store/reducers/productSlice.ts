import ProductModel from '@lib/interfaces/product.model'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface ProductState {
  products: Array<ProductModel>
}

const initialState: ProductState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    requestProducts(_state, _action: PayloadAction) {},
    setProducts(
      state: ProductState,
      action: PayloadAction<Array<ProductModel>>
    ) {
      state.products = action.payload
    },
  },
})

const getProductsState = (state: RootState): ProductState =>
  state.productsReducer

export const getProducts = createSelector(
  getProductsState,
  (productsState) => productsState.products
)

export default productsSlice.reducer
