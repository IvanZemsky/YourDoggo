import Button from "@/components/UI/Button/Button";
import styles from "./Intro.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/modalSlice";
import StartModal from "./StartModal/StartModal";
import { useEffect, useState } from "react";
import { Fade } from "@/components/UI/Transitions/Fade";

const Intro = () => {
   const dispatch = useDispatch();
   const [isAppeared, setIsAppeared] = useState<boolean>(false)

   useEffect(() => {
      console.log(2)
      setIsAppeared(true)
   }, [])

   const handleOpenBtnClick = () => dispatch(openModal("startModal"))

   console.log(1);

   return (
      <section className={styles.intro}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.info}>
                  <Fade in={isAppeared}>
                  <h1 className={styles.title}>
                     YourDoggo - всё для вашего любимца здесь!
                  </h1>
                  </Fade>
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
