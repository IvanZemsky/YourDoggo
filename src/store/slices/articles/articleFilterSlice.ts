import { createSlice, current } from "@reduxjs/toolkit";

interface ArticleFilterSlice {
   limit: number
   userLogin: boolean
   textQuery: string
   liked: boolean
}

const initialState: ArticleFilterSlice = {
   textQuery: "",
   limit: 0,
   userLogin: true,
   liked: false
}

const articleFilterSlice = createSlice({
   name: 'articleFilter',
   initialState,
   reducers: {
      setTextQuery(state, action) {
         state.textQuery = action.payload
      },
      setLiked(state) {
         state.liked = !state.liked
      }
}})

export default articleFilterSlice
export const {setTextQuery, setLiked} = articleFilterSlice.actions