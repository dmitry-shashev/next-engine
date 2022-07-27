abstract class PageCatalog {
  public static open() {
    cy.visit('/catalog')
  }

  public static goToTheProductByIndex(index: number) {
    cy.get('[aria-label="Product Card"]').eq(index).click()
  }
}

export default PageCatalog
