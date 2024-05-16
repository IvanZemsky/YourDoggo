import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { fetchLoginUser } from "@/services/fetchLoginUser";
import { AuthErrorMessage, UserLoginData } from "@/types/auth";
import { useLazyFetchUserLoginDataQuery } from "@/services/YourDoggoService";


export const useAuth = (userSigninData: UserLoginData): [() => void, string | null] => {
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
