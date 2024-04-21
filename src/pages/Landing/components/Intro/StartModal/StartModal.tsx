import Modal from "@/components/UI/Modal/Modal";
import { useAppDispatch } from "@/hooks/redux";
import { closeModal } from "@/store/slices/modalSlice";
import styles from "./StartModal.module.scss";
import StartModalCard from "./StartModalCard/StartModalCard";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import Button from "@/components/UI/Button/Button";

const cards = [
   {
      name: "Статьи",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit unde ipsam hic quas id molestias ad vel quam minima",
      link: "/articles",
   },
   {
      name: "Магазин",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit unde ipsam hic quas id molestias ad vel quam minima",
      link: "/shop",
   },
   {
      name: "Форум",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit unde ipsam hic quas id molestias ad vel quam minima",
      link: "/forum",
   },
   {
      name: "Галерея",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit unde ipsam hic quas id molestias ad vel quam minima",
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
               <Button className={styles.backBtn} onClick={handleCloseClick} variant="outlined">
                  Назад
               </Button >
            </div>
         </Wrapper>
      </Modal>
   );
};

export default StartModal;
