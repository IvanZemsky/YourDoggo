import { useAppSelector } from "@/hooks/redux";
import styles from "./Profile.module.scss";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@/constants/routes";
import { useEffect } from "react";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { useFetchUserByIdQuery } from "@/services/YourDoggoService";

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

   const { data: user, isLoading, isError } = useFetchUserByIdQuery(userId as string);

   return (
      user && (
         <Wrapper>
            <div className={styles.content}>{user.name}</div>
         </Wrapper>
      )
   );
};

export default Profile;
