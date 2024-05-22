import { useFetchAllGalleryImagesQuery } from "@/services/YourDoggoService";
import styles from "./ImagesList.module.scss";
import Image from "../Image/Image";
import Loading from "@/components/Loading/Loading";

const ImagesList = () => {
   const { data: images, isLoading, isError } = useFetchAllGalleryImagesQuery({userLogin: true});

   if (isError) {
      return <p>Ошибка</p>;
   }

   if (isLoading) {
      return <Loading />;
   }

   return (
      <div className={styles.content}>
         {images?.length ? (
            images.map((images) => (
               <Image
                  key={images._id}
                  id={images._id}
                  user={images.userId}
                  title={images.title}
                  tags={images.tags}
                  img={images.imgLink}
                  datetime={images.datetime}
                  login={images.login}
               />
            ))
         ) : (
            <p>Ничего не найдено</p>
         )}
      </div>
   );
};

export default ImagesList;
