import styles from "./FavouriteButton.module.css";
type Props = {
  isFav: boolean;
  handleAction: () => void;
};

const FavouriteButton = ({ isFav, handleAction }: Props) => (
  <button className={styles.favouriteButton} onClick={handleAction}>
    <span className={isFav ? styles.heartOn : styles.heartOff}> ♥ </span>{" "}
    {isFav ? "Remove Favourite" : "Add Favourite"}
  </button>
);

export default FavouriteButton;
