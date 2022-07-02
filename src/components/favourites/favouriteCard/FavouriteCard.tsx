import { useContext } from "react";
import { GlobalContext } from "../../../contexts/global";
import { Favourite } from "../../../types/global";
import styles from "./FavouriteCard.module.css";

type Props = {
  data: Favourite;
};
const FavouriteCard = ({ data }: Props) => {
  const { removeFavourite } = useContext(GlobalContext);
  return (
    <div className={styles.wrapper}>
      <img src={data.image} alt={data.name + " image"} />
      <p>{data.name}</p>
      <button onClick={() => removeFavourite && removeFavourite(data.id)}>
        Remove
      </button>
    </div>
  );
};

export default FavouriteCard;
