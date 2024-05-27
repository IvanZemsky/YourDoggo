import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Offers.module.scss";
import PageLink from "@/components/UI/PageLink/PageLink";
import { RoutesEnum } from "@/constants/routes";

const { Articles, Forum, Shop, Gallery } = RoutesEnum;

const Offers = () => {
   return (
      <section className={styles.offers}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.pages}>
                  <h2 className={styles.title}>Мы предлагаем</h2>
                  <div className={styles.pageLinks}>
                     <PageLink to={Articles} className={styles.pageLink}>
                        <p className={styles.linkName}>Статьи</p>
                     </PageLink>
                     <PageLink to={Shop} className={styles.pageLink}>
                        <p className={styles.linkName}>Товары</p>
                        <div className={styles.product}>
                           <img src="https://i.imgur.com/Rl30VgO.jpeg" alt="Товар" />
                        </div>
                     </PageLink>
                     <PageLink to={Forum} className={styles.pageLink}>
                        <p className={styles.linkName}>Форум</p>
                     </PageLink>
                     <PageLink to={Gallery} className={styles.pageLink}>
                        <p className={styles.linkName}>Галерея</p>
                        <div className={styles.galleryImg}>
                           <img
                              src="https://images.unsplash.com/photo-1554692901-e16f2046918a?q=80&w=742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Картинка из галереи"
                           />
                           <p className={styles.imgTitle}>
                              Радуется весне :D
                           </p>
                        </div>
                     </PageLink>
                  </div>
               </div>
            </div>
         </Wrapper>
      </section>
   );
};

export default Offers;
