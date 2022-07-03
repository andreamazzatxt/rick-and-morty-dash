import { useCallback, useContext } from "react";
import { GlobalContext } from "../../../../contexts/global";
import { Character, Episode } from "../../../../types/global";
import Modal from "../../../modal/Modal";
import styles from "./CharacterModal.module.css";
import FavouriteButton from "./favouriteButton/FavouriteButton";

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
    addFavourite({
      id: data.id,
      name: data.name,
      url: data.url,
      image: data.image,
    });
  }, [addFavourite, data.id, data.image, data.name, data.url]);

  const handleRemoveFavourite = useCallback(
    () => removeFavourite(data.id),
    [data.id, removeFavourite]
  );
  const isFav = !!favourites?.some(({ id }) => id === data.id);

  return (
    <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
      <div className={styles.modalContent}>
        <div className={styles.modalTop}>
          <img src={data.image} alt={data.name + " image"} />
          <div>
            <h2 className={styles.subtitle}>{data.name}</h2>
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
            <FavouriteButton
              isFav={isFav}
              handleAction={isFav ? handleRemoveFavourite : handleAddFavourite}
            />
          </div>
        </div>
        <p className={styles.subtitle}>Episodes: </p>
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
