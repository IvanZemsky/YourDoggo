import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { fetchLoginUser } from "@/store/slices/authSlice";
import { AuthErrorMessage, UserSigninData } from "@/types/auth";

export const useAuth = (userSigninData: UserSigninData): [() => void, string | null] => {
   const dispatch = useAppDispatch();

   const userLogin = useAppSelector((state) => state.auth.userLogin);
   const errorMessage = useAppSelector(state => state.auth.error)

   const handleLoginClick = () => {
      dispatch(fetchLoginUser(userSigninData));
   };

   useEffect(() => {
      if (!userLogin) {
         document.cookie = "userLogin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
         return;
      }
      document.cookie = `userLogin=${JSON.stringify(userLogin)}; path=/`;
   }, [userLogin]);

   return [handleLoginClick, errorMessage];
};
