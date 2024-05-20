import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { fetchLoginUser } from "@/services/fetchLoginUser";
import {  UserLoginData } from "@/types/auth";

export const useAuth = (userSigninData: UserLoginData): [() => void, string | null] => {
   const dispatch = useAppDispatch();

   const userLogin = useAppSelector((state) => state.auth.userLogin);
   const userId = useAppSelector(state => state.auth.userId)
   const errorMessage = useAppSelector(state => state.auth.error)

   const handleLoginClick = () => {
      dispatch(fetchLoginUser(userSigninData));
   };

   useEffect(() => {
      localStorage.setItem("userLogin", userLogin as string);
      localStorage.setItem("userId", userId as string);
   }, [userId]);

   return [handleLoginClick, errorMessage];
};
