import { render } from '@testing-library/react'
import Layout from './Layout'
import EMPTY_PAGE_META from '@lib/constants/empty-page-meta'
import LayoutKind from '@lib/constants/layout-kind'
import TopNav from '@components/primitive/TopNav/TopNav'
import { ariaLabelInTheDocument } from '@tests/utils'

jest.mock('@components/primitive/TopNav/TopNav', (): typeof TopNav => {
  return ({ pageMeta }) => <div aria-label="Top Nav">{pageMeta.path}</div>
})

describe('Layout', () => {
  it('component', async () => {
    render(
      <Layout
        pageMeta={{
          ...EMPTY_PAGE_META,
          layoutKind: LayoutKind.Main,
        }}
      >
        <div aria-label="Test Content" />
      </Layout>
    )
    await ariaLabelInTheDocument('Test Content')
  })
})
