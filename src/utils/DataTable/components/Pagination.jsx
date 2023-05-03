import React from "react";
import SimpleSelect from "../../SimpleSelect";

const Pagination = ({
  dataFiltered,
  displayedQt,
  pageActive,
  setPageActive,
}) => {
  const PAGE_SEL_STYLES =
    "group bg-secondary text-primary disabled:text-primaryLight shadow active:shadow-none disabled:shadow h-10 w-10 flex justify-center items-center rounded-lg select-none";
  const PAGINATION_STYLES = "fill-primary group-disabled:fill-primaryLight";

  // Calculating the pagination needed to display the data
  // based on the select limit
  const calculatePagination = () => {
    let floor = Math.floor(dataFiltered.length / displayedQt);
    const modulo = dataFiltered.length % displayedQt;
    if (modulo !== 0) {
      floor += 1;
    }
    return Array.from({ length: floor }, (_, index) => index + 1);
  };

  const pagination = calculatePagination();

  return (
    <div className='flex  justify-between items-center w-full sm:w-3/4 sm:justify-end gap-x-2'>
      <button
        disabled={pageActive === 1 ? true : false}
        onClick={() => setPageActive(pagination[0])}
        className={PAGE_SEL_STYLES}
      >
        <svg
          stroke='currentColor'
          strokeWidth='0'
          className={PAGINATION_STYLES}
          viewBox='0 0 24 24'
          height='1.2em'
          width='1.2em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6z'></path>
          <path d='M11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z'></path>
        </svg>
      </button>
      <button
        disabled={pageActive === 1 ? true : false}
        onClick={() => setPageActive(pageActive - 1)}
        className={PAGE_SEL_STYLES}
      >
        <svg
          stroke='currentColor'
          strokeWidth='0'
          className={PAGINATION_STYLES}
          viewBox='0 0 24 24'
          height='1.2em'
          width='1.2em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0V0z'></path>
          <path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'></path>
        </svg>
      </button>
      <SimpleSelect
        options={pagination}
        handle={setPageActive}
        value={pageActive}
        down={false}
      />
      <button
        disabled={
          pageActive === pagination[pagination.length - 1] ? true : false
        }
        onClick={() => setPageActive(pageActive + 1)}
        className={PAGE_SEL_STYLES}
      >
        <svg
          stroke='currentColor'
          className={PAGINATION_STYLES}
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1.2em'
          width='1.2em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0V0z'></path>
          <path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'></path>
        </svg>
      </button>
      <button
        disabled={
          pageActive === pagination[pagination.length - 1] ? true : false
        }
        onClick={() => setPageActive(pagination[pagination.length - 1])}
        className={PAGE_SEL_STYLES}
      >
        <svg
          stroke='currentColor'
          className={PAGINATION_STYLES}
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1.2em'
          width='1.2em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z'></path>
          <path d='M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z'></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
