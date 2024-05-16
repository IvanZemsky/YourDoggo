import { APIEndpoints, BASE_URL } from "@/constants/API";
import { IProduct } from "@/types/API/IProduct";
import { IUserData, UserLoginData } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const {AUTH, LOGIN, PRODUCTS, CATEGORIES} = APIEndpoints

interface FetchFilter {
   textQuery: string
   category: string
   minPrice: string
   maxPrice: string
}

export const YourDoggoAPI = createApi({
   reducerPath: "productAPI",
   baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
   endpoints: (builder) => ({
      fetchAll: builder.query<IProduct[], FetchFilter>({
         query: ({textQuery, category, minPrice, maxPrice}) => ({
            url: `${PRODUCTS}/?search=${textQuery}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
         }),
      }),
      fetchProductById: builder.query<IProduct, string>({
         query: (id) => ({
            url: `${PRODUCTS}/${id}`,
         }),
      }),
      fetchByIds: builder.query<IProduct[], string[]>({
         query: (ids) => ({
            url: `${PRODUCTS}`,
            method: 'POST',
            body: {ids},
         }),
      }),
      fetchProductsByCategory: builder.query<IProduct[], string>({
         query: (category) => ({
            url: `${PRODUCTS}${CATEGORIES}/${category}`,
         }),
      }),
      fetchUserLoginData: builder.query<IUserData, UserLoginData>({
         query: (loginData) => ({
            url: `${AUTH}${LOGIN}`,
            method: 'POST',
            body: loginData
         }),
      }),
   }),
});

export const {
   useFetchAllQuery,
   useFetchProductByIdQuery,
   useFetchProductsByCategoryQuery,
   useFetchByIdsQuery,
   useFetchUserLoginDataQuery,
} = YourDoggoAPI;

export const {
   useLazyFetchAllQuery,
   useLazyFetchProductByIdQuery,
   useLazyFetchProductsByCategoryQuery,
   useLazyFetchByIdsQuery,
   useLazyFetchUserLoginDataQuery,
} = YourDoggoAPI;
