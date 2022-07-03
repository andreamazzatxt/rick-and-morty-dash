import { getPagesArray } from "../../utils/pagination";
import styles from "./Pagination.module.css";

type Props = {
  totalPages: number;
  currentPage: number;
  goToPage: (page: number) => void;
};
const Pagination = ({ totalPages, currentPage, goToPage }: Props) => (
  <div className={styles.wrapper}>
    {getPagesArray(totalPages).map((page) => (
      <div
        className={page === currentPage ? styles.current : styles.page}
        onClick={() => goToPage(page)}
        key={`page-${page}`}
      >
        {page}
      </div>
    ))}
  </div>
);

export default Pagination;
