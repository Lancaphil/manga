import styles from "./modal.module.css";
import { ReactNode } from "react";

export default function Modal({
  active,
  setActive,
  children,
}: {
  children: ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={
        active ? `${styles.modal} ${styles.modalactive}` : styles.modal
      }
      onClick={() => setActive(!active)}
    >
      <div
        className={
          active
            ? `${styles.modal__content} ${styles.modal__content__active}`
            : styles.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
