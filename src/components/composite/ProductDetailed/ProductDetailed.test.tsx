import React from 'react'
import { render } from '@testing-library/react'
import ProductDetailed from '@components/composite/ProductDetailed/ProductDetailed'
import { getTestProduct } from '@tests/test-data'
import { ariaLabelContainText } from '@tests/utils'
import StrHelper from '@lib/helpers/str.helper'

describe('ProductDetailed', () => {
  it('component', async () => {
    const product = getTestProduct()
    render(<ProductDetailed product={product} />)

    await ariaLabelContainText('title', product.title)
    await ariaLabelContainText('category', product.category)
    await ariaLabelContainText('description', product.description)
    await ariaLabelContainText('rating', product.rating.rate)
    await ariaLabelContainText('price', StrHelper.formatMoney(product.price))

    expect(product).toEqual(getTestProduct())
  })
})
