import { APIEndpoints, BASE_URL } from "@/constants/API";
import { IGalleryImg } from "@/types/API/IGalleryImg";
import { FetchFilter, IProduct } from "@/types/API/IProduct";
import { IUserData, UserLoginData } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from './../types/API/IUser';

const {AUTH, USERS, LOGIN, PRODUCTS, CATEGORIES, GALLERY} = APIEndpoints

export const YourDoggoAPI = createApi({
   reducerPath: "productAPI",
   baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
   endpoints: (builder) => ({
      fetchAllProducts: builder.query<IProduct[], FetchFilter>({
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
      fetchAllGalleryImages: builder.query<IGalleryImg[], void>({
         query: () => ({
            url: `${GALLERY}`
         })
      }),
      fetchUserById: builder.query<IUser, string>({
         query: (id) => ({
            url: `${USERS}/${id}`
         })
      }) 
   }),
});

export const {
   useFetchAllProductsQuery,
   useFetchProductByIdQuery,
   useFetchProductsByCategoryQuery,
   useFetchByIdsQuery,
   useFetchUserLoginDataQuery,
   useFetchAllGalleryImagesQuery,
   useFetchUserByIdQuery,
} = YourDoggoAPI;

export const {
   useLazyFetchAllProductsQuery,
   useLazyFetchProductByIdQuery,
   useLazyFetchProductsByCategoryQuery,
   useLazyFetchByIdsQuery,
   useLazyFetchUserLoginDataQuery,
   useLazyFetchAllGalleryImagesQuery,
   useLazyFetchUserByIdQuery,
} = YourDoggoAPI;
