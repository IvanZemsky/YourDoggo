import { useFetchGalleryImagesByUserIdQuery } from "@/services/YourDoggoService";
import styles from "./UserGallery.module.scss";
import Loading from "@/components/Loading/Loading";
import PageLink from "@/components/UI/PageLink/PageLink";
import ArrowIcon  from '@/components/UI/icons/ArrowIcon';

interface UserGalleryProps {
   userId: string;
}

const UserGallery = ({ userId }: UserGalleryProps) => {
   const {
      data: images,
      isLoading,
      isError,
   } = useFetchGalleryImagesByUserIdQuery({ id: userId, limit: 4 });

   if (isLoading) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
      images && (
         <div className={styles.communityInfo}>
            <section className={styles.gallery}>
               <header className={styles.header}>
                  <h2 className={styles.sectionTitle}>Галерея</h2>
               </header>
               <div className={styles.galleryBlock}>
                  {images.map((image) => (
                     <div className={styles.imgWrap} key={image._id}>
                        <img src={image.imgLink} alt="Изображение" />
                     </div>
                  ))}
                  <PageLink to="" className={styles.allBtn}>
                     Все
                     <ArrowIcon />
                  </PageLink>
               </div>
            </section>
         </div>
      )
   );
};

export default UserGallery;
