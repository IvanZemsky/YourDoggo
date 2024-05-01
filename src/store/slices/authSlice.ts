import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

interface A {
   login: string
   password: string
}

interface userData {
   id: string;
   login: string;
}

export const fetchLoginUser = createAsyncThunk(
   "auth/fetchLoginUser",
   async (loginData: A, { rejectWithValue }) => {
      try {
         console.log(JSON.stringify(loginData),)
         const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
           },
            body: JSON.stringify(loginData),
         });
         
         if (!response.ok) {
            console.log(response)
            throw new Error("Error");
         }

         console.log(loginData)

         const userData = await response.json();
         console.log(userData)
         return userData;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

interface AuthSlice {
   isAuthorized: boolean;
   userId: string | null;
   userLogin: string | null;
   status: string | null;
   error: string | null;
}

const initialState: AuthSlice = {
   isAuthorized: false,
   userId: null,
   userLogin: null,
   status: null,
   error: null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      signin(state, action) {
         state.isAuthorized = true;
         state.userId = action.payload.userId;
      },

      signout(state) {
         state.isAuthorized = false;
      },

      register(state, action) {},
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
      builder.addCase(fetchLoginUser.rejected, (state, action) => {
         state.status = "loading";
         state.error = null;
      });
   },
});

export default authSlice;
export const { signout } = authSlice.actions;
