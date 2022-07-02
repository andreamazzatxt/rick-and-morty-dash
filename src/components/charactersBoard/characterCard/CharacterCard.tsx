import { useState } from "react";
import { Character } from "../../../types/api";
import Modal from "../../modal/Modal";
import styles from "./CharacterCard.module.css";

type Props = {
  data: Character;
};

const CharacterCard = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
        handleClose={() => {
          console.log("click");
          setIsModalOpen(false);
        }}
      >
        <div>
          <h2>Details</h2>
          <img src={data.image} alt={data.name + " image"} />
          <p>name: {data.name}</p>
          <p>gender: {data.gender}</p>
          <p>species: {data.species}</p>
          <p>origin: {data.origin.name}</p>
          <p>location: {data.location.name}</p>
        </div>
      </Modal>
    </>
  );
};

export default CharacterCard;
