import { createSlice, current } from "@reduxjs/toolkit";

interface GalleryFilterSlice {
   limit: number
   userLogin: boolean
   textQuery: string
   liked: boolean
   page: number
   prevPage: number
}

const initialState: GalleryFilterSlice = {
   textQuery: "",
   limit: 0,
   userLogin: true,
   liked: false,
   page: 1,
   prevPage: 1
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
      },
      setPage(state, action) {
         state.page = action.payload
      }
}})

export default galleryFilterSlice
export const {setTextQuery, setLiked, setPage} = galleryFilterSlice.actions