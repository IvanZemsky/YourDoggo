import compareObjects from "@/helpers/compareObjects";
import {
   IProductData,
   FetchProductFilter,
   IProduct,
} from "@/types/API/IProduct";
import { FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
import { YourDoggoAPI } from "./YourDoggoService";
import { APIEndpoints } from "@/constants/API";

const { PRODUCTS, CATEGORIES } = APIEndpoints;

const shopService = YourDoggoAPI.injectEndpoints({
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
   }),
});

export const {
   useFetchAllProductsQuery,
   useFetchProductByIdQuery,
   useFetchProductsByCategoryQuery,
   useFetchProductsByIdsQuery,
} = shopService;

export const {
   useLazyFetchAllProductsQuery,
   useLazyFetchProductByIdQuery,
   useLazyFetchProductsByCategoryQuery,
   useLazyFetchProductsByIdsQuery,
} = shopService;

