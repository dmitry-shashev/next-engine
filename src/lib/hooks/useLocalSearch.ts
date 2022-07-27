import { useState } from 'react'
import StrHelper from '@lib/helpers/str.helper'

interface UseLocalSearchResult<T> {
  search: string
  setSearch: (newSearch: string) => void
  filteredData: Array<T>
}

function useLocalSearch<T>(
  data: Array<T>,
  baseSearchValue: string,
  filterFields: Array<keyof T>
): UseLocalSearchResult<T> {
  const [search, setSearch] = useState<string>(baseSearchValue ?? '')

  const filteredData = data.filter((elem) =>
    StrHelper.isSubstringInObj(elem, filterFields, search)
  )

  return {
    search,
    setSearch,
    filteredData,
  }
}

export default useLocalSearch
