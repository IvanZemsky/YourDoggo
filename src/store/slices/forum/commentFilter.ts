import { createSlice } from "@reduxjs/toolkit";

interface CommentFilterSlice {
   page: number;
   limit: number;
}

const initialState: CommentFilterSlice = {
   page: 1,
   limit: 3,
};

const commentFilterSlice = createSlice({
   name: "commentFilter",
   initialState,
   reducers: {
      setPage(state) {
         state.page++;
      },
      resetPage(state) {
         state.page = 1
      }
   },
});

export default commentFilterSlice;
export const { setPage, resetPage } = commentFilterSlice.actions;
