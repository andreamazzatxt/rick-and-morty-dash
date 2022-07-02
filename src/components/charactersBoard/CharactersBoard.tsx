import styles from "./CharactersBoard.module.css";
import CharacterCard from "./characterCard/CharacterCard";
import { Character } from "../../types/global";

type Props = {
  characters: Character[];
};

const CharactersBoard = ({ characters }: Props) => (
  <div className={styles.board}>
    {characters.map((data) => (
      <CharacterCard key={data.id} data={data} />
    ))}
  </div>
);

export default CharactersBoard;
