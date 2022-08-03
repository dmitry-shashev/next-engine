import { render } from '@testing-library/react'
import EmptyLayout from './EmptyLayout'
import { ariaLabelInTheDocument } from '@tests/utils'
import EMPTY_PAGE_META from '@lib/constants/empty-page-meta'

describe('EmptyLayout', () => {
  it('component', async () => {
    render(
      <EmptyLayout pageMeta={EMPTY_PAGE_META}>
        <div aria-label="Test Content" />
      </EmptyLayout>
    )
    await ariaLabelInTheDocument('Test Content')
  })
})
