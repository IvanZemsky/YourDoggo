import styles from "./Modal.module.scss";
import { Fade } from "./../Transitions/Fade";
import { createPortal } from "react-dom";
import { HTMLAttributes, PropsWithChildren, useEffect } from "react";
import { useModal } from "@/hooks/useModal";

interface ModalProps {
   modalContent: string
   className?: string
}

type ModalType = PropsWithChildren<ModalProps> & HTMLAttributes<HTMLDivElement>

const Modal = ({modalContent, className, children, ...attributes}: ModalType) => {
   const isOpened = useModal(modalContent)

   if(!isOpened) return null;

   return createPortal(
      <Fade in={isOpened} >
         <div className={[styles.modal, className].join(" ")} {...attributes}>
            {children}
         </div>
      </Fade>,
      document.getElementById("modal") as HTMLElement
   );
};

export default Modal;
