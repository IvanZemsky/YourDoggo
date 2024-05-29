import { useFetchAllGalleryImagesQuery} from "@/services/YourDoggoService";
import { useAppSelector } from "./redux";

export const useGalleryFilter = () => {
   const filters = useAppSelector(state => state.galleryFilter)
   const userId = useAppSelector(state => state.auth.userId)
   const data = useFetchAllGalleryImagesQuery({...filters, userId});

   return data
};