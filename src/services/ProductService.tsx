import { IProduct } from "@/types/API/IProduct"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
   reducerPath: 'productAPI',
   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/products'}), // to constant!!!
   endpoints: (builder) => ({
      fetchAllProducts: builder.query<IProduct[], void>({
         query: () => ({
            url: '/'
         })
      }),
      fetchProductById: builder.query<IProduct[], string>({
         query: (id) => ({
            url: `/${id}`
         })
      })
   })
})

export const { useFetchAllProductsQuery } = productAPI