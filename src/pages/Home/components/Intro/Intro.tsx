import Button from "@/components/UI/Button/Button";
import styles from "./Intro.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/modalSlice";
import StartModal from "./StartModal/StartModal";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Intro = () => {
   const dispatch = useDispatch();
   const headerRef = useRef<HTMLHeadingElement>(null)
   const descRef = useRef<HTMLDivElement>(null)

   console.log('121212')

   const handleOpenBtnClick = () => dispatch(openModal("startModal"))

   useIntersectionObserver(headerRef, styles.visible)
   useIntersectionObserver(descRef, styles.visible, 300)

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