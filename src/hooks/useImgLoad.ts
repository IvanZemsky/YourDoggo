import { ChangeEvent, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useImgLoad = () => {
   const [imgLink, setImgLink] = useState("");
   const [isError, setIsError] = useState(false);

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setImgLink(event.target.value);
      setIsError(false);
   };

   const debouncedHandler = useDebounce(handleInputChange, 500)

   const handleImageLoad = () => {
      setIsError(false);
   };

   const handleImageError = () => {
      setIsError(true);
   };

   return {imgLink, isError, debouncedHandler, handleInputChange, handleImageLoad, handleImageError}
}