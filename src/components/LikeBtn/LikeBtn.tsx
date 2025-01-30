import { ButtonProps } from "@/shared/ui/Button/Button";
import {Button} from "@/shared/ui"
import { HeartIcon } from "@/shared/ui/icons";
import { MouseEvent } from "react";
import { useCallback } from "react";
import { selectStyles } from "@/utils/selectStyles";
import { useLikeToggle } from "@/services/hooks/useLikeToggle";
import { LikeEndpoints } from "@/types/API/ILike";
import { useAppSelector } from "@/hooks/redux";

type Props = ButtonProps & {
   likedItemId: string;
   isLiked: boolean;
   likedStyles: string;
   unlikedStyles: string;
   endpoint: LikeEndpoints;
}

const LikeBtn = ({
   isLiked,
   likedItemId,
   className,
   unlikedStyles,
   likedStyles,
   endpoint,
   ...attributes
}: Props) => {
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
