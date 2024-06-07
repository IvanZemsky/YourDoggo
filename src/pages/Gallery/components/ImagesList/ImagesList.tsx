import styles from "./ImagesList.module.scss";
import Image from "../Image/Image";
import Loading from "@/components/Loading/Loading";
import { useGalleryFilter } from "@/hooks/useGalleryFilter";

const ImagesList = () => {
   const { data: images, isLoading, isFetching, isError } = useGalleryFilter()

   if (isError) {
      return <p>Ошибка</p>;
   }

   if (isLoading || isFetching) {
      return <Loading />;
   }

   return (
      <div className={styles.content}>
         {images?.length ? (
            <div className={styles.images}>
               {images.map((image) => (
               <Image
                  key={image._id}
                  id={image._id}
                  {...image}
               />
            ))}
            </div>
         ) : (
            <p>Ничего не найдено</p>
         )}
      </div>
   );
};

export default ImagesList;
