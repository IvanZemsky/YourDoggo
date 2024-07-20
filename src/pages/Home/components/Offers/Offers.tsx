import {Wrapper} from "@/components/UI";
import styles from "./Offers.module.scss";
import { RoutesEnum } from "@/constants/routes";
import { OfferCard } from "./OfferCard/OfferCard";

const { Articles, Forum, Shop, Gallery } = RoutesEnum;

const Offers = () => {
   return (
      <section className={styles.offers}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.pages}>
                  <h2 className={styles.title}>Мы предлагаем</h2>
                  <div className={styles.pageLinks}>
                     <OfferCard
                        img="https://images.unsplash.com/photo-1489440543286-a69330151c0b?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        link={Articles}
                        title="Статьи"
                        label="Путешествия с собакой"
                        />
                     <OfferCard
                        img="https://i.imgur.com/MWinpgL.jpeg"
                        link={Shop}
                        title="Товары"
                        label="Шампунь для собак"
                     />
                     <OfferCard
                        img="https://images.unsplash.com/photo-1608408891486-f5cade977d19?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        link={Forum}
                        title="Форум"
                        label="Какой корм выбрать?"
                     />
                     <OfferCard
                        img="https://images.unsplash.com/photo-1554692901-e16f2046918a?q=80&w=742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        link={Gallery}
                        title="Галерея"
                        label="Радуется весне :D"
                     />
                  </div>
               </div>
            </div>
         </Wrapper>
      </section>
   );
};

export default Offers;
