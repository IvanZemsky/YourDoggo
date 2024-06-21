import { IUser } from "@/types/API/IUser";
import { IUserData, UserLoginData } from "@/types/auth";
import { YourDoggoAPI } from "./YourDoggoService";
import { APIEndpoints } from "@/constants/API";

const {AUTH, LOGIN, USERS} = APIEndpoints

const userService = YourDoggoAPI.injectEndpoints({
   endpoints: (builder) => ({
      fetchUserLoginData: builder.query<IUserData, UserLoginData>({
         query: (loginData) => ({
            url: `${AUTH}${LOGIN}`,
            method: "POST",
            body: loginData,
         }),
      }),
      fetchUserById: builder.query<IUser, string>({
         query: (id) => ({
            url: `${USERS}/${id}`,
         }),
      }),
   }),
});

export const {useFetchUserLoginDataQuery, useFetchUserByIdQuery} = userService
export const {useLazyFetchUserLoginDataQuery, useLazyFetchUserByIdQuery} = userService
