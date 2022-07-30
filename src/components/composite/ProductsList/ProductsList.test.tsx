import { render } from '@testing-library/react'
import ProductsList from './ProductsList'
import { getTestProductsList } from '@tests/test-data'
import {
  ariaLabelInTheDocument,
  nextPaginationPage,
  prevPaginationPage,
  typeInInputByAriaLabel,
} from '@tests/utils'

jest.mock('next/router', () => ({
  useRouter: (): unknown => ({
    isReady: true,
    query: {
      offset: 0,
    },
    push: () => null,
  }),
}))

describe('ProductsList', () => {
  it('component', async () => {
    const productsList = getTestProductsList()
    render(<ProductsList products={productsList} />)

    // check the base content
    await ariaLabelInTheDocument('Search Form')
    await ariaLabelInTheDocument('Pagination Block')
    await ariaLabelInTheDocument('Product Card', 10)

    // pagination
    await nextPaginationPage()
    await ariaLabelInTheDocument('Product Card', 2)
    await prevPaginationPage()
    await ariaLabelInTheDocument('Product Card', 10)

    // search
    await typeInInputByAriaLabel('Search Input', '1')
    await ariaLabelInTheDocument('Product Card', 3)
    await typeInInputByAriaLabel('Search Input', ' ')
    await ariaLabelInTheDocument('Product Card', 10)
  })
})
