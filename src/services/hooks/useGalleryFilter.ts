import { useFetchAllGalleryImagesQuery,} from "@/services/gallery";
import { useAppSelector } from "../../hooks/redux";

export const useGalleryFilter = () => {
   const filters = useAppSelector(state => state.galleryFilter)
   const authUserId = useAppSelector(state => state.auth.userId)

   const data = useFetchAllGalleryImagesQuery({...filters, authUserId});

   return data
};