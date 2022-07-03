import { useCallback, useContext } from "react";
import { GlobalContext } from "../../../../contexts/global";
import { Character, Episode } from "../../../../types/global";
import Modal from "../../../modal/Modal";
import styles from "./CharacterModal.module.css";

type Props = {
  isModalOpen: boolean;
  data: Character;
  setIsModalOpen: (bool: boolean) => void;
  episodes: Episode[];
};
const CharacterModal = ({
  isModalOpen,
  data,
  episodes,
  setIsModalOpen,
}: Props) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(GlobalContext);
  const handleAddFavourite = useCallback(() => {
    addFavourite &&
      addFavourite({
        id: data.id,
        name: data.name,
        url: data.url,
        image: data.image,
      });
  }, [addFavourite, data.id, data.image, data.name, data.url]);

  const handleRemoveFavourite = useCallback(
    () => removeFavourite && removeFavourite(data.id),
    [data.id, removeFavourite]
  );
  return (
    <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
      <div className={styles.modalContent}>
        <h2>{data.name}</h2>
        <div className={styles.modalTop}>
          <img src={data.image} alt={data.name + " image"} />
          <div>
            <p>
              Gender: <span className={styles.detail}>{data.gender}</span>
            </p>
            <p>
              Species: <span className={styles.detail}>{data.species}</span>
            </p>
            <p>
              Origin:<span className={styles.detail}> {data.origin.name}</span>
            </p>
            <p>
              Location:
              <span className={styles.detail}> {data.location.name}</span>
            </p>
            {!favourites?.some(({ id }) => id === data.id) ? (
              <button
                className={styles.favouriteButton}
                onClick={handleAddFavourite}
              >
                <span className={styles.heartOff}> ♥ </span> Add to favourites
              </button>
            ) : (
              <button
                className={styles.favouriteButton}
                onClick={handleRemoveFavourite}
              >
                <span className={styles.heartOn}> ♥ </span>
                Remove Fav
              </button>
            )}
          </div>
        </div>
        <p>Episodes: </p>
        <div className={styles.episodeBox}>
          {episodes &&
            episodes.map((ep) => (
              <span className={styles.modalEpisode} key={ep.episode}>
                <span className={styles.episodeLeft}>{ep.episode}</span>
                <span className={styles.episodeRight}>{ep.name}</span>
              </span>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default CharacterModal;
