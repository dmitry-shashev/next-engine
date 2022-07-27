import ProductModel from '@lib/interfaces/product.model'

abstract class RequestService {
  public static triggerError(): Promise<string> {
    return new Promise((_resolve, reject) => {
      setTimeout(() => {
        reject('Some error')
      }, 500)
    })
  }

  public static getUserName(): Promise<string> {
    // here we can get a token - RequestService.token
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Harry')
      }, 500)
    })
  }

  public static getUserSurname(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Tomson')
      }, 1000)
    })
  }

  public static async getAllProducts(): Promise<Array<ProductModel>> {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json()
  }

  public static async getProduct(id: string): Promise<ProductModel> {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    return response.json()
  }
}

export default RequestService
