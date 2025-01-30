import {Button, Wrapper} from "@/shared/ui";
import styles from "./Intro.module.scss";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/modalSlice";
import StartModal from "../StartModal/StartModal";
import { useRef } from "react";
import { useSetStylesObserver } from "@/hooks/useSetStylesObserver";

const Intro = () => {
   const dispatch = useDispatch();
   
   const headerRef = useRef<HTMLHeadingElement>(null)
   const descRef = useRef<HTMLDivElement>(null)

   const handleOpenBtnClick = () => dispatch(openModal("startModal")) // TO CONSTANT

   useSetStylesObserver(headerRef, styles.visible, 100)
   useSetStylesObserver(descRef, styles.visible, 400)

   return (
      <section className={styles.intro}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.info}>
                  
                  <h1 ref={headerRef} className={styles.title}>
                     YourDoggo - всё для вашего любимца здесь!
                  </h1>
                  
                  <p ref={descRef} className={styles.desc}>
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
