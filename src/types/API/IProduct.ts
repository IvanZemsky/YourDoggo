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