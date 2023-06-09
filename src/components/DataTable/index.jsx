import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

import SimpleSelect from "../SimpleSelect";
import Pagination from "./components/Pagination";
import { sortDefault, sortDown, sortUp } from "./components/iconsBank";

/**
 * A table component that displays data in rows and columns, with pagination and filtering capabilities.
 * @param {Object[]} data - An array of objects representing the data to be displayed in the table.
 * @param {Object.<string, string>} columns - An object that maps column keys to column names.
 * @returns {JSX.Element} - A React component that displays the table.
 */
const DataTable = ({ data, columns }) => {
  const [filter, setFilter] = useState("");
  const [displayedQt, setQt] = useState(10);
  const [pageActive, setPageActive] = useState(1);
  const [sort, setSort] = useState({ field: null, order: null });

  // Sorting data based on the current sort field and order
  const sortedData = useMemo(() => {
    if (sort.field && sort.order) {
      const sorted = [...data].sort((a, b) => {
        if (a[sort.field] < b[sort.field]) {
          return sort.order === 1 ? -1 : 1;
        } else if (a[sort.field] > b[sort.field]) {
          return sort.order === 1 ? 1 : -1;
        } else {
          return 0;
        }
      });
      return sorted;
    } else {
      return data;
    }
  }, [data, sort]);

  // Filtering data from props with input's content
  const dataFiltered = sortedData.filter((data) =>
    JSON.stringify(data).toLowerCase().includes(filter.toLowerCase())
  );

  // Calculating the indexes of data to display depending on
  // the active page and the displayed quantity
  const indexData =
    pageActive === 1
      ? [0, displayedQt]
      : [(pageActive - 1) * displayedQt, pageActive * displayedQt];

  // Slicing the data based on the indexes calculated above
  const slicedData = dataFiltered.slice(indexData[0], indexData[1]);

  const columnsKeys = Object.keys(columns);

  // Handle the select's choices
  const handleSelectChoice = (el) => {
    setQt(el);
    setPageActive(1);
  };

  const sortIcon = (title) => {
    if (sort.field !== title) {
      return <span>{sortDefault}</span>;
    } else if (sort.order == 1) {
      return <span>{sortUp}</span>;
    } else {
      return <span>{sortDown}</span>;
    }
  };
  // Generating the column names for the table
  const generateDesktopHead = columnsKeys.map((title, i) => (
    <th
      key={i}
      className='px-2 font-medium table-cell select-none cursor-pointer whitespace-nowrap'
      onClick={() => {
        if (sort.field == null || sort.field !== title) {
          setSort({ field: title, order: 1 });
        } else {
          setSort({ field: title, order: sort.order * -1 });
        }
      }}
    >
      {columns[title]}
      {sortIcon(title)}
    </th>
  ));

  const rowDataDesktop = useMemo(() => {
    return (data, i) => (
      <tr className='h-10 even:bg-secondary/75 text-primary text-sm ' key={i}>
        {columnsKeys.map((col, i) => (
          <td key={i} className='p-2 '>
            {data[col]}
          </td>
        ))}
      </tr>
    );
  }, [data]);

  const rowDataMobile = useMemo(() => {
    return (data, i) => (
      <ul
        key={i}
        className='h-fit p-2 bg-secondary/75 text-primary text-sm rounded-lg shadow'
      >
        {columnsKeys.map((title, i) => (
          <li key={i} className='text-center'>
            <span className='text-primaryLight'>{columns[title] + " : "}</span>
            {data[title]}
          </li>
        ))}
      </ul>
    );
  }, [data]);

  return (
    <>
      <div className='w-full flex items-center justify-between mb-2 gap-x-2'>
        <SimpleSelect
          options={[10, 25, 50]}
          handle={handleSelectChoice}
          value={displayedQt}
        />
        <input
          type='text'
          className='bg-secondary w-full sm:w-48 rounded-lg p-2 shadow focus:shadow-none outline-none'
          placeholder='Search ...'
          onChange={(e) => {
            setFilter(e.target.value);
            setPageActive(1);
          }}
        ></input>
      </div>
      <div className='rounded-lg shadow overflow-auto hidden lg:block'>
        <table className='w-full'>
          <thead className='bg-secondary text-primary drop-shadow h-12 '>
            <tr className='text-left '>{generateDesktopHead}</tr>
          </thead>
          <tbody className='bg-tertiary'>
            {slicedData.map((data, i) => rowDataDesktop(data, i))}
          </tbody>
        </table>
      </div>
      <div className='lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 h-full'>
        {slicedData.map((data, i) => rowDataMobile(data, i))}
      </div>
      <div className='flex justify-between my-2 '>
        <div className='text-primary italic text-sm hidden sm:block'>
          {dataFiltered.length} results
        </div>
        <Pagination
          dataFiltered={dataFiltered}
          displayedQt={displayedQt}
          pageActive={pageActive}
          setPageActive={setPageActive}
        />
      </div>
    </>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default DataTable;
