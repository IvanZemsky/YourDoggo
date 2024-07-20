import {Wrapper}from "@/components/UI";
import styles from "./About.module.scss";
import corgi from "@/assets/img/welsh-corgi.jpg";

const About = () => {
   return (
      <section className={styles.container}>
         <Wrapper>
            <div className={styles.info}>
               <div className={styles.desc}>
                  <h2 className={styles.title}>О нас</h2>
                  <p>
                     Мы предоставляем пользователям-владельцам собак или
                     желающим приобрести питомца возможность общаться, писать и
                     читать статьи, пользоваться нашим магазином товаров.
                  </p>
                  <p>
                     Наша цель - максимально упростить вам жизнь, если у вас
                     есть собака, за которой вы ухаживаете. Мы стремимся
                     включить важнейшие удобства по теме на наш сайт.
                  </p>
               </div>
               <div className={styles.paper}>
                  <img src={corgi} alt="Welsh corgi (illustratuon)" />
               </div>
            </div>
         </Wrapper>
      </section>
   );
};

export default About;
