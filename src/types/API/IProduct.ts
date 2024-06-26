export interface IProduct {
   _id: string,
   category: string,
   name: string,
   description: string,
   price: number,
   img: string,
   details: {
      [key: string]: string
   }
}

export interface IProductData {
   data: IProduct[]
   totalCount: number
}

export interface FetchProductFilter {
   textQuery: string
   category: string
   minPrice: string
   maxPrice: string
   page?: number
   limit?: number
}