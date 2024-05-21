import { Link } from "react-router-dom";
import styles from "./DoggoCard.module.scss";

interface DoggoCard {
   hasCard: boolean;
}

const DoggoCard = ({ hasCard }: DoggoCard) => {
   return (
      <div className={styles.doggoCardWrap}>
         {hasCard ? (
            <>
               <p className={styles.cardBlock}>Завести карту</p>
               <p className={styles.cardLabel}>Ваша карта Doggo</p>
            </>
         ) : (
            <>
               <Link to="" className={styles.noCardBlock}>Завести карту</Link>
               <p className={styles.cardLabel}>У вас еще нет карты Doggo</p>
            </>
         )}
      </div>
   );
};

export default DoggoCard;
