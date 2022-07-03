import { ReactNode } from "react";
import styles from "./MainWrapper.module.css";

type Props = {
  children: ReactNode;
};

const MainWrapper = ({ children }: Props) => (
  <div className={styles.wrapper}>{children}</div>
);

export default MainWrapper;
