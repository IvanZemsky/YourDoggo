import { UserData, UserSigninData } from "@/types/auth";
import { PayloadAction, createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

interface ErrorMessage {
   message: string;
}

export const fetchLoginUser = createAsyncThunk<UserData, UserSigninData, { rejectValue: string }>(
   "auth/fetchLoginUser", async (loginData, { rejectWithValue }) => {
   try {
      console.log(JSON.stringify(loginData));
      const response = await fetch("http://localhost:5000/auth/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(loginData),
      });

      if (!response.ok) {
         throw new Error("Error");
      }

      console.log(loginData);

      const userData = await response.json();
      console.log(userData);

      return userData as UserData;
   } catch (error) {
      return rejectWithValue(error.message);
   }
});

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
   const userLoginString = localStorage.getItem("userLogin");
   const userLogin = userLoginString ? JSON.parse(userLoginString) : null;
   
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
      });
   },
});

export default authSlice;
export const {} = authSlice.actions;
