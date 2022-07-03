import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../contexts/global";
import { Character, Favourite } from "../../../types/global";
import { getSingleCharacter } from "../../../utils/rickMortyApi";
import CharacterCard from "../../charactersBoard/characterCard/CharacterCard";
import styles from "./FavouriteCard.module.css";

type Props = {
  data: Favourite;
};
const FavouriteCard = ({ data }: Props) => {
  const { removeFavourite } = useContext(GlobalContext);

  const [characterData, setCharacterData] = useState<Character>();

  useEffect(() => {
    getSingleCharacter(data.id).then((char) => setCharacterData(char));
  }, [data.id]);
  return (
    <div className={styles.wrapper}>
      {characterData && <CharacterCard data={characterData} />}
      <button onClick={() => removeFavourite && removeFavourite(data.id)}>
        +
      </button>
    </div>
  );
};

export default FavouriteCard;
