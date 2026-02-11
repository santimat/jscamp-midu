// import the css modules
import { usePagination } from "@/hooks/usePagination.jsx";
import styles from "@components/css/Pagination.module.css";

// the parameters accept default values
export function Pagination({ totalPages = 5, currentPage = 1, onPageChange }) {
  const {
    handleNextClick,
    handlePrevClick,
    handleChangePage,
    pages,
    isFirstPage,
    isLastPage,
  } = usePagination({ totalPages, currentPage, onPageChange });

  return (
    // select class .pagination from object styles
    <nav className={styles.pagination}>
      {/* if isn't the first page left chevron will be displayed */}
      {/* its called conditional render */}
      {!isFirstPage && (
        <button onClick={handlePrevClick}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
      )}
      {pages.map((p) => {
        return (
          <a
            href="#"
            key={p}
            className={currentPage === p ? styles.isActive : ""}
            // one way is do this
            // onClick={() => handleChangePage(p)}
            // or add a dataset to the element a read it into the handler function
            data-page={p}
            onClick={handleChangePage}
          >
            {p}
          </a>
        );
      })}
      {!isLastPage && (
        <button onClick={handleNextClick}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      )}
    </nav>
  );
}
