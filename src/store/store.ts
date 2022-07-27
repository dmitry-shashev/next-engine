import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import requestReducer from '@store/reducers/requestSlice'
import errorReducer from '@store/reducers/errorSlice'
import productsReducer from '@store/reducers/productSlice'
import { watchProductsSaga } from '@store/sagas/products.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  reducer: {
    requestReducer,
    errorReducer,
    productsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

sagaMiddleware.run(watchProductsSaga)
