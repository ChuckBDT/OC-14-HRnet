import React, { useMemo, useState } from "react";
import CustomSimpleSelect from "../CustomSimpleSelect";

const CustomDataTable = ({ data }) => {
  const [filter, setFilter] = useState("");
  const [displayedQt, setQt] = useState(10);
  const [pageActive, setPageActive] = useState(1);

  // Filtering data from props with input's content
  const dataFiltered = data.filter((data) =>
    JSON.stringify(data).toLowerCase().includes(filter.toLowerCase())
  );

  // Calculating the indexes of data to display depending on
  // the active page
  const getNumbers = () => {
    if (pageActive === 1) {
      return [0, displayedQt];
    } else {
      return [(pageActive - 1) * displayedQt, pageActive * displayedQt];
    }
  };

  const dataRefsToDisplay = getNumbers();

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

  // Args for the CustomSimpleSelect
  const options = [10, 25, 50];
  const handleSelectChoice = (el) => {
    setQt(el);
    setPageActive(1);
  };
  // End of args

  const PAGE_SEL_STYLES =
    "group bg-secondary text-primary disabled:text-primaryLight shadow active:shadow-none disabled:shadow h-10 w-10 flex justify-center items-center rounded-lg select-none";
  const PAGINATION_STYLES = "fill-primary group-disabled:fill-primaryLight";

  return (
    <div className='w-[80%] text-primary'>
      <div className='w-full flex items-center justify-between mb-2 '>
        <CustomSimpleSelect
          options={options}
          handle={handleSelectChoice}
          value={displayedQt}
        />
        <input
          type='text'
          className='bg-secondary w-48 rounded-lg p-2 shadow focus:shadow-none outline-none'
          placeholder='Search ...'
          onChange={(e) => {
            setFilter(e.target.value);
            setPageActive(1);
          }}
        ></input>
      </div>
      <div className=' rounded-lg shadow overflow-auto '>
        <table className='w-full'>
          <thead className='bg-secondary text-primaryLight  h-12 '>
            <tr className=' text-left'>
              <th className='px-2 font-medium table-cell sm:hidden'>Name</th>
              <th className='px-2 font-medium hidden sm:table-cell'>
                First Name
              </th>
              <th className='px-2 font-medium hidden sm:table-cell'>
                Last Name
              </th>
              <th className='px-2 font-medium hidden sm:table-cell'>
                Start Date
              </th>
              <th className='px-2 font-medium text-end sm:text-start'>
                Department
              </th>
              <th className='px-2 font-medium hidden sm:table-cell'>
                Date of Birth
              </th>
              <th className='px-2 font-medium hidden sm:table-cell'>Street</th>
              <th className='px-2 font-medium hidden sm:table-cell'>City</th>
              <th className='px-2 font-medium hidden sm:table-cell'>State</th>
              <th className='px-2 font-medium hidden sm:table-cell'>
                Zip Code
              </th>
            </tr>
          </thead>
          <tbody className='bg-tertiary'>
            {dataFiltered
              .slice(dataRefsToDisplay[0], dataRefsToDisplay[1])
              .map((data, index) => (
                <tr
                  className='h-10 even:bg-secondary/75 text-primary text-sm'
                  key={index}
                >
                  <td className='p-2 sm:hidden'>
                    <input
                      type='checkbox'
                      id={`display-data-${index}`}
                      className='peer mr-2 hidden'
                    />
                    <label
                      className='flex items-center'
                      htmlFor={`display-data-${index}`}
                    >
                      <svg
                        stroke='currentColor'
                        className='cursor-pointer fill-primary active:fill-primaryLight'
                        strokeWidth='0'
                        viewBox='0 0 1024 1024'
                        height='1.2em'
                        width='1.2em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
                      </svg>
                      <span className='pl-2'>
                        {data.firstName} {data.lastName}
                      </span>
                    </label>

                    <ul className='text-xs py-2 hidden peer-checked:block'>
                      <li>Start date : {data.startDate}</li>

                      <li>Date of birth : {data.dateOfBirth}</li>
                      <li>Street : {data.street}</li>
                      <li>City : {data.city}</li>
                      <li>State : {data.state}</li>
                      <li>Zip code : {data.zipCode}</li>
                    </ul>
                  </td>
                  <td className='p-2 hidden sm:table-cell'>{data.firstName}</td>
                  <td className='p-2 hidden sm:table-cell'>{data.lastName}</td>
                  <td className='p-2 hidden sm:table-cell'>{data.startDate}</td>
                  <td className='p-2 text-end sm:text-start'>
                    {data.department}
                  </td>
                  <td className='p-2 hidden sm:table-cell'>{data.birthDate}</td>
                  <td className='p-2 hidden sm:table-cell'>{data.street}</td>
                  <td className='p-2 hidden sm:table-cell'>{data.city}</td>
                  <td className='p-2 hidden sm:table-cell'>{data.state}</td>
                  <td className='p-2 hidden sm:table-cell'>{data.zipCode}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-between my-2 '>
        <div className='text-primary italic text-sm hidden sm:block'>
          {dataFiltered.length} results
        </div>
        <div className='flex justify-center items-center w-full sm:w-3/4 sm:justify-end gap-x-2'>
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
          <CustomSimpleSelect
            options={pagination}
            handle={setPageActive}
            value={pageActive}
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
      </div>
    </div>
  );
};

export default CustomDataTable;
