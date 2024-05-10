import { useAppSelector } from "@/hooks/redux";
import styles from './Profile.module.scss'
import { useNavigate } from "react-router";
import { RoutesEnum } from "@/constants/routes";
import { useEffect } from "react";

const Profile = () => {
   const navigate = useNavigate()
   const userLogin = useAppSelector((state) => state.auth.userLogin);

   useEffect(() => {
      if (!userLogin) {
         navigate('/' + RoutesEnum.Signin)
      }
   }, [userLogin])

  return (
    <div>
      
    </div>
  )
}

export default Profile
