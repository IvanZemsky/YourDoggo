import { FetchArticleFilter } from "@/types/API/IArticle";
import { createSlice } from "@reduxjs/toolkit";

interface ArticleFilterSlice {
   userId: string,
   userLogin: boolean
   limit: number
   textQuery: string
   liked: boolean
   page: number
   prevPage : number
}

const initialState: FetchArticleFilter = {
   textQuery: "",
   limit: 10,
   userLogin: true,
   liked: false,
   page: 1,
   prevPage: 1,
   userId: "",
}

const articleFilterSlice = createSlice({
   name: 'articleFilter',
   initialState,
   reducers: {
      setTextQuery(state, action) {
         state.textQuery = action.payload
      },
      toggleLiked(state) {
         state.liked = !state.liked
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
      }
}})

export default articleFilterSlice
export const {setTextQuery, toggleLiked, setLiked, setPage, setUserId, toggleUserId} = articleFilterSlice.actions