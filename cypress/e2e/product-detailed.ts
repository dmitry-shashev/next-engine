import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import PageProduct from '../cy-pages/page-product'
import PageCatalog from '../cy-pages/page-catalog'

Given('I visit the catalog page', () => {
  PageCatalog.open()
})

When('I go inside the first product', () => {
  PageCatalog.goToTheProductByIndex(0)
})

Then('I see the product image', () => {
  PageProduct.productImageInDom()
})
