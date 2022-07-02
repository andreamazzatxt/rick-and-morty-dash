import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/global";
import { Character } from "../../../types/global";

import Modal from "../../modal/Modal";
import styles from "./CharacterCard.module.css";

type Props = {
  data: Character;
};

const CharacterCard = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { favourites, addFavourite, removeFavourite } =
    useContext(GlobalContext);
  return (
    <>
      <div className={styles.card} onClick={() => setIsModalOpen(true)}>
        <img
          className={styles.avatar}
          src={data.image}
          alt={data.name + " avatar image"}
        />
        <p>{data.name}</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      >
        <div>
          <h2>Details</h2>
          <img src={data.image} alt={data.name + " image"} />
          <p>id: {data.id}</p>
          <p>name: {data.name}</p>
          <p>gender: {data.gender}</p>
          <p>species: {data.species}</p>
          <p>origin: {data.origin.name}</p>
          <p>location: {data.location.name}</p>
          {!favourites?.some(({ id }) => id === data.id) ? (
            <button
              onClick={() =>
                addFavourite &&
                addFavourite({
                  id: data.id,
                  name: data.name,
                  url: data.url,
                  image: data.image,
                })
              }
            >
              Add Fav
            </button>
          ) : (
            <button onClick={() => removeFavourite && removeFavourite(data.id)}>
              Remove Fav
            </button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CharacterCard;
