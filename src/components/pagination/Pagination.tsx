import { getPagesArray } from "../../utils/pagination";
import styles from "./Pagination.module.css";

type Props = {
  totalPages: number;
  currentPage: number;
  goToPage: (page: number) => void;
};
const Pagination = ({ totalPages, currentPage, goToPage }: Props) => {
  return (
    <div className={styles.wrapper}>
      {getPagesArray(totalPages).map((page) => (
        <span
          className={page === currentPage ? styles.current : styles.page}
          onClick={() => {
            console.log(page);
            goToPage(page);
          }}
          key={`page-${page}`}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
