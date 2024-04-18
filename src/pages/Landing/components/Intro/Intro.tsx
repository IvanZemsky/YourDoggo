import Button from "@/components/UI/Button/Button";
import styles from "./Intro.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";

interface btnProps {
   text: string;
}

const Intro = () => {
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
                  <Button variant="filled" className={styles.startBtn}>
                     Начать
                  </Button>
               </div>
            </div>
         </Wrapper>
      </section>
   );
};

export default Intro;
