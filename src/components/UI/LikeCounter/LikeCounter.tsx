import { useAppSelector } from "@/hooks/redux";
import { useLikeToggle } from "@/hooks/useLikeToggle";
import { LikeEndpoints } from "@/types/API/ILike";

interface LikeCounterProps {
   id: string;
   likes: number;
   isLiked: boolean;
   className?: string;
   endpoint: LikeEndpoints
}

const LikeCounter = ({ id, likes, isLiked, endpoint, className }: LikeCounterProps) => {
   const currentUserId = useAppSelector((state) => state.auth.userId);

   const { like } = useLikeToggle(
      id,
      currentUserId,
      isLiked,
      endpoint,
   );

   return <p className={className}>{like?.likes || likes}</p>;
};

export default LikeCounter;
