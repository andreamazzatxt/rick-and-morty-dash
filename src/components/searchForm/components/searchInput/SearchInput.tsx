import styles from "./SearchInput.module.css";
type Props = {
  onChange: (newValue: string) => void;
  value: string;
  placeholder: string;
  title: string;
};
const SearchInput = ({ onChange, value, placeholder, title }: Props) => (
  <div className={styles.wrapper}>
    <span className={styles.title}>{title}</span>
    <div className={styles.inner}>
      <input
        className={styles.input}
        onChange={(e) => onChange(e.currentTarget.value)}
        type="text"
        placeholder={placeholder}
        value={value}
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

export default SearchInput;
