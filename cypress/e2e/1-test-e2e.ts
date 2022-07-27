import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import PageCatalog from '../cy-pages/page-catalog'
import PageProduct from '../cy-pages/page-product'

Given('I visit the catalog page', () => {
  PageCatalog.open()
})

When('I go inside the first product', () => {
  PageCatalog.goToTheProductByIndex(0)
})

Then('I see the product image', () => {
  PageProduct.productImageInDom()
})
