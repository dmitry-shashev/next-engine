import PaginationHelper from './pagination.helper'
import { getPagination } from '../../tests/test-data'

describe('pagination.helper', () => {
  it('getCurrentPage', () => {
    const pagination = getPagination()
    expect(PaginationHelper.getCurrentPage(pagination)).toBe(3)
    expect(
      PaginationHelper.getCurrentPage({
        ...pagination,
        offset: 40,
      })
    ).toBe(5)
    expect(
      PaginationHelper.getCurrentPage({
        ...pagination,
        offset: 0,
      })
    ).toBe(1)
    expect(
      PaginationHelper.getCurrentPage({
        ...pagination,
        limit: 20,
      })
    ).toBe(2)
    expect(
      PaginationHelper.getCurrentPage({
        ...pagination,
        limit: 0,
      })
    ).toBe(1)
  })

  it('getCurrentOffset', () => {
    const pagination = getPagination()
    expect(PaginationHelper.getCurrentOffset(pagination, 3)).toBe(20)
    expect(PaginationHelper.getCurrentOffset(pagination, 0)).toBe(0)
  })

  it('applyPaginationToData', () => {
    const testData: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(
      PaginationHelper.applyPaginationToData(testData, {
        offset: 2,
        limit: 2,
        total: testData.length,
      })
    ).toEqual([3, 4])
    expect(testData.length).toBe(8)
  })
})
