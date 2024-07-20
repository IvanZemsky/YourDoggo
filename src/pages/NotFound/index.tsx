import styles from "./NotFound.module.scss";
import { RoutesEnum } from "@/constants/routes";
import {Wrapper, PageLink} from "@/components/UI";

const { Home, Forum, Articles, Gallery, Shop } = RoutesEnum;

const index = () => {
   return (
      <Wrapper>
         <div className={styles.content}>
            <div>
               <p className={styles.text}>{"Здесь ничего нет :("}</p>
               <p className={styles.desc}>
                  Вы попали на пустую страницу. Пожалуйста, перейдит на один из
                  разделов:
               </p>
               <div className={styles.links}>
                  <PageLink to={Home} variant="outlined">
                     Главная
                  </PageLink>
                  <PageLink to={Articles} variant="outlined">
                     Статьи
                  </PageLink>
                  <PageLink to={Shop} variant="outlined">
                     Магазин
                  </PageLink>
                  <PageLink to={Forum} variant="outlined">
                     Форум
                  </PageLink>
                  <PageLink to={Gallery} variant="outlined">
                     Галерея
                  </PageLink>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default index;
