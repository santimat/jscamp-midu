export function usePagination({totalPages,currentPage,onPageChange}){
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

  return {handleNextClick, handleChangePage,handlePrevClick, pages,isFirstPage,isLastPage}
}