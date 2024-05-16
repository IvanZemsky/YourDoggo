import { BASE_URL } from "@/constants/API";
import { fetchLoginUser } from "@/services/fetchLoginUser";
import { IUserData, UserLoginData } from "@/types/auth";
import { PayloadAction, createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";


function isError(action: PayloadAction) {
   return action.type.endsWith('rejected')
}

interface AuthSlice {
   userId: string | null;
   userLogin: string | null;
   status: string | null;
   error: string | null;
}

const initialState = (): AuthSlice => {
   const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('userLogin='))
      ?.split('=')[1];

   const userLogin = cookieValue ? JSON.parse(cookieValue) : null;

   return {
      userId: null,
      userLogin: userLogin,
      status: null,
      error: null,
   }
}

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      builder.addCase(fetchLoginUser.pending, (state, action) => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
         state.status = "resolved";
         state.userId = action.payload.id;
         state.userLogin = action.payload.login;
      });
      builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
         state.status = "rejected";
         state.error = action.payload;
         console.log('error', state.error)
      });
   },
});

export default authSlice;
export const {} = authSlice.actions;
