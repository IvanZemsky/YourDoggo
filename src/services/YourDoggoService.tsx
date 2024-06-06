import { APIEndpoints, BASE_URL } from "@/constants/API";
import { FetchGalleryFilter, IGalleryImg } from "@/types/API/IGalleryImg";
import { FetchProductFilter, IProduct, IProductData } from "@/types/API/IProduct";
import { IUserData, UserLoginData } from "@/types/auth";
import { FetchBaseQueryMeta, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./../types/API/IUser";
import { ILike, FetchLike } from "@/types/API/ILike";
import { CreateArticleData, FetchArticleFilter, IArticle } from "@/types/API/IArticle";
import compareObjects from "@/helpers/compareObjects";

const { AUTH, ARTICLES, USERS, LOGIN, PRODUCTS, CATEGORIES, GALLERY, LIKES, CREATE } = APIEndpoints;

export const YourDoggoAPI = createApi({
   reducerPath: "productAPI",
   baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
   endpoints: (builder) => ({
      fetchAllProducts: builder.query<IProductData, FetchProductFilter>({
         query: ({ page, limit, textQuery, category, minPrice, maxPrice }) => ({
            url: `${PRODUCTS}`,
            params: {
               search: textQuery,
               category,
               minPrice,
               maxPrice,
               page,
               limit,
            },
         }),
         transformResponse: (response: unknown, meta: FetchBaseQueryMeta | undefined) => {
            const totalCountHeader = meta?.response?.headers?.get("X-Total-Count")
            const totalCount = totalCountHeader ? +totalCountHeader : 1
            return {
               data: response as IProduct[],
               totalCount,
            }
         },
         serializeQueryArgs: ({ endpointName, queryArgs }) => {
            const { page, ...filters } = queryArgs;
            return { queryArgs };
          },
          forceRefetch({ currentArg, previousArg }) {
            if (!currentArg || !previousArg) return true;
            const { page: currentPage, ...currentFilters } = currentArg;
            const { page: previousPage, ...previousFilters } = previousArg;
            return compareObjects(currentFilters, previousFilters);
          },
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
         query: ({ limit, userLogin, userId, authUserId, textQuery, liked }) => ({
            url: `${GALLERY}`,
            method: "POST",
            params: {
               sortByDate: true,
               limit,
               userLogin,
               search: textQuery,
               liked: liked || "",
               userId,
            },
            body: {
               authUserId
            }
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
      createArticle: builder.mutation<IArticle, CreateArticleData>({
         query: (args) => ({
            url: `${ARTICLES}${CREATE}`,
            method: "POST",
            body: args
         })
      })
   }),
});

export const {
   useFetchAllProductsQuery,
   useFetchProductByIdQuery,
   useFetchProductsByCategoryQuery,
   useFetchProductsByIdsQuery,
   useFetchUserLoginDataQuery,
   useFetchAllGalleryImagesQuery,
   useFetchGalleryImageByIdQuery,
   useFetchUserByIdQuery,
   useToggleLikeMutation,
   useFetchAllArticlesQuery,
   useFetchArticleByIdQuery,
   useCreateArticleMutation
} = YourDoggoAPI;

export const {
   useLazyFetchAllProductsQuery,
   useLazyFetchProductByIdQuery,
   useLazyFetchProductsByCategoryQuery,
   useLazyFetchProductsByIdsQuery,
   useLazyFetchUserLoginDataQuery,
   useLazyFetchAllGalleryImagesQuery,
   useLazyFetchGalleryImageByIdQuery,
   useLazyFetchUserByIdQuery,
   useLazyFetchAllArticlesQuery,
   useLazyFetchArticleByIdQuery,
} = YourDoggoAPI;
