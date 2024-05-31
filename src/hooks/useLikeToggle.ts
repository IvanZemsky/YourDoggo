import { useToggleLikeMutation } from "@/services/YourDoggoService";
import { LikeEndpoints } from "@/types/API/ILike";
import { useEffect, useState } from "react";
import { useAppSelector } from "./redux";

export const useLikeToggle = (
   likedItemId: string,
   currentUserId: string | null,
   isLiked: boolean,
   endpoint: LikeEndpoints,
) => {
   const [trigger, { data: like }] = useToggleLikeMutation({
      fixedCacheKey: endpoint + likedItemId,
   });

   const args = {
      userId: currentUserId || "",
      likedItemId,
      endpoint,
   };

   const toggleLike = () => trigger(args);

   const [liked, setLiked] = useState(isLiked);

   useEffect(() => {
      if (like) {
         setLiked(like.liked);
      }
   }, [like]);

   return { toggleLike, liked, like } as const;
};
