import styles from "./SearchSelect.module.css";

type Props = {
  currentOption: string | undefined;
  options: string[];
  onChange: (newValue: string) => void;
  title: string;
};
const SearchSelect = ({ currentOption, title, options, onChange }: Props) => (
  <div className={styles.wrapper}>
    <span className={styles.title}>{title}</span>
    <div className={styles.inner}>
      {options.map((option) => (
        <span
          className={
            currentOption === option ? styles.selected : styles.notSelected
          }
          key={`option-${option}`}
          onClick={() => {
            onChange(option === currentOption ? "" : option);
          }}
        >
          {option}
        </span>
      ))}
    </div>
  </div>
);

export default SearchSelect;
