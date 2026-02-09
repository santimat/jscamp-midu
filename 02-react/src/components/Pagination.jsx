// import the css modules
import styles from "@components/css/Pagination.module.css";

// the parameters accept default values
export function Pagination({ totalPages = 5, currentPage = 1, onPageChange }) {
  // generate pages array to display
  // array.from() makes possible create an array from a length and initialize his values for each position
  const pages = Array.from(
    { length: totalPages },
    // when a parameter will be ignored is used "_"
    (_, i) => {
      // return i + 1 because our pages start in 1
      return i + 1;
    },
  );

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // previous page
  const handlePrevClick = () => {
    if (!isFirstPage) {
      // substract 1 to current page and send the value to the function
      onPageChange(currentPage - 1);
    }
  };

  // next page
  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  // setPage with the numbers
  const handleChangePage = (e) => {
    e.preventDefault();
    // get page from data attribute
    const { page } = e.target.dataset;

    // prevent change page when page clicked is same to currentPage
    if (page !== currentPage) {
      // "+" is to convert variable's value to a number, it's the same as doing Number(value)
      onPageChange(+page);
    }
  };

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
