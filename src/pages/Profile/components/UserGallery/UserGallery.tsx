import { useFetchAllGalleryImagesQuery, } from "@/services/gallery";
import styles from "./UserGallery.module.scss";
import Loading from "@/components/Loading/Loading";
import PageLink from "@/components/UI/PageLink/PageLink";
import ArrowIcon from "@/components/UI/icons/ArrowIcon";
import { RoutesEnum } from "@/constants/routes";
import { useAppDispatch } from "@/hooks/redux";
import { setLiked, setUserId } from "@/store/slices/gallery/galleryFilterSlice";

const {Gallery} = RoutesEnum

interface UserGalleryProps {
   userId: string;
}

const UserGallery = ({ userId }: UserGalleryProps) => {
   const {
      data,
      isLoading,
      isFetching,
      isError,
   } = useFetchAllGalleryImagesQuery({ id: userId, limit: 4, userId  });

   const images = data?.data

   const dispatch = useAppDispatch();

   const handleLikedClick = () => {
      dispatch(setUserId(""))
      dispatch(setLiked(true));
   };

   const handleAllClick = () => {
      dispatch(setLiked(false));
      dispatch(setUserId(userId))
   }

   if (isLoading || isFetching) {
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
                  <h2 className={styles.sectionTitle}>Ваша галерея</h2>
                  <PageLink variant="none" shadow={false} to={`/${Gallery}`} onClick={handleLikedClick}>
                     Понравившиеся
                  </PageLink>
               </header>
               <div className={styles.galleryBlock}>
                  {images.map((image) => (
                     <div className={styles.imgWrap} key={image._id}>
                        <img src={image.imgLink} alt="Изображение" />
                     </div>
                  ))}
                  <PageLink to={`/${Gallery}`} className={styles.allBtn} onClick={handleAllClick}>
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
