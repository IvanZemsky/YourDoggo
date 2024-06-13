import { FetchGalleryFilter } from "@/types/API/IGalleryImg";
import { createSlice } from "@reduxjs/toolkit";

interface GalleryFilterSlice extends FetchGalleryFilter {}

const initialState: GalleryFilterSlice = {
   textQuery: "",
   limit: 12,
   userLogin: true,
   liked: false,
   page: 1,
   prevPage: 1,
   userId: "",
}

const galleryFilterSlice = createSlice({
   name: 'galleryFilter',
   initialState,
   reducers: {
      setTextQuery(state, action) {
         state.page = 1
         state.textQuery = action.payload
      },
      toggleLiked(state) {
         state.page = 1
         state.liked = !state.liked
      },
      setLiked(state, action) {
         state.page = 1
         state.liked = action.payload
      },
      setPage(state) {
         if (state.page) state.page = state.page + 1
         console.log(state.page)
      },
      setUserId(state, action) {
         state.page = 1
         state.userId = action.payload
      },
      toggleUserId(state, action) {
         state.page = 1
         state.userId = state.userId ? "" : action.payload
      }
}})

export default galleryFilterSlice
export const {setTextQuery, toggleLiked, setLiked, setPage, setUserId, toggleUserId} = galleryFilterSlice.actions