import {PageLink} from "@/components/UI";
import { RoutesEnum } from "@/constants/routes";
import styles from "./ProfileLink.module.scss";
import {UserIcon} from "@/components/UI/icons";

const { Profile } = RoutesEnum;

const ProfileLink = () => {
   return (
      <PageLink
         to={`/${Profile}`}
         className={styles.btn}
         color="secondary"
         variant="outlined"
         hasRippleEffect
         icon={<UserIcon />}
      />
   );
};

export default ProfileLink;
