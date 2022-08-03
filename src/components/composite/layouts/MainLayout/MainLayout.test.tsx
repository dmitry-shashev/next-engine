import { render } from '@testing-library/react'
import MainLayout from './MainLayout'
import TopNav from '@components/primitive/TopNav/TopNav'
import EMPTY_PAGE_META from '@lib/constants/empty-page-meta'
import PagePath from '@lib/constants/page-path'
import { ariaLabelContainText, ariaLabelInTheDocument } from '@tests/utils'

jest.mock('@components/primitive/TopNav/TopNav', (): typeof TopNav => {
  return ({ pageMeta }) => <div aria-label="Top Nav">{pageMeta.path}</div>
})

describe('MainLayout', () => {
  it('component', async () => {
    render(
      <MainLayout
        pageMeta={{
          ...EMPTY_PAGE_META,
          path: PagePath.CATALOG,
        }}
      >
        <div aria-label="Test Content" />
      </MainLayout>
    )
    await ariaLabelInTheDocument('Test Content')
    await ariaLabelContainText('Top Nav', PagePath.CATALOG)
  })
})
