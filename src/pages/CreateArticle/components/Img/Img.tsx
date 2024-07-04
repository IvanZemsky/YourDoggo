import styles from "./Img.module.scss";
import { useImgLoad } from "@/hooks/useImgLoad";

const Img = () => {
   const {
      imgLink,
      isError,
      handleInputChange,
      handleImageLoad,
      handleImageError,
   } = useImgLoad();

   return (
      <div className={styles.img}>
         <input
            type="text"
            placeholder="Вставьте ссылку на изображение"
            value={imgLink}
            onChange={handleInputChange}
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
