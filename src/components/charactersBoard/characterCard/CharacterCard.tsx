import { Character } from "../../../types/api";
import styles from "./CharacterCard.module.css";

type Props = {
  data: Character;
};

const CharacterCard = ({ data }: Props) => {
  const { name } = data;
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={data.image}
        alt={data.name + " avatar image"}
      />
      <p>{name}</p>
    </div>
  );
};

export default CharacterCard;
