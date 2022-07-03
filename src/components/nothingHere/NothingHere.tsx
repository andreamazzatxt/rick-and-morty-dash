import styles from "./NothingHere.module.css";
import portal from "../../assets/images/rm_portal.png";

type Props = {
  message: string;
};
const NothingHere = ({ message }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={portal} alt="Portal" />
      <p>{message}</p>
    </div>
  );
};

export default NothingHere;
