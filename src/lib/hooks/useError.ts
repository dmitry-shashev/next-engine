import { useAppDispatch, useAppSelector } from '@store/store'
import { errorSlice, getError } from '@store/reducers/errorSlice'

const { clearError } = errorSlice.actions

function useError(actionType: string): [string, () => void] {
  const dispatch = useAppDispatch()
  const error = useAppSelector(getError)(actionType)
  const resetError = (): void => {
    dispatch(clearError(actionType))
  }
  return [error, resetError]
}

export default useError
