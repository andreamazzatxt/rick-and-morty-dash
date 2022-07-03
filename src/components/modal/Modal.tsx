import { ReactNode, useCallback, useEffect, useRef } from "react";
import styles from "./Modal.module.css";

type Props = {
  isOpen: boolean;
  children?: ReactNode;
  handleClose: () => void;
};

const Modal = ({ isOpen, children, handleClose }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeOnOutsideClick = useCallback(
    (event: Event) => {
      const { current } = overlayRef;
      if (current && current.isSameNode(event.target as Node)) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("click", closeOnOutsideClick, true);
    return () =>
      document.removeEventListener("click", closeOnOutsideClick, true);
  }, [closeOnOutsideClick]);

  return (
    <>
      {isOpen && (
        <div ref={overlayRef} className={styles.overlay}>
          <div className={styles.modal}>
            <span className={styles.close} onClick={handleClose}>
              +
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
