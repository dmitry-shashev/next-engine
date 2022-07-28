import PageHelper from './page.helper'
import PagePath from '../constants/page-path'

describe('page.helper', () => {
  it('buildUrl', () => {
    expect(PageHelper.buildUrl(PagePath.CATALOG)).toBe('/catalog')
    expect(PageHelper.buildUrl(PagePath.PRODUCT_ID, 12)).toBe('/product/MTI=')
  })
})
