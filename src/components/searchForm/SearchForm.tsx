import { useCallback, useState } from "react";
import { CharacterApiParameters } from "../../types/api";
import { CharacterStatus, Gender } from "../../types/global";
import SearchInput from "./components/searchInput/SearchInput";
import SearchSelect from "./components/searchSelect/SearchSelect";
import styles from "./SearchForm.module.css";

type Props = {
  search: (parameters: CharacterApiParameters) => void;
};
const SearchForm = ({ search }: Props) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<CharacterStatus>();
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState<Gender>();

  const handleNameChange = useCallback(
    (newValue: string) => {
      setName(newValue);
      const params = { name: newValue, status, species, gender };
      search(params);
    },
    [gender, search, species, status]
  );

  const handleStatusChange = useCallback(
    (newValue: string) => {
      setStatus(newValue as CharacterStatus);
      const params = {
        name,
        status: newValue as CharacterStatus,
        species,
        gender,
      };
      search(params);
    },
    [gender, name, search, species]
  );

  const handleGenderChange = useCallback((newValue: string) => {
    setGender(newValue as Gender);
    const params = {
      name,
      status,
      species,
      gender: newValue as Gender,
    };
    search(params);
  }, []);

  const handleBlur = useCallback(() => {
    const params = { name, status, species, gender };
    search(params);
  }, [gender, name, search, species, status]);

  return (
    <div className={styles.wrapper}>
      <SearchInput
        onChange={handleNameChange}
        title="Insert Name"
        placeholder="Rick, Morty, Summer ..."
        value={name}
        onBlur={handleBlur}
      />
      <SearchSelect
        options={["alive", "dead", "unknown"]}
        title="Select status"
        currentOption={status}
        onChange={handleStatusChange}
      />

      <SearchInput
        onChange={(newValue: string) => setSpecies(newValue)}
        title="Insert Species"
        placeholder="human, robot, dog ..."
        value={species}
        onBlur={handleBlur}
      />
      <SearchSelect
        options={["female", "male", "genderless", "unknown"]}
        title={"Select Gender"}
        currentOption={gender}
        onChange={handleGenderChange}
      />
    </div>
  );
};

export default SearchForm;
