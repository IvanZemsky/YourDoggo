import { createSlice } from "@reduxjs/toolkit";

interface ForumFilterSlice {
   textQuery: string;
   page: number;
   limit: number;
}

const initialState: ForumFilterSlice = {
   textQuery: "",
   page: 1,
   limit: 9,
};

const forumFilterSlice = createSlice({
   name: "forumFilter",
   initialState,
   reducers: {
      setTextQuery(state, action) {
         state.textQuery = action.payload;
         state.page = 1;
      },
      setPage(state, action) {
         state.page = action.payload;
      },
   },
});

export default forumFilterSlice;
export const { setTextQuery, setPage } = forumFilterSlice.actions;
