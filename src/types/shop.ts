import { IProduct } from "./API/IProduct"

export interface Category {
   name: string
   value: string
}

export interface ICartProduct extends IProduct {
   amount: number
}