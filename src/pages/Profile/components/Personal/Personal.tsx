import { IUser } from "@/types/API/IUser";
import styles from "./Personal.module.scss";
import { formatDate } from "@/utils/formatDate";
import UserIcon from "@/components/UI/icons/UserIcon";
import DoggoCard from './../DoggoCard/DoggoCard';

interface PersonalProps {
   user: IUser;
}

const Personal = ({ user }: PersonalProps) => {
   const date = formatDate(user.registrationDate, "text");

   return (
      <div className={styles.mainInfo}>
         <div className={styles.userInfoWrap}>
            <div className={styles.userInfo}>
               <div className={styles.logoWrap}>
                  <div className={styles.logo}>
                     <UserIcon />
                  </div>
               </div>
               <div className={styles.userPersonalData}>
                  <p className={styles.name}>
                     {user.name} {user.surname}
                  </p>
                  <p className={styles.personalDataText}>{user.email}</p>
                  <p className={styles.personalDataText}>{user.phone}</p>
                  <p className={styles.personalDataText}>
                     В сообществе с {date}
                  </p>
               </div>
            </div>
            <p className={styles.login}>@{user.login}</p>
         </div>
         <DoggoCard hasCard={user.hasCard}/>
      </div>
   );
};

export default Personal;

