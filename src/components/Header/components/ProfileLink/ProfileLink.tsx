import Button from "@/components/UI/Button/Button";
import UserIcon from "@/components/UI/icons/UserIcon";
import { Link } from "react-router-dom";
import styles from './ProfileLink.module.scss'

const ProfileLink = () => {
   return (
      <Link to="/profile">
         <Button className={styles.btn} variant="outlined" icon={<UserIcon/>} color="secondary"/>
      </Link>
   );
};

export default ProfileLink;
