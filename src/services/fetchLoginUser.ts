import { BASE_URL } from "@/constants/API";
import { IUserData, UserLoginData } from "@/types/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLoginUser = createAsyncThunk<IUserData, UserLoginData, { rejectValue: string }>(
   "auth/fetchLoginUser", async (loginData, { rejectWithValue }) => {
   try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(loginData),
      });

      if (!response.ok) {
         throw new Error("Error");
      }

      const userData = await response.json();

      if (userData.hasOwnProperty('errorMessage')) {
         return rejectWithValue(userData.errorMessage) 
      }

      return userData as IUserData;
   } catch (error) {
      return rejectWithValue(error.message);
   }
});