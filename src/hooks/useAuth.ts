import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { fetchLoginUser } from "@/store/slices/authSlice";
import { UserSigninData } from "@/types/auth";

export const useAuth = (userSigninData: UserSigninData): [() => void] => {
   const dispatch = useAppDispatch();

   const userLogin = useAppSelector((state) => state.auth.userLogin);

   const handleLoginClick = () => {
      dispatch(fetchLoginUser(userSigninData));
   };

   useEffect(() => {
      if (!userLogin) {
         localStorage.setItem("userLogin", JSON.stringify(null));
         return;
      }
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
   }, [userLogin]);

   return [handleLoginClick];
};
