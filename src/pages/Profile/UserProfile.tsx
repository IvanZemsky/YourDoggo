import Loading from "@/components/Loading/Loading";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { RoutesEnum } from "@/constants/routes";
import { useAppSelector } from "@/hooks/redux";
import { useFetchUserByIdQuery } from "@/services/user";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Personal from "./components/Personal/Personal";
import UserGallery from "./components/UserGallery/UserGallery";
import styles from "./Profile.module.scss";
import UserArticles from "./components/UserArticles/UserArticles";

const { Profile } = RoutesEnum;

const User = () => {
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
               <Personal user={user} isCurrentUser={false} />
               
               <div className={styles.activityInfo}>
                  <UserGallery userId={userId} isCurrentUser={false}/>
                  <UserArticles userId={userId} isCurrentUser={false}/>
               </div>
            </div>
         </Wrapper>
      )
   );
};

export default User;
