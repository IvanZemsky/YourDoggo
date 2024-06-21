import { APIEndpoints } from "@/constants/API";
import { YourDoggoAPI } from "./YourDoggoService";
import compareObjects from "@/helpers/compareObjects";
import { IArticleTotal, FetchArticleFilter, IArticle, CreateArticleData } from "@/types/API/IArticle";
import { FetchBaseQueryMeta } from "@reduxjs/toolkit/query";

const {ARTICLES, CREATE} = APIEndpoints

const articleService = YourDoggoAPI.injectEndpoints({
   endpoints: (builder) => ({
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
   }),
});

export const {useFetchAllArticlesQuery, useFetchArticleByIdQuery, useCreateArticleMutation} = articleService
export const {useLazyFetchAllArticlesQuery, useLazyFetchArticleByIdQuery} = articleService