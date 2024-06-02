import PageLink from "@/components/UI/PageLink/PageLink";
import styles from "./OfferCard.module.scss";
import { RoutesEnum } from "@/constants/routes";

interface OfferCardProps {
   img: string,
   link: RoutesEnum,
   title: string
   label: string
}

export const OfferCard = ({img, link, title, label}: OfferCardProps) => {
   return (
      <PageLink to={link} className={styles.pageLink}>
         <p className={styles.linkName}>{title}</p>
         <div className={styles.card}>
            <img
               src={img}
               alt="Превью"
            />
            <p className={styles.label}>{label}</p>
         </div>
      </PageLink>
   );
};