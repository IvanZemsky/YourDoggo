import { createSlice, current } from "@reduxjs/toolkit";

interface GalleryFilterSlice {
   limit: number
   userLogin: boolean
   textQuery: string
   liked: boolean
}

const initialState: GalleryFilterSlice = {
   textQuery: "",
   limit: 0,
   userLogin: true,
   liked: false
}

const galleryFilterSlice = createSlice({
   name: 'galleryFilter',
   initialState,
   reducers: {
      setTextQuery(state, action) {
         state.textQuery = action.payload
      },
      setLiked(state) {
         state.liked = !state.liked
      }
}})

export default galleryFilterSlice
export const {setTextQuery, setLiked} = galleryFilterSlice.actions