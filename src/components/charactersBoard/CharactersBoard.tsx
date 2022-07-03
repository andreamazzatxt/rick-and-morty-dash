import styles from "./CharactersBoard.module.css";
import CharacterCard from "./characterCard/CharacterCard";
import { Character } from "../../types/global";
import NothingHere from "../nothingHere/NothingHere";

type Props = {
  characters: Character[];
};

const CharactersBoard = ({ characters }: Props) => (
  <div className={styles.board}>
    {characters.map((data) => (
      <CharacterCard key={data.id} data={data} />
    ))}
    {characters.length === 0 && (
      <NothingHere message="No results for the selected filters" />
    )}
  </div>
);

export default CharactersBoard;
