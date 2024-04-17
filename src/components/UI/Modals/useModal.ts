import { useState } from "react";

interface IUseModal {
   isOpened: boolean
   handleOpen: () => void
   handleClose: () => void
}

export const useModal: () => IUseModal = () => {
   const [isOpened, setIsOpened] = useState(false);

   const handleOpen = () => {
      setIsOpened(true);
   }

   const handleClose = () => {
      setIsOpened(false);
   }

   return {
      isOpened,
      handleOpen,
      handleClose
   }
}