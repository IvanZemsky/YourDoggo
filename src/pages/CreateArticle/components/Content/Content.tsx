import {Button} from "@/components/UI";
import styles from "./Content.module.scss";
import { ReactNode,forwardRef, useState } from "react";
import Text from "../Text/Text";
import Header from "../Header/Header";
import Img from "../Img/Img";

const Content = forwardRef<HTMLDivElement>((_, ref) => {
   const [content, setContent] = useState<ReactNode[]>([]);

   const handleTextClick = () => {
      setContent([...content, <Text key={content.length} />]);
   };

   const handleHeaderClick = () => {
      setContent([...content, <Header key={content.length} />]);
   }

   const handleImgClick = () => {
      setContent([...content, <Img key={content.length} />]);
   }

   return (
      <div className={styles.content}>
         <p className={styles.info}>Добавьте текст, загаловки и изображения</p>
         <div className={styles.textWrap}>
            <div className={styles.panel}>
               <Button title="Текст" onClick={handleTextClick}>T</Button>
               <Button title="Заголовок" onClick={handleHeaderClick}>H</Button>
               <Button title="Изображение" onClick={handleImgClick}>IMG</Button>
            </div>
            <div className={styles.textContent} ref={ref}>
               {content && content.map((component) => component)}
            </div>
         </div>
      </div>
   );
});

export default Content;
