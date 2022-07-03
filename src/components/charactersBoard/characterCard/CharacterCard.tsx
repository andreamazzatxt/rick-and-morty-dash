import { useCallback, useState } from "react";
import { Character, Episode } from "../../../types/global";
import { getMultipleEpisodes } from "../../../utils/rickMortyApi";

import styles from "./CharacterCard.module.css";
import CharacterModal from "./characterModal/CharacterModal";

type Props = {
  data: Character;
};

const CharacterCard = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
    getMultipleEpisodes(data.episode).then((results) => {
      console.log(results);
      setEpisodes(results || []);
    });
  }, [data.episode]);

  return (
    <>
      <div className={styles.card} onClick={handleClick}>
        <img
          className={styles.avatar}
          src={data.image}
          alt={data.name + " avatar image"}
        />
        <p className={styles.name}>{data.name}</p>
      </div>
      <CharacterModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={data}
        episodes={episodes}
      />
    </>
  );
};

export default CharacterCard;
