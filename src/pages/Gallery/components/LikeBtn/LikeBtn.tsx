import Button from "@/components/UI/Button/Button";
import HeartIcon from "@/components/UI/icons/HeartIcon";
import { ButtonHTMLAttributes, MouseEvent } from "react";
import { useAppSelector } from "@/hooks/redux";
import { useCallback } from "react";
import { selectStyles } from "@/helpers/selectStyles";
import { useLikeToggle } from "@/hooks/useLikeToggle";

interface LikeBtnProps {
   imgId: string
   isLiked: boolean
   likedStyles: string
   unlikedStyles: string
}

type LikeBtnType = LikeBtnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const LikeBtn = ({isLiked, imgId, className, unlikedStyles, likedStyles, ...attributes}: LikeBtnType) => {
   const {toggleLike, liked} = useLikeToggle(imgId, isLiked)
   const currentUserId = useAppSelector(state => state.auth.userId)

   const handleLikeClick = useCallback(
      
      async (event: MouseEvent<HTMLButtonElement>) => {
         event.stopPropagation();
         if (!currentUserId) return;
         await toggleLike({userId: currentUserId, galleryimgId: imgId})
      },
      []
   );

   const likeBtnStyles = selectStyles(liked, unlikedStyles, likedStyles)

   return (
      <Button
         variant="none"
         onClick={handleLikeClick}
         className={likeBtnStyles}
         {...attributes}
      >
         <HeartIcon />
      </Button>
   );
};

export default LikeBtn;
