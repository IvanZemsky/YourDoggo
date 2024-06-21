import { APIEndpoints } from "@/constants/API";
import { ILike, FetchLike } from "@/types/API/ILike";
import { YourDoggoAPI } from "./YourDoggoService";

const {ARTICLES, GALLERY, LIKES} = APIEndpoints

const likeService = YourDoggoAPI.injectEndpoints({
   endpoints: (builder) => ({
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
   }),
});

export const {useToggleLikeMutation} = likeService