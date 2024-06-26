import Loading from "@/components/Loading/Loading";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { RoutesEnum } from "@/constants/routes";
import { useAppSelector } from "@/hooks/redux";
import { useFetchUserByIdQuery } from "@/services/user";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Personal from "./components/Personal/Personal";
import UserGallery from "./components/UserGallery/UserGallery";
import styles from "./User.module.scss";

const { Profile } = RoutesEnum;

interface UserProps {
   isCurrentUser: boolean
}

const User = ({isCurrentUser }: UserProps) => {
   const navigate = useNavigate();
   const authUserId = useAppSelector((state) => state.auth.userId);
   const { userId } = useParams();

   useEffect(() => {
      if (userId === authUserId) {
         navigate(`/${Profile}`);
      }
   }, [userId]);

   if (!userId) {
      return null;
   }

   const { data: user, isLoading, isError } = useFetchUserByIdQuery(userId);

   if (isLoading) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
      user && (
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.mainInfo}>
                  <Personal user={user} isCurrentUser={isCurrentUser} />
                  <UserGallery userId={userId} isCurrentUser={isCurrentUser}/>
               </div>
            </div>
         </Wrapper>
      )
   );
};

export default User;
