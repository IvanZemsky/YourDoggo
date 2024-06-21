import { BASE_URL } from "@/constants/API";
import { createApi,  fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const YourDoggoAPI = createApi({
   reducerPath: "YourDoggoAPI",
   baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
   tagTypes: ['GalleryImg', 'Article', 'ForumMessage', 'ForumComment'],
   endpoints: () => ({}),
});