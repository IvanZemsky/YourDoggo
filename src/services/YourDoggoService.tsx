import { APIEndpoints, BASE_URL } from "@/constants/API";
import { FetchGalleryFilter, IGalleryImg } from "@/types/API/IGalleryImg";
import { FetchProductFilter, IProduct } from "@/types/API/IProduct";
import { IUserData, UserLoginData } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./../types/API/IUser";
import { ILike, FetchLike } from "@/types/API/ILike";
import { FetchArticleFilter, IArticle } from "@/types/API/IArticle";

const { AUTH, ARTICLES, USERS, LOGIN, PRODUCTS, CATEGORIES, GALLERY, LIKES } = APIEndpoints;

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
      fetchProductsByIds: builder.query<IProduct[], string[]>({
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
         query: ({ limit, userLogin, userId, textQuery, liked }) => ({
            url: `${GALLERY}/?sortByDate=true`,
            method: "POST",
            params: {
               limit,
               userLogin,
               search: textQuery,
               liked: liked || "",
            },
            body: {
               authUserId : userId || "",
            }
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
      toggleLike: builder.mutation<ILike, FetchLike>({
         query: ({userId, likedItemId, endpoint}) => ({
           url: `${endpoint}${LIKES}`,
           method: "POST",
           body: {
               userId,
               ...(endpoint === ARTICLES && { articleId: likedItemId }),
               ...(endpoint === GALLERY && { galleryimgId: likedItemId })
           }
         }),
       }),
       fetchAllArticles: builder.query<IArticle[], FetchArticleFilter>({
         query: ({ limit, userLogin, userId, textQuery, liked }) => ({
            url: `${ARTICLES}/?sortByDate=true`,
            method: "POST",
            params: {
               limit,
               userLogin,
               search: textQuery,
               liked: liked || "",
            },
            body: {
               authUserId : userId || "",
            }
         }),
      }),
      fetchArticleById: builder.query<IArticle, FetchArticleFilter>({
         query: ({id, userLogin, userId}) => ({
            url: `${ARTICLES}/${id}`,
            method: "POST",
            params: {
               userLogin,
            },
            body: {
               authUserId : userId || "",
            }
         }),
      }),
   }),
});

export const {
   useFetchAllProductsQuery,
   useFetchProductByIdQuery,
   useFetchProductsByCategoryQuery,
   useFetchProductsByIdsQuery,
   useFetchUserLoginDataQuery,
   useFetchAllGalleryImagesQuery,
   useFetchGalleryImagesByUserIdQuery,
   useFetchGalleryImageByIdQuery,
   useFetchUserByIdQuery,
   useToggleLikeMutation,
   useFetchAllArticlesQuery,
   useFetchArticleByIdQuery,
} = YourDoggoAPI;

export const {
   useLazyFetchAllProductsQuery,
   useLazyFetchProductByIdQuery,
   useLazyFetchProductsByCategoryQuery,
   useLazyFetchProductsByIdsQuery,
   useLazyFetchUserLoginDataQuery,
   useLazyFetchAllGalleryImagesQuery,
   useLazyFetchGalleryImagesByUserIdQuery,
   useLazyFetchGalleryImageByIdQuery,
   useLazyFetchUserByIdQuery,
   useLazyFetchAllArticlesQuery,
   useLazyFetchArticleByIdQuery,
} = YourDoggoAPI;
