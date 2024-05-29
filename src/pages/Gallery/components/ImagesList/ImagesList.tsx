import { useFetchAllGalleryImagesQuery } from "@/services/YourDoggoService";
import styles from "./ImagesList.module.scss";
import Image from "../Image/Image";
import Loading from "@/components/Loading/Loading";
import { useGalleryFilter } from "@/hooks/useGalleryFilter";

const ImagesList = () => {
   const { data: images, isLoading, isError } = useGalleryFilter()

   if (isError) {
      return <p>Ошибка</p>;
   }

   if (isLoading) {
      return <Loading />;
   }

   return (
      <div className={styles.content}>
         {images?.length ? (
            images.map((image) => (
               <Image
                  key={image._id}
                  id={image._id}
                  user={image.userId}
                  title={image.title}
                  tags={image.tags}
                  img={image.imgLink}
                  datetime={image.datetime}
                  login={image.login}
                  isLiked={image.isLiked}
                  likes={image.likes}
               />
            ))
         ) : (
            <p>Ничего не найдено</p>
         )}
      </div>
   );
};

export default ImagesList;
