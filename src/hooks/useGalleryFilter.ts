import { useFetchAllGalleryImagesQuery} from "@/services/YourDoggoService";
import { useAppSelector } from "./redux";

export const useGalleryFilter = () => {
   const filters = useAppSelector(state => state.galleryFilter)
   const data = useFetchAllGalleryImagesQuery(filters);

   return data
};