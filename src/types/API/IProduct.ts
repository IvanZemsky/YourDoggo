export interface IProduct {
   _id: string,
   category: string,
   name: string,
   description: string,
   price: number,
   details: {
      [key: string]: string
   }
}