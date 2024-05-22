import { useFetchGalleryImagesByUserIdQuery } from "@/services/YourDoggoService";
import styles from './UserGallery.module.scss'
import Loading from "@/components/Loading/Loading";

interface UserGalleryProps {
   userId: string
}

const UserGallery = ({userId}: UserGalleryProps) => {

   const {data: images, isLoading, isError} = useFetchGalleryImagesByUserIdQuery({id: userId, limit: 5})

   if (isLoading) {
      return <Loading />
   }

   if (isError) {
      return <p>Ошибка</p>
   }

   return (
      images && <div className={styles.communityInfo}>
         <section className={styles.gallery}>
            <h2 className={styles.sectionTitle}>Ваша галерея</h2>
            <div className={styles.galleryBlock}>
               {images.map(image => (
                  <div className={styles.imgWrap} key={image._id}>
                     <img src={image.imgLink} alt="Изображение" />
                  </div>
               ))}
            </div>
         </section>
      </div>
   );
};

export default UserGallery;
