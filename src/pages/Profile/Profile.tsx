import { useAppSelector } from "@/hooks/redux";
import styles from "./Profile.module.scss";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@/constants/routes";
import { useEffect } from "react";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { useFetchUserByIdQuery } from "@/services/YourDoggoService";
import Loading from "@/components/Loading/Loading";
import UserIcon from "@/components/UI/icons/UserIcon";
import DoggoCard from './components/DoggoCard/DoggoCard';

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
   } = useFetchUserByIdQuery(userId as string);

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
                  <div className={styles.userInfo}>
                     <div className={styles.logoWrap}>
                        <div className={styles.logo}>
                           <UserIcon />
                        </div>
                        <p className={styles.login}>@{user.login}</p>
                     </div>
                     <div className={styles.userPersonalData}>
                        <p className={styles.name}>
                           {user.name} {user.surname}
                        </p>
                     </div>
                  </div>
                  <DoggoCard hasCard={user.hasCard}/>
               </div>
            </div>
         </Wrapper>
      )
   );
};

export default Profile;
