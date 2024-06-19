import { APIEndpoints, BASE_URL } from "@/constants/API";
import {  CreateGalleryIMGData,  FetchGalleryFilter,  IGalleryImg,  IGalleryImgTotal } from "@/types/API/IGalleryImg";
import {  FetchProductFilter,  IProduct,  IProductData } from "@/types/API/IProduct";
import { IUserData, UserLoginData } from "@/types/auth";
import {  FetchBaseQueryMeta,  createApi,  fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./../types/API/IUser";
import { ILike, FetchLike } from "@/types/API/ILike";
import {  CreateArticleData,  FetchArticleFilter,  IArticle,  IArticleTotal } from "@/types/API/IArticle";
import compareObjects from "@/helpers/compareObjects";
import { FetchForumMessageFilter, IForumMessage, IForumMessageTotal } from "@/types/API/IForumMessage";
import { CreateForumCommenteData, FetchForumCommentFilter, IForumComment, IForumCommentTotal } from "@/types/API/IForumComment";

const {
   AUTH,
   ARTICLES,
   FORUM,
   USERS,
   LOGIN,
   PRODUCTS,
   CATEGORIES,
   GALLERY,
   LIKES,
   CREATE,
   COMMENTS
} = APIEndpoints;

export const YourDoggoAPI = createApi({
   reducerPath: "YourDoggoAPI",
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
         transformResponse: (
            response: unknown,
            meta: FetchBaseQueryMeta | undefined
         ) => {
            const totalCountHeader =
               meta?.response?.headers?.get("X-Total-Count");
            const totalCount = totalCountHeader ? +totalCountHeader : 1;
            return {
               data: response as IProduct[],
               totalCount,
            };
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
      fetchAllGalleryImages: builder.query<IGalleryImgTotal, FetchGalleryFilter>({
         query: ({  limit,  page,  userLogin,  userId,  authUserId,  textQuery,  liked }) => ({
            url: `${GALLERY}`,
            method: "POST",
            params: {
               sortByDate: true,
               limit,
               page,
               userLogin,
               search: textQuery,
               liked: liked || "",
               userId,
            },
            body: {
               authUserId,
            },
         }),
         transformResponse: (
            response: unknown,
            meta: FetchBaseQueryMeta | undefined
         ) => {
            const totalCountHeader =
               meta?.response?.headers?.get("X-Total-Count");
            const totalCount = totalCountHeader ? +totalCountHeader : 1;
            return {
               data: response as IGalleryImg[],
               totalCount,
            };
         },
         serializeQueryArgs: ({ endpointName, queryArgs }) => {
            const { page, ...filters } = queryArgs;
            return JSON.stringify(filters) + endpointName;
         },
         merge: (currentCache, newItems, {arg, requestId}) => {
            if (arg.page === 1) {
               currentCache.data = newItems.data;
            } else if (requestId) {
               currentCache.data.push(...newItems.data);
            }
         },
         forceRefetch({ currentArg, previousArg }) {
            if (!currentArg || !previousArg) return true;
            const { page: currentPage, ...currentFilters } = currentArg;
            const { page: previousPage, ...previousFilters } = previousArg;
            return compareObjects(currentFilters, previousFilters) && currentPage !== previousPage;
         },
      }),
      fetchGalleryImageById: builder.query<IGalleryImg, string>({
         query: (id) => ({
            url: `${GALLERY}/${id}`,
         }),
      }),
      createGalleryImg: builder.mutation<IGalleryImg, CreateGalleryIMGData>({
         query: (args) => ({
            url: `${GALLERY}${CREATE}`,
            method: "POST",
            body: args,
         }),
      }),
      fetchUserById: builder.query<IUser, string>({
         query: (id) => ({
            url: `${USERS}/${id}`,
         }),
      }),
      toggleLike: builder.mutation<ILike, FetchLike>({
         query: ({ userId, likedItemId, endpoint }) => ({
            url: `${endpoint}${LIKES}`,
            method: "POST",
            body: {
               userId,
               ...(endpoint === ARTICLES && { articleId: likedItemId }),
               ...(endpoint === GALLERY && { galleryimgId: likedItemId }),
            },
         }),
      }),
      fetchAllArticles: builder.query<IArticleTotal, FetchArticleFilter>({
         query: ({
            limit,
            page,
            userLogin,
            userId,
            authUserId,
            textQuery,
            liked,
         }) => ({
            url: `${ARTICLES}/?sortByDate=true`,
            method: "POST",
            params: {
               limit,
               page,
               userLogin,
               search: textQuery,
               liked: liked || "",
               userId,
            },
            body: {
               authUserId: authUserId || "",
            },
         }),
         transformResponse: (
            response: unknown,
            meta: FetchBaseQueryMeta | undefined
         ) => {
            const totalCountHeader =
               meta?.response?.headers?.get("X-Total-Count");
            const totalCount = totalCountHeader ? +totalCountHeader : 1;
            return {
               data: response as IArticle[],
               totalCount,
            };
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
      fetchArticleById: builder.query<IArticle, FetchArticleFilter>({
         query: ({ id, userLogin, authUserId }) => ({
            url: `${ARTICLES}/${id}`,
            method: "POST",
            params: {
               userLogin,
            },
            body: {
               authUserId: authUserId || "",
            },
         }),
      }),
      createArticle: builder.mutation<IArticle, CreateArticleData>({
         query: (args) => ({
            url: `${ARTICLES}${CREATE}`,
            method: "POST",
            body: args,
         }),
      }),
      fetchAllForumMessages: builder.query<IForumMessageTotal, FetchForumMessageFilter>({
         query: ({ page, limit, textQuery,}) => ({
            url: `${FORUM}`,
            params: {
               search: textQuery,
               page,
               limit,
               userLogin: true,
            },
         }),
         transformResponse: (
            response: unknown,
            meta: FetchBaseQueryMeta | undefined
         ) => {
            const totalCountHeader =
               meta?.response?.headers?.get("X-Total-Count");
            const totalCount = totalCountHeader ? +totalCountHeader : 1;
            return {
               data: response as IForumMessage[],
               totalCount,
            };
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
      fetchForumMessageById: builder.query<IForumMessage, string>({
         query: (id) => ({
            url: `${FORUM}/${id}`,
            params: {
               userLogin: true,
            }
         }),
      }),
      fetchForumCommentsByMessage: builder.query<IForumCommentTotal, FetchForumCommentFilter>({
         query: ({ id }) => ({
            url: `${FORUM}/${id}${COMMENTS}`,
            params: {
               limit: 10,
               page: 1,
               userLogin: true,
            },
         }),
         transformResponse: (
            response: unknown,
            meta: FetchBaseQueryMeta | undefined
         ) => {
            const totalCountHeader =
               meta?.response?.headers?.get("X-Total-Count");
            const totalCount = totalCountHeader ? +totalCountHeader : 1;
            return {
               data: response as IForumComment[],
               totalCount,
            };
         },
         serializeQueryArgs: ({ endpointName, queryArgs }) => {
            const { page, ...filters } = queryArgs;
            return JSON.stringify(filters) + endpointName;
         },
         merge: (currentCache, newItems, {arg, requestId}) => {
            if (arg.page === 1) {
               currentCache.data = newItems.data;
            } else if (requestId) {
               currentCache.data.push(...newItems.data);
            }
         },
         forceRefetch({ currentArg, previousArg }) {
            if (!currentArg || !previousArg) return true;
            const { page: currentPage, ...currentFilters } = currentArg;
            const { page: previousPage, ...previousFilters } = previousArg;
            return compareObjects(currentFilters, previousFilters) && currentPage !== previousPage;
         },
      }),
      createForumMessage: builder.mutation<IForumMessage, CreateForumCommenteData>({
         query: (args) => ({
            url: `${FORUM}${COMMENTS}${CREATE}`,
            method: "POST",
            body: args,
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
   useFetchGalleryImageByIdQuery,
   useFetchUserByIdQuery,
   useToggleLikeMutation,
   useFetchAllArticlesQuery,
   useFetchArticleByIdQuery,
   useCreateArticleMutation,
   useCreateGalleryImgMutation,
   useFetchAllForumMessagesQuery,
   useFetchForumMessageByIdQuery,
   useFetchForumCommentsByMessageQuery,
   useCreateForumMessageMutation,
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
   useLazyFetchAllForumMessagesQuery,
   useLazyFetchForumMessageByIdQuery,
   useLazyFetchForumCommentsByMessageQuery,
} = YourDoggoAPI;
