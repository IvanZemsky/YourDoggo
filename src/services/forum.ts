import { APIEndpoints } from "@/constants/API";
import compareObjects from "@/utils/compareObjects";
import {
   IForumCommentTotal,
   FetchForumCommentFilter,
   IForumComment,
   CreateForumCommenteData,
} from "@/types/API/IForumComment";
import {
   IForumMessageTotal,
   FetchForumMessageFilter,
   IForumMessage,
   CreateForumMessageData,
} from "@/types/API/IForumMessage";
import { FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
import { YourDoggoAPI } from "./YourDoggoService";

const { FORUM, COMMENTS, CREATE } = APIEndpoints;

const forumService = YourDoggoAPI.injectEndpoints({
   endpoints: (builder) => ({
      fetchAllForumMessages: builder.query<IForumMessageTotal, FetchForumMessageFilter>({
         query: ({ page, limit, textQuery }) => ({
            url: `${FORUM}`,
            params: {
               sortByDate: true,
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
            },
         }),
      }),
      fetchForumCommentsByMessage: builder.query<IForumCommentTotal, FetchForumCommentFilter>({
         providesTags: ["ForumComment"],
         query: ({ id, page, limit }) => ({
            url: `${FORUM}/${id}${COMMENTS}`,
            params: {
               limit,
               page,
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
         merge: (currentCache, newItems, { arg, requestId }) => {
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
            return (
               compareObjects(currentFilters, previousFilters) &&
               currentPage !== previousPage
            );
         },
      }),
      createForumMessage: builder.mutation<IForumMessage, CreateForumMessageData>({
         invalidatesTags: ["ForumMessage"],
         query: (args) => ({
            url: `${FORUM}${CREATE}`,
            method: "POST",
            body: args,
         }),
      }),
      createForumComment: builder.mutation<IForumComment, CreateForumCommenteData>({
         invalidatesTags: ["ForumComment"],
         query: (args) => ({
            url: `${FORUM}${COMMENTS}${CREATE}`,
            method: "POST",
            body: args,
         }),
      }),
   }),
});

export const {
   useFetchAllForumMessagesQuery,
   useFetchForumMessageByIdQuery,
   useFetchForumCommentsByMessageQuery,
   useCreateForumCommentMutation,
   useCreateForumMessageMutation,
} = forumService;
export const {
   useLazyFetchAllForumMessagesQuery,
   useLazyFetchForumCommentsByMessageQuery,
} = forumService;
