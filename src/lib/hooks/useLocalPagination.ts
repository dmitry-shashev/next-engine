import PaginationModel from '@lib/interfaces/pagination.model'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PaginationKey from '@lib/constants/pagination-key'
import { getCookie, setCookie } from 'cookies-next'
import PaginationHelper from '@lib/helpers/pagination.helper'
import PaginationLimit from '@lib/constants/pagination-limit'

interface UseLocalPaginationResult<T> {
  setPagination: (newPagination: PaginationModel) => void
  pagination: PaginationModel
  paginatedData: Array<T>
}

function useLocalPagination<T>(
  paginationKey: PaginationKey,
  data: Array<T>
): UseLocalPaginationResult<T> {
  const router = useRouter()
  const currentPaginationKey = `pagination-${paginationKey}`

  const [pagination, setPagination] = useState<PaginationModel>({
    offset: 0,
    limit: PaginationLimit.Default,
    total: data.length,
  })
  const [total, setTotal] = useState<number>(data.length)

  useEffect(() => {
    if (router.isReady) {
      const limit = Number(
        getCookie(currentPaginationKey) ?? PaginationLimit.Default
      )
      const offset = Number(router.query.offset ?? 0)
      setPagination({
        limit,
        total: data.length,
        offset,
      })
    }
  }, [router.isReady])

  const setPaginationInner = (newPagination: PaginationModel): void => {
    setPagination(newPagination)
    const newQuery: typeof router.query = {
      ...router.query,
      offset: String(newPagination.offset),
    }
    if (!newPagination.offset) {
      delete newQuery.offset
    }
    router.push({
      query: newQuery,
    })
    setCookie(currentPaginationKey, newPagination.limit)
  }

  useEffect(() => {
    if (data.length !== total) {
      setTotal(data.length)
      setPaginationInner({
        limit: pagination.limit,
        total: data.length,
        offset: 0,
      })
    }
  }, [data, pagination])

  return {
    setPagination: setPaginationInner,
    pagination,
    paginatedData: PaginationHelper.applyPaginationToData(data, pagination),
  }
}

export default useLocalPagination
