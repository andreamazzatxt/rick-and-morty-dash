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
          <div className={styles.close} onClick={handleClose}>
            x
          </div>
          {children}
        </div>
      </div>
    )}
  </>
);

export default Modal;
