import styles from "./Header.module.css";
import logo from "../../assets/images/header_logo.png";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <img src={logo} alt="Rick and Morty Logo" />
      </div>
    </div>
  );
};

export default Header;
