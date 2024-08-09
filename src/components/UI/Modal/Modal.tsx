import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { HTMLAttributes } from "react";
import { useModal } from "@/hooks/useModal";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
   modalContent: string;
}

export const Modal = ({
   modalContent,
   className,
   children,
   ...attributes
}: ModalProps) => {
   const isOpened = useModal(modalContent);

   if (!isOpened) return null;

   return createPortal(
      <div className={[styles.modal, className].join(" ")} {...attributes}>
         {children}
      </div>,
      document.getElementById("modal") as HTMLElement
   );
};
