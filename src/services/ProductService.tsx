import { APIEndpoints, BASE_URL } from "@/constants/API";
import { IProduct } from "@/types/API/IProduct";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const {PRODUCTS, CATEGORIES} = APIEndpoints

interface FetchFilter {
   textQuery: string
   category: string
   minPrice: string
   maxPrice: string
}

export const productAPI = createApi({
   reducerPath: "productAPI",
   baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}${PRODUCTS}` }), // to constant!!!
   endpoints: (builder) => ({
      fetchAll: builder.query<IProduct[], FetchFilter>({
         query: ({textQuery, category, minPrice, maxPrice}) => ({
            url: `/?search=${textQuery}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
         }),
      }),
      fetchProductById: builder.query<IProduct, string>({
         query: (id) => ({
            url: `/${id}`,
         }),
      }),
   }),
});

export const {
   useFetchAllQuery,
   useFetchProductByIdQuery,
} = productAPI;

export const {
   useLazyFetchAllQuery,
   useLazyFetchProductByIdQuery,
} = productAPI;
