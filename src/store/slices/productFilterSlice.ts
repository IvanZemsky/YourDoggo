import { createSlice } from "@reduxjs/toolkit";

interface ProductFilterSlice {
   textQuery: string
   filter: string
}

const initialState: ProductFilterSlice = {
   textQuery: "",
   filter: "all"
}

const productFilterSlice = createSlice({
   name: 'modalSlice',
   initialState,
   reducers: {
      
   }
})

export default productFilterSlice
export const {} = productFilterSlice.actions