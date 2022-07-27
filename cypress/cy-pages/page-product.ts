abstract class PageProduct {
  public static productImageInDom() {
    cy.get('img[aria-label="Product Image"]').should('have.attr', 'src')
  }
}

export default PageProduct
