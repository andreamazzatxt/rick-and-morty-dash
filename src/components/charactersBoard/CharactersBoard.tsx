import styles from "./CharactersBoard.module.css";
import { Character } from "../../types/api";
import CharacterCard from "./characterCard/CharacterCard";

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
