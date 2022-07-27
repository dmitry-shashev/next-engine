import { getStartedRequests } from '@store/reducers/requestSlice'
import { useAppSelector } from '@store/store'

function useActiveRequests(requests: Array<string>): boolean {
  const startedRequests = useAppSelector(getStartedRequests)(requests)
  return startedRequests.length > 0
}

export default useActiveRequests
