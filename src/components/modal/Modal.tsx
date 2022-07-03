import { ReactNode } from "react";
import styles from "./Modal.module.css";

type Props = {
  isOpen: boolean;
  children?: ReactNode;
  handleClose?: () => void;
};

const Modal = ({ isOpen, children, handleClose }: Props) => (
  <>
    {isOpen && (
      <div className={styles.overlay}>
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

export default Modal;
