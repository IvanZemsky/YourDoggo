import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { ComponentProps } from "react";
import { useModal } from "@/hooks/useModal";

type Props = ComponentProps<"div"> & {
   modalContent: string;
}

export const Modal = ({
   modalContent,
   className,
   children,
   ...attributes
}: Props) => {
   const isOpened = useModal(modalContent);

   if (!isOpened) return null;

   return createPortal(
      <div className={[styles.modal, className].join(" ")} {...attributes}>
         {children}
      </div>,
      document.getElementById("modal") as HTMLElement
   );
};
