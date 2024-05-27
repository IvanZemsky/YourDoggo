import { APIEndpoints, BASE_URL } from "@/constants/API";
import { FetchGalleryFilter, IGalleryImg } from "@/types/API/IGalleryImg";
import { FetchProductFilter, IProduct } from "@/types/API/IProduct";
import { IUserData, UserLoginData } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./../types/API/IUser";

const { AUTH, USERS, LOGIN, PRODUCTS, CATEGORIES, GALLERY } = APIEndpoints;

export const YourDoggoAPI = createApi({
   reducerPath: "productAPI",
   baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
   endpoints: (builder) => ({
      fetchAllProducts: builder.query<IProduct[], FetchProductFilter>({
         query: ({ textQuery, category, minPrice, maxPrice }) => ({
            url: `${PRODUCTS}`,
            params: {
               search: textQuery,
               category,
               minPrice,
               maxPrice,
            },
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
            method: "POST",
            body: { ids },
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
            method: "POST",
            body: loginData,
         }),
      }),
      fetchAllGalleryImages: builder.query<IGalleryImg[], FetchGalleryFilter>({
         query: ({ limit, userLogin, textQuery }) => ({
            url: `${GALLERY}/?sortByDate=true`,
            params: {
               limit,
               userLogin,
               search: textQuery,

            },
         }),
      }),
      fetchGalleryImagesByUserId: builder.query<IGalleryImg[], FetchGalleryFilter>({
         query: ({ id, limit }) => ({
            url: `${GALLERY}/users/${id}`,
            params: {
               limit,
            },
         }),
      }),
      fetchGalleryImageById: builder.query<IGalleryImg, string>({
         query: (id) => ({
            url: `${GALLERY}/${id}`,
         }),
      }),
      fetchUserById: builder.query<IUser, string>({
         query: (id) => ({
            url: `${USERS}/${id}`,
         }),
      }),
   }),
});

export const {
   useFetchAllProductsQuery,
   useFetchProductByIdQuery,
   useFetchProductsByCategoryQuery,
   useFetchByIdsQuery,
   useFetchUserLoginDataQuery,
   useFetchAllGalleryImagesQuery,
   useFetchGalleryImagesByUserIdQuery,
   useFetchGalleryImageByIdQuery,
   useFetchUserByIdQuery,
} = YourDoggoAPI;

export const {
   useLazyFetchAllProductsQuery,
   useLazyFetchProductByIdQuery,
   useLazyFetchProductsByCategoryQuery,
   useLazyFetchByIdsQuery,
   useLazyFetchUserLoginDataQuery,
   useLazyFetchAllGalleryImagesQuery,
   useLazyFetchGalleryImagesByUserIdQuery,
   useLazyFetchGalleryImageByIdQuery,
   useLazyFetchUserByIdQuery,
} = YourDoggoAPI;
