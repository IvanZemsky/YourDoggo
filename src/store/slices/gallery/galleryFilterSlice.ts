import { FetchGalleryFilter } from "@/types/API/IGalleryImg";
import { createSlice, current } from "@reduxjs/toolkit";

interface GalleryFilterSlice extends FetchGalleryFilter {}

const initialState: GalleryFilterSlice = {
   textQuery: "",
   limit: 0,
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
         state.textQuery = action.payload
      },
      toggleLiked(state) {
         state.liked = !state.liked
         console.log('toggleLiked')
      },
      setLiked(state, action) {
         state.liked = action.payload
      },
      setPage(state, action) {
         state.page = action.payload
      },
      setUserId(state, action) {
         state.userId = action.payload
      },
      toggleUserId(state, action) {
         state.userId = state.userId ? "" : action.payload
         console.log('toggleUser')
      }
}})

export default galleryFilterSlice
export const {setTextQuery, toggleLiked, setLiked, setPage, setUserId, toggleUserId} = galleryFilterSlice.actions