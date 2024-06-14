import Button, { ButtonFullProps } from "@/components/UI/Button/Button";
import HeartIcon from "@/components/UI/icons/HeartIcon";
import { MouseEvent } from "react";
import { useCallback } from "react";
import { selectStyles } from "@/helpers/selectStyles";
import { useLikeToggle } from "@/services/hooks/useLikeToggle";
import { LikeEndpoints } from "@/types/API/ILike";
import { useAppSelector } from "@/hooks/redux";

interface LikeBtnProps {
   likedItemId: string;
   isLiked: boolean;
   likedStyles: string;
   unlikedStyles: string;
   endpoint: LikeEndpoints;
}

type LikeBtnType = LikeBtnProps & ButtonFullProps;

const LikeBtn = ({
   isLiked,
   likedItemId,
   className,
   unlikedStyles,
   likedStyles,
   endpoint,
   ...attributes
}: LikeBtnType) => {
   const currentUserId = useAppSelector((state) => state.auth.userId);
   const { toggleLike, liked } = useLikeToggle(
      likedItemId,
      currentUserId,
      isLiked,
      endpoint,
   );

   const handleLikeClick = useCallback(
      async (event: MouseEvent<HTMLButtonElement>) => {
         event.stopPropagation();
         event.preventDefault()
         if (!currentUserId) return;
         await toggleLike();
      },
      []
   );

   const likeBtnStyles = selectStyles(liked, unlikedStyles, likedStyles);

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
