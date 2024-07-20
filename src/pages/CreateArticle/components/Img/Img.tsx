import { useRef } from "react";
import styles from "./Img.module.scss";
import { useImgLoad } from "@/hooks/useImgLoad";

const Img = () => {
   const {
      imgLink,
      isError,
      debouncedHandler,
      handleImageLoad,
      handleImageError,
   } = useImgLoad();

   const inputRef = useRef<HTMLInputElement>(null)

   return (
      <div className={styles.img}>
         <input
            type="text"
            placeholder="Вставьте ссылку на изображение"
            onChange={debouncedHandler}
            ref={inputRef}
         />
         {(imgLink && !isError) && (
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
