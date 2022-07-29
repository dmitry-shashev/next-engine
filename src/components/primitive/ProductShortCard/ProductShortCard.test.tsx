import { render } from '@testing-library/react'
import ProductShortCard from './ProductShortCard'
import { getTestProduct } from '@tests/test-data'
import { ariaLabelContainText, linkInTheDocument } from '@tests/utils'
import StrHelper from '@lib/helpers/str.helper'
import PageHelper from '@lib/helpers/page.helper'
import PagePath from '@lib/constants/page-path'

describe('ProductShortCard', () => {
  it('component', async () => {
    const product = getTestProduct()
    render(<ProductShortCard product={product} />)
    await ariaLabelContainText('title', product.title)
    await ariaLabelContainText('category', product.category)
    await ariaLabelContainText('price', StrHelper.formatMoney(product.price))
    await linkInTheDocument(
      'Product Card',
      PageHelper.buildUrl(PagePath.PRODUCT_ID, product.id)
    )
  })
})
