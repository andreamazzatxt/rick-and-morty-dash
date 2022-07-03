import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/global";
import Modal from "../modal/Modal";
import FavouriteCard from "./favouriteCard/FavouriteCard";
import favLogo from "../../assets/images/favourites_logo.png";
import styles from "./Favourites.module.css";
import NothingHere from "../nothingHere/NothingHere";

const Favourites = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { favourites } = useContext(GlobalContext);
  return (
    <>
      <div onClick={() => setIsOpen(true)} className={styles.icon}>
        <img src={favLogo} alt="Favourites Logo" />
      </div>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <div>
          <h2 className={styles.title}>Favourites</h2>
          <div className={styles.favsContainer}>
            {favourites?.map((data) => (
              <FavouriteCard key={`fav-${data.id}`} data={data} />
            ))}
            {favourites?.length === 0 && (
              <NothingHere message="No favourites" />
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Favourites;
