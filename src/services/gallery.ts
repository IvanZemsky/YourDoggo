import compareObjects from "@/helpers/compareObjects";
import { IGalleryImgTotal, FetchGalleryFilter, IGalleryImg, CreateGalleryIMGData } from "@/types/API/IGalleryImg";
import { FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
import { YourDoggoAPI } from "./YourDoggoService";
import { APIEndpoints } from "@/constants/API";

const {GALLERY, CREATE} = APIEndpoints

const galleryService = YourDoggoAPI.injectEndpoints({
   endpoints: (builder) => ({
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
   }),
});

export const {
   useFetchAllGalleryImagesQuery,
   useFetchGalleryImageByIdQuery,
   useCreateGalleryImgMutation,
} = galleryService;

export const {
   useLazyFetchAllGalleryImagesQuery,
   useLazyFetchGalleryImageByIdQuery,
} = galleryService;