import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

interface RequestState {
  requests: Record<string, boolean>
}

const initialState: RequestState = {
  requests: {},
}

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    startRequest(state, action: PayloadAction<string>) {
      state.requests[action.payload] = true
    },

    stopRequest(state, action: PayloadAction<string>) {
      delete state.requests[action.payload]
    },
  },
})

const getRequestState = (state: RootState): RequestState => state.requestReducer

export const getStartedRequests = createSelector(
  getRequestState,
  (requestsState) =>
    (requestTypes: Array<string>): Array<string> => {
      return requestTypes.filter((rt) => !!requestsState.requests[rt])
    }
)

export default requestSlice.reducer
