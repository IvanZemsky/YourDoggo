import {Modal, Button, Wrapper} from "@/shared/ui";
import { useAppDispatch } from "@/hooks/redux";
import { closeModal } from "@/store/slices/modalSlice";
import styles from "./StartModal.module.scss";
import StartModalCard from "./StartModalCard/StartModalCard";

const cards = [
   {
      name: "Статьи",
      desc: "Читайте и пишите статьи, узнавайте новое о питомцах, делитесь опытом и впечатлениями",
      link: "/articles",
   },
   {
      name: "Магазин",
      desc: "Приобретайте товары для питомцев. От корма до товаров по уходу, оцените качество нашей продукции",
      link: "/shop",
   },
   {
      name: "Форум",
      desc: "Общайтесь с другими владельцами собак, создавайте и обсуждайте темы, находите решения проблем совместными усилиями",
      link: "/forum",
   },
   {
      name: "Галерея",
      desc: "Делитесь фотографиями своих домашних любимцев, оценивайте творчество пользователей и ищите вдохновение",
      link: "/gallery",
   },
];

const modalContent = "startModal";

const StartModal = () => {
   const dispatch = useAppDispatch();

   const handleCloseClick = () => dispatch(closeModal());

   return (
      <Modal modalContent={modalContent} className={styles.startModal}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.contentWrap}>
                  <div className={styles.cards}>
                     {cards.map((card) => (
                        <StartModalCard
                           key={card.name}
                           link={card.link}
                           name={card.name}
                           desc={card.desc}
                           onClick={handleCloseClick}
                        />
                     ))}
                  </div>
                  <Button
                     className={styles.backBtn}
                     onClick={handleCloseClick}
                     variant="outlined"
                  >
                     Назад
                  </Button>
               </div>
            </div>
         </Wrapper>
      </Modal>
   );
};

export default StartModal;
