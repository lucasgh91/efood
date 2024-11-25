declare type Product = {
  id: number,
  price: number
}

declare type OrderType = {
  products: Product[],
  delivery: {
    receiver: string,
    address: {
      description: string,
      city: string,
      zipCode: string,
      number: number,
      complement?: string
    }
  },
  payment: {
    card: {
      name: string,
      number: string,
      code: number,
      expires: {
        month: number,
        year: number
      }
    }
  }
}

declare type OrderCreateResponseType = {
  orderId: string
}
