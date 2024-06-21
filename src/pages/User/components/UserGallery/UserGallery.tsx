import { useFetchAllGalleryImagesQuery} from "@/services/gallery";
import styles from "./UserGallery.module.scss";
import Loading from "@/components/Loading/Loading";
import PageLink from "@/components/UI/PageLink/PageLink";
import ArrowIcon  from '@/components/UI/icons/ArrowIcon';
import { useAppDispatch } from "@/hooks/redux";
import { setUserId, setLiked } from "@/store/slices/gallery/galleryFilterSlice";
import { RoutesEnum } from "@/constants/routes";

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
                  <h2 className={styles.sectionTitle}>Галерея</h2>
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
