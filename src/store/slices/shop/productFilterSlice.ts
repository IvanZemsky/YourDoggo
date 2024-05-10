import { createSlice, current } from "@reduxjs/toolkit";

interface ProductFilterSlice {
   textQuery: string
   category: string
}

const initialState: ProductFilterSlice = {
   textQuery: "",
   category: "all"
}

const productFilterSlice = createSlice({
   name: 'productFilter',
   initialState,
   reducers: {
      setCategory(state, action) {
         state.category = action.payload
      }
   }
})

export default productFilterSlice
export const {setCategory} = productFilterSlice.actions