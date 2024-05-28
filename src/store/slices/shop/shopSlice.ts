import { createSlice } from "@reduxjs/toolkit";

interface ShopSlice {
   isFiltersOpened: boolean
}

const initialState: ShopSlice = {
   isFiltersOpened: false
}

const shopSlice = createSlice({
   name: 'shopSlice',
   initialState,
   reducers: {
      toggleFilters(state) {
         state.isFiltersOpened = !state.isFiltersOpened
      }
   }
})

export default shopSlice
export const {toggleFilters} = shopSlice.actions