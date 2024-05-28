import Loading from "@/components/Loading/Loading";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import UserIcon from "@/components/UI/icons/UserIcon";
import { RoutesEnum } from "@/constants/routes";
import { useAppSelector } from "@/hooks/redux";
import { useFetchUserByIdQuery } from "@/services/YourDoggoService";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import DoggoCard from "../Profile/components/DoggoCard/DoggoCard";
import Personal from "../Profile/components/Personal/Personal";
import UserGallery from "../Profile/components/UserGallery/UserGallery";
import styles from './User.module.scss'

const {Profile} = RoutesEnum

const User = () => {
   const navigate = useNavigate();
   const authUserId = useAppSelector((state) => state.auth.userId);
   const {userId} = useParams()

   useEffect(() => {
      if (userId === authUserId) {
         navigate(`/${Profile}`)
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
                  <div className={styles.userInfoWrap}>
                     <div className={styles.userInfo}>
                        <div className={styles.logoWrap}>
                           <div className={styles.logo}>
                              <UserIcon />
                           </div>
                        </div>
                        <Personal user={user} />
                     </div>
                     <p className={styles.login}>@{user.login}</p>
                  </div>
                  <DoggoCard hasCard={user.hasCard} />
               </div>

               <UserGallery userId={userId}/>

            </div>
         </Wrapper>
      )
   );
}

export default User
