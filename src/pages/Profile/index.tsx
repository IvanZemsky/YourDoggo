import { useAppSelector } from "@/hooks/redux";
import styles from "./Profile.module.scss";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@/constants/routes";
import { useEffect } from "react";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { useFetchUserByIdQuery } from "@/services/user";
import Loading from "@/components/Loading/Loading";
import UserIcon from "@/components/UI/icons/UserIcon";
import DoggoCard from "./components/DoggoCard/DoggoCard";
import Personal from "./components/Personal/Personal";
import UserGallery from './components/UserGallery/UserGallery';
import UserArticle from './components/UserArticles/UserArticles';
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
               <Personal user={user} />
               
               <div className={styles.activityInfo}>
                  <UserGallery userId={userId} />
                  <UserArticles userId={userId}/>
               </div>
            </div>
         </Wrapper>
      )
   );
};

export default Profile;
