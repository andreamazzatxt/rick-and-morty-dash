import { useCallback, useState } from "react";
import {
  CharacterApiParameters,
  CharacterStatus,
  Gender,
} from "../../types/api";
import styles from "./SearchForm.module.css";

type Props = {
  search: (parameters: CharacterApiParameters) => void;
};
const SearchForm = ({ search }: Props) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<CharacterStatus>();
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState<Gender>();

  const handleBlur = useCallback(() => {
    const params = { name, status, species, gender };
    search(params);
  }, [gender, name, search, species, status]);

  return (
    <div className={styles.wrapper}>
      <h3>SearchForm</h3>
      <input
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        placeholder="Name"
        value={name}
        onBlur={handleBlur}
      />
      <select
        onChange={(e) => setStatus(e.currentTarget.value as CharacterStatus)}
        onBlur={handleBlur}
      >
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <input
        onChange={(e) => setSpecies(e.currentTarget.value)}
        type="text"
        placeholder="Species"
        value={species}
        onBlur={handleBlur}
      />
      <select
        onChange={(e) => setGender(e.currentTarget.value as Gender)}
        onBlur={handleBlur}
      >
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="genderless">Unknown</option>
      </select>
    </div>
  );
};

export default SearchForm;
