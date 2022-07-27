import PaginationModel from '@lib/interfaces/pagination.model'

abstract class PaginationHelper {
  public static getCurrentPage(pagination: PaginationModel): number {
    return pagination.offset / (pagination.limit || 1) + 1
  }

  public static getCurrentOffset(
    pagination: PaginationModel,
    currentPage: number
  ): number {
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
