import { ChangeEvent, useState } from "react";

export const useImgLoad = () => {
   const [imgLink, setImgLink] = useState("");
   const [isError, setIsError] = useState(false);

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setImgLink(event.target.value);
      setIsError(false);
   };

   const handleImageLoad = () => {
      setIsError(false);
   };

   const handleImageError = () => {
      setIsError(true);
   };

   return {imgLink, isError, handleInputChange, handleImageLoad, handleImageError}
}