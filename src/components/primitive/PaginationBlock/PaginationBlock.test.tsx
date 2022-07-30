import { render } from '@testing-library/react'
import PaginationBlock from './PaginationBlock'
import { getPagination } from '@tests/test-data'
import { clickByRole, nextPaginationPage } from '@tests/utils'

describe('PaginationBlock', () => {
  it('component', async () => {
    const onChange = jest.fn()
    const pagination = getPagination()

    render(<PaginationBlock pagination={pagination} onChange={onChange} />)

    // next page
    await nextPaginationPage()
    expect(onChange).toBeCalledWith({
      ...pagination,
      offset: pagination.limit + pagination.offset,
    })

    // change the limit
    await clickByRole('button')
    // select 25
    await clickByRole('option', 2)
    expect(onChange).toBeCalledWith({
      ...pagination,
      limit: 25,
      offset: 0,
    })
  })
})
