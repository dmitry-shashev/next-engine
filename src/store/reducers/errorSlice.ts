import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

// action.type -> message
interface ErrorState {
  errors: Record<string, string>
}

const initialState: ErrorState = {
  errors: {},
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    storeError(
      state,
      action: PayloadAction<{ actionType: string; message: string }>
    ) {
      state.errors[action.payload.actionType] = action.payload.message
    },

    clearError(state, action: PayloadAction<string>) {
      delete state.errors[action.payload]
    },
  },
})

const getErrorState = (state: RootState): ErrorState => state.errorReducer

export const getError = createSelector(
  getErrorState,
  (errorsState) =>
    (errorType: string): string => {
      return errorsState.errors[errorType] ?? ''
    }
)

export default errorSlice.reducer
