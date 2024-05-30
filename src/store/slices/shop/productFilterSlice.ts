import { createSlice, current } from "@reduxjs/toolkit";

interface ProductFilterSlice {
   textQuery: string
   category: string
   minPrice: string
   maxPrice: string
}

const initialState: ProductFilterSlice = {
   textQuery: "",
   category: "",
   minPrice: "",
   maxPrice: "",
}

const productFilterSlice = createSlice({
   name: 'productFilter',
   initialState,
   reducers: {
      setTextQuery(state, action) {
         state.textQuery = action.payload
      },
      setCategory(state, action) {
         state.category = action.payload
      },
      setMinMaxPrice(state, action) {
         state.minPrice = action.payload.minPrice
         state.maxPrice = action.payload.maxPrice
      },
   }
})

export default productFilterSlice
export const {setTextQuery, setCategory, setMinMaxPrice} = productFilterSlice.actions