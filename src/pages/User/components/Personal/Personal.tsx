import { IUser } from "@/types/API/IUser";
import styles from "./Personal.module.scss";
import { formatDate } from "@/utils/formatDate";

interface PersonalProps {
   user: IUser
}

const Personal = ({ user }: PersonalProps) => {
   const date = formatDate(user.registrationDate, "text");

   return (
      <div className={styles.userPersonalData}>
         <p className={styles.name}>
            {user.name} {user.surname}
         </p>
         <p className={styles.personalDataText}>{user.email}</p>
         <p className={styles.personalDataText}>{user.phone}</p>
         <p className={styles.personalDataText}>В сообществе с {date}</p>
      </div>
   );
};

export default Personal;
