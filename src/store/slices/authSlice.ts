import { createSlice } from "@reduxjs/toolkit";

interface AuthSlice {
   isAuthenticated: boolean;
   userId: number | null
}

const initialState: AuthSlice = {
   isAuthenticated: false,
   userId: null
}

const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {
      signin(state, action) {
         state.isAuthenticated = true;
         state.userId = action.payload.userId;
      },

      signout(state) {
         state.isAuthenticated = false
      },

      register(state, action) {

      }
   }
})

export default authSlice
export const {} = authSlice