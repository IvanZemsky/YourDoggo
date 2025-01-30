import {PageLink} from "@/shared/ui";
import { RoutesEnum } from "@/constants/routes";
import styles from "./ProfileLink.module.scss";
import {UserIcon} from "@/shared/ui/icons";

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
