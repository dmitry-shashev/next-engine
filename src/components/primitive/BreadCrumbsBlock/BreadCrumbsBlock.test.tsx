import { getBreadCrumbs } from '@tests/test-data'
import BreadCrumbsBlock from './BreadCrumbsBlock'
import { render } from '@testing-library/react'
import { linkIsVisible, textInTheDocument } from '@tests/utils'

describe('BreadCrumbsBlock', () => {
  it('component', async () => {
    const breadcrumbs = getBreadCrumbs()
    render(<BreadCrumbsBlock data={breadcrumbs} />)

    // regular links
    await linkIsVisible(breadcrumbs[0]?.label ?? '', breadcrumbs[0]?.link ?? '')
    await linkIsVisible(breadcrumbs[1]?.label ?? '', breadcrumbs[1]?.link ?? '')
    // last - as text
    await textInTheDocument(breadcrumbs[2]?.label ?? '')
  })
})
