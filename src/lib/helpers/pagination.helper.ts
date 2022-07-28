import PaginationModel from '@lib/interfaces/pagination.model'

abstract class PaginationHelper {
  public static getCurrentPage(pagination: PaginationModel): number {
    if (pagination.limit < 1) {
      return 1
    }
    return pagination.offset / pagination.limit + 1
  }

  public static getCurrentOffset(
    pagination: PaginationModel,
    currentPage: number
  ): number {
    if (currentPage < 2) {
      return 0
    }
    return (currentPage - 1) * pagination.limit
  }

  public static applyPaginationToData<T>(
    data: Array<T>,
    pagination: PaginationModel
  ): Array<T> {
    return data.slice(pagination.offset, pagination.offset + pagination.limit)
  }
}

export default PaginationHelper
