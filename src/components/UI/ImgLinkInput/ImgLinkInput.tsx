import { ChangeEvent, forwardRef, InputHTMLAttributes, } from "react";
import {Input} from "../Input/Input";
import { useImgLoad } from "@/hooks/useImgLoad";

interface ImgLinkInputProps extends InputHTMLAttributes<HTMLInputElement> {
   imgText: string;
   handleChange: (...args: any[]) => any
}

export const ImgLinkInput = forwardRef(({ imgText, handleChange, ...attributes }: ImgLinkInputProps, ref) => {
   const {imgLink, isError, debouncedHandler, handleImageLoad, handleImageError} = useImgLoad()

   const handleInputChangeWrapper = (event: ChangeEvent<HTMLInputElement>) => {
      debouncedHandler(event);
      handleChange(event.target.value);
   };

   return (
      <div>
         <Input
            type="text"
            placeholder="Вставьте ссылку на изображение"
            onChange={handleInputChangeWrapper}
            className={attributes.className}
         />
         {(imgLink && !isError) && (
            <img
               src={imgLink}
               alt="Иллюстрация"
               onLoad={handleImageLoad}
               onError={handleImageError}
            />
         )}
         {isError && <p>Ошибка загрузки изображения. Проверьте ссылку.</p>}
      </div>
   );
});
