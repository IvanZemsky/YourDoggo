import { createSlice, current } from "@reduxjs/toolkit";

interface GalleryFilterSlice {
   limit: number
   userLogin: boolean
   textQuery: string
}

const initialState: GalleryFilterSlice = {
   textQuery: "",
   limit: 0,
   userLogin: true
}

const galleryFilterSlice = createSlice({
   name: 'galleryFilter',
   initialState,
   reducers: {
      setTextQuery(state, action) {
         state.textQuery = action.payload
      },
}})

export default galleryFilterSlice
export const {setTextQuery} = galleryFilterSlice.actions