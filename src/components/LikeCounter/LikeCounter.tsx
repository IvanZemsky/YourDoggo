import { useAppSelector } from "@/hooks/redux";
import { useLikeToggle } from "@/services/hooks/useLikeToggle";
import { LikeEndpoints } from "@/types/API/ILike";

type Props = {
   id: string;
   likes: number;
   isLiked: boolean;
   className?: string;
   endpoint: LikeEndpoints
}

const LikeCounter = ({ id, likes, isLiked, endpoint, className }: Props) => {
   const currentUserId = useAppSelector((state) => state.auth.userId);

   const { like } = useLikeToggle(
      id,
      currentUserId,
      isLiked,
      endpoint,
   );

   const updatedLikes = like ? like.likes : likes

   return <p className={className}>{updatedLikes}</p>;
};

export default LikeCounter;
