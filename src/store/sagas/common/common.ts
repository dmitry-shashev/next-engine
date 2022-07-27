import { put } from '@redux-saga/core/effects'
import { errorSlice } from '@store/reducers/errorSlice'
import { requestSlice } from '@store/reducers/requestSlice'

const { storeError, clearError } = errorSlice.actions
const { startRequest, stopRequest } = requestSlice.actions

export function* simpleRequest<T>(
  actionType: string,
  apiGenerator: () => Generator,
  responseGenerator: (data: T) => Generator,
  errorCallback?: (e: Error) => void
): Generator {
  try {
    yield put(clearError(actionType))
    yield put(startRequest(actionType))
    const data = (yield apiGenerator()) as T
    yield responseGenerator(data)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    // send the error somewhere
    yield put(
      storeError({
        actionType,
        message: e.message ?? 'Error',
      })
    )
    if (e.message) {
      // ToastHelper.error(e.message)
    }
    errorCallback?.(e)
  } finally {
    yield put(stopRequest(actionType))
  }
}
