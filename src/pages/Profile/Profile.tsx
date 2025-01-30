import { useAppSelector } from "@/hooks/redux";
import styles from "./Profile.module.scss";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@/constants/routes";
import { useEffect } from "react";
import {Wrapper} from "@/shared/ui";
import { useFetchUserByIdQuery } from "@/services/user";
import Loading from "@/components/Loading/Loading";
import Personal from "./components/Personal/Personal";
import UserGallery from './components/UserGallery/UserGallery';
import UserArticles from "./components/UserArticles/UserArticles";

const Profile = () => {
   const navigate = useNavigate();
   const userId = useAppSelector((state) => state.auth.userId);

   useEffect(() => {
      if (!userId) {
         navigate(`/${RoutesEnum.Signin}`);
      }
   }, [userId]);

   if (!userId) {
      return null;
   }

   const {
      data: user,
      isLoading,
      isError,
   } = useFetchUserByIdQuery(userId);

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
               <Personal user={user} isCurrentUser={true} />
               
               <div className={styles.activityInfo}>
                  <UserGallery userId={userId} isCurrentUser={true} />
                  <UserArticles userId={userId} isCurrentUser={true} />
               </div>
            </div>
         </Wrapper>
      )
   );
};

export default Profile;
