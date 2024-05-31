import { useAppSelector } from "@/hooks/redux";
import { useLikeToggle } from "@/hooks/useLikeToggle";
import styles from "./LikeCounter.module.scss";
import { APIEndpoints } from "@/constants/API";

const { GALLERY } = APIEndpoints;

interface LikeCounterProps {
   id: string;
   likes: number;
   isLiked: boolean;
   className?: string;
}

const LikeCounter = ({ id, likes, isLiked, className }: LikeCounterProps) => {
   const currentUserId = useAppSelector((state) => state.auth.userId);

   const { like } = useLikeToggle(
      id,
      currentUserId,
      isLiked,
      GALLERY,
   );

   return <p className={className}>{like?.likes || likes}</p>;
};

export default LikeCounter;
