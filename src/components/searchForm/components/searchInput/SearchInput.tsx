import styles from "./SearchInput.module.css";
type Props = {
  onChange: (newValue: string) => void;
  onBlur: () => void;
  value: string;
  placeholder: string;
  title: string;
};
const SearchInput = ({
  onChange,
  onBlur,
  value,
  placeholder,
  title,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <div className={styles.inner}>
        <input
          className={styles.input}
          onChange={(e) => onChange(e.currentTarget.value)}
          type="text"
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
        />
        {value && (
          <span
            onClick={() => {
              onChange("");
            }}
            className={styles.close}
          >
            +
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
