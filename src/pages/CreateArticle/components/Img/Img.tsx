import { useState } from "react";
import styles from "./Img.module.scss";

const Img = () => {
   const [imgLink, setImgLink] = useState<string>("");
   const [isError, setIsError] = useState<boolean>(false);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setImgLink(e.target.value);
      setIsError(false);
   };

   const handleImageLoad = () => {
      setIsError(false);
   };

   const handleImageError = () => {
      setIsError(true);
   };

   return (
      <div className={styles.img}>
         <input 
            type="text" 
            placeholder="Вставьте ссылку на изображение" 
            value={imgLink}
            onChange={handleInputChange}
         />
         {imgLink && (
            <img 
               src={imgLink} 
               alt="Иллюстрация" 
               onLoad={handleImageLoad} 
               onError={handleImageError} 
            />
         )}
         {isError && <p>Ошибка загрузки изображения. Проверьте ссылку.</p>}
      </div>
   );
};

export default Img;