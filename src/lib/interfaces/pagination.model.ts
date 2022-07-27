import PaginationLimit from '@lib/constants/pagination-limit'

interface PaginationModel {
  limit: PaginationLimit
  offset: number
  total: number
}

export default PaginationModel
