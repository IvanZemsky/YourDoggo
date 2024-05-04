import Button from "@/components/UI/Button/Button";
import styles from "./Intro.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/modalSlice";
import StartModal from "./StartModal/StartModal";

interface btnProps {
   text: string;
}

const Intro = () => {
   const dispatch = useDispatch();

   const handleOpenBtnClick = () => dispatch(openModal("startModal"))

   console.log(1);

   return (
      <section className={styles.intro}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.info}>
                  <h1 className={styles.title}>
                     YourDoggo - всё для вашего любимца здесь!
                  </h1>
                  <p>
                     Самое большое сообщество любителей собак. Читайте статьи,
                     приобретайте товары для питомцев и общайтесь с
                     единомышленниками!
                  </p>
                  <Button variant="filled" className={styles.startBtn} onClick={handleOpenBtnClick}>
                     Начать
                  </Button>
                  <StartModal />
               </div>
            </div>
         </Wrapper>
      </section>
   );
};

export default Intro;
