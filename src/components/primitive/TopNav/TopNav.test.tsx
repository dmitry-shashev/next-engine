import { render } from '@testing-library/react'
import TopNav from './TopNav'
import { getPageMeta } from '@tests/test-data'
import { linkIsVisible } from '@tests/utils'
import PagePath from '@lib/constants/page-path'

describe('TopNav', () => {
  it('component', async () => {
    const pageMeta = getPageMeta()
    render(<TopNav pageMeta={pageMeta} />)
    await linkIsVisible('SSR Catalog', PagePath.CATALOG)
  })
})
