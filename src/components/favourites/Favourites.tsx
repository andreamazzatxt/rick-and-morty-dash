import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/global";
import Modal from "../modal/Modal";
import FavouriteCard from "./favouriteCard/FavouriteCard";
import styles from "./Favourites.module.css";

const Favourites = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { favourites } = useContext(GlobalContext);
  return (
    <>
      <div onClick={() => setIsOpen(true)} className={styles.icon}>
        FAVS
      </div>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <div>
          <h2>Favourites</h2>
          {favourites?.map((data) => (
            <FavouriteCard key={`fav-${data.id}`} data={data} />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Favourites;
