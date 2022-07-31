import {
  ariaLabelInTheDocument,
  ariaLabelNotInTheDocument,
  renderWithProviders,
  textInTheDocument,
} from '@tests/utils'
import ProductsListComplex from './ProductsListComplex'
import { productsSlice } from '@store/reducers/productSlice'
import ProductsList from '@components/composite/ProductsList/ProductsList'
import { act } from '@testing-library/react'

jest.mock(
  '@components/composite/ProductsList/ProductsList',
  (): typeof ProductsList => {
    return ({ products }) => (
      <ul>
        {products.map((p) => (
          <li aria-label="test" key={p.id}>
            {p.id}
          </li>
        ))}
      </ul>
    )
  }
)

describe('ProductsListComplex', () => {
  it('component', async () => {
    const { store } = await renderWithProviders(<ProductsListComplex />)
    await textInTheDocument('No data found')

    await ariaLabelNotInTheDocument('test')
    act(() => {
      const { requestProducts } = productsSlice.actions
      store.dispatch(requestProducts())
    })
    await ariaLabelInTheDocument('test', 12)
  })
})
