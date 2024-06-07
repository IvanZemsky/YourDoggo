import { useState, useEffect } from "react";

export const useImageLoad = (imgLink: string) => {
   const [size, setSize] = useState({ width: 0, height: 0 });

   useEffect(() => {
       const img = new Image();
       img.src = imgLink;
       img.onload = () => {
           setSize({ width: img.width, height: img.height });
       };
   }, [imgLink]);

   return size
}