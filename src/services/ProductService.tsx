import { APIEndpoints, BASE_URL } from "@/constants/API";
import { IProduct } from "@/types/API/IProduct";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const {PRODUCTS, CATEGORIES} = APIEndpoints

export const productAPI = createApi({
   reducerPath: "productAPI",
   baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}${PRODUCTS}` }), // to constant!!!
   endpoints: (builder) => ({
      fetchAllProducts: builder.query<IProduct[], void>({
         query: () => ({
            url: "/",
         }),
      }),
      fetchProductById: builder.query<IProduct, string>({
         query: (id) => ({
            url: `/${id}`,
         }),
      }),
      fetchProductByCategory: builder.query<IProduct[], string>({
         query: (category) => ({
            url: `${CATEGORIES}/${category}`,
         }),
      }),
   }),
});

export const {
   useFetchAllProductsQuery,
   useFetchProductByIdQuery,
   useFetchProductByCategoryQuery,
} = productAPI;

export const {
   useLazyFetchAllProductsQuery,
   useLazyFetchProductByIdQuery,
   useLazyFetchProductByCategoryQuery,
} = productAPI;
