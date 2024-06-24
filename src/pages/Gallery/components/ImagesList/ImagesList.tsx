import styles from "./ImagesList.module.scss";
import Image from "../Image/Image";
import Loading from "@/components/Loading/Loading";
import { useGalleryFilter } from "@/services/hooks/useGalleryFilter";
import { Fragment, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { setPage } from "@/store/slices/gallery/galleryFilterSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const ImagesList = () => {
   const { data, isLoading, isFetching, isError } = useGalleryFilter();
   const dispatch = useAppDispatch();

   const images = data?.data;
   const totalCount = data?.totalCount!;
   const limit = useAppSelector((state) => state.galleryFilter.limit) || 12;
   const page = useAppSelector((state) => state.galleryFilter.page) || 1;
   const triggerRef = useRef<HTMLDivElement>(null);

   const isLoadedAll = Math.ceil(totalCount / limit) <= page;

   const loadData = () => {
      if (!isLoadedAll) {
         dispatch(setPage());
      }
   };

   useIntersectionObserver(triggerRef, loadData);

   if (isError) {
      return <p>Ошибка</p>;
   }

   if ((isLoading || isFetching) && page === 1) {
      return <Loading />;
   }

   return (
      <Fragment>
         <div className={styles.content}>
            {images?.length ? (
               <div className={styles.images}>
                  {images.map((image) => (
                     <Image key={image._id} id={image._id} {...image} />
                  ))}
               </div>
            ) : (
               <p>Ничего не найдено</p>
            )}
            {(isLoading || isFetching) && page !== 1 ? (
               <div className={styles.loader}>
                  <Loading />
               </div>
            ) : (
               <div ref={triggerRef} className={styles.trigger}></div>
            )}
         </div>
      </Fragment>
   );
};

export default ImagesList;
