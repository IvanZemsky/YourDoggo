import { ICartProduct } from "@/types/shop";
import { createSlice, current } from "@reduxjs/toolkit";

interface CartSlice {
   products: ICartProduct[]
}

const initialState: CartSlice = {
   products: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addProduct(state, action) {
         const cartProduct = {...action.payload, amount: 1};
         state.products.push(cartProduct)
      },
      removeProduct(state, action) {
         const productId = action.payload._id
         const productIndex = state.products.findIndex(product => product._id === productId )
         state.products.splice(productIndex, 1)
      },
      increase(state, action) {
         const productId = action.payload._id
         const productIndex = state.products.findIndex(product => product._id === productId )
         const product = state.products[productIndex]
         if (product.amount) {
            product.amount++;
         }
      },
      decrease(state, action) {
         const productId = action.payload._id
         const productIndex = state.products.findIndex(product => product._id === productId )
         const product = state.products[productIndex]
         if (product.amount) {
            product.amount--;
         }
      }
   }
})

export default cartSlice
export const {addProduct, removeProduct} = cartSlice.actions