import { createSlice, current } from "@reduxjs/toolkit";

interface ProductFilterSlice {
   textQuery: string;
   category: string;
   minPrice: string;
   maxPrice: string;
   page: number;
   limit: number;
}

const initialState: ProductFilterSlice = {
   textQuery: "",
   category: "",
   minPrice: "",
   maxPrice: "",
   page: 1,
   limit: 12,
};

const productFilterSlice = createSlice({
   name: "productFilter",
   initialState,
   reducers: {
      setTextQuery(state, action) {
         state.textQuery = action.payload;
         state.page = 1
      },
      setCategory(state, action) {
         state.category = action.payload;
         state.page = 1
      },
      setMinMaxPrice(state, action) {
         state.minPrice = action.payload.minPrice;
         state.maxPrice = action.payload.maxPrice;
         state.page = 1
      },
      setPage(state, action) {
         state.page = action.payload
      },
   },
});

export default productFilterSlice;
export const { setTextQuery, setCategory, setMinMaxPrice, setPage, } =
   productFilterSlice.actions;
