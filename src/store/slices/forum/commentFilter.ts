import { createSlice } from "@reduxjs/toolkit";

interface CommentFilterSlice {
   forumMessageID: string | null,
   page: number;
   limit: number;
}

const initialState: CommentFilterSlice = {
   forumMessageID: null,
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
      },
      setForumMessageId(state, action) {
         state.forumMessageID = action.payload
      }
   },
});

export default commentFilterSlice;
export const { setPage, resetPage, setForumMessageId } = commentFilterSlice.actions;
