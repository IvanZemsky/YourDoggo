import { useToggleLikeMutation } from "@/services/YourDoggoService"
import { useEffect, useState } from "react"

export const useLikeToggle = (isLiked: boolean) => {
   const [toggleLike, {data: like}] = useToggleLikeMutation()

   const [liked, setLiked] = useState(isLiked)

   useEffect(() => {
      if (like) {
         setLiked(like.liked)
      }
   }, [like])

   return {toggleLike, liked, like} as const

}