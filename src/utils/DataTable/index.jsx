import React, { useMemo, useState } from "react";
import SimpleSelect from "../SimpleSelect";
import Pagination from "./components/Pagination";

const DataTable = ({ data, columns }) => {
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

  // Args for the SimpleSelect in the header
  const options = [10, 25, 50];
  const handleSelectChoice = (el) => {
    setQt(el);
    setPageActive(1);
  };
  // End of args

  return (
    <>
      {/* HEADER */}
      <div className='w-full flex items-center justify-between mb-2 '>
        <SimpleSelect
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
      {/* END OF HEADER */}
      <div className='rounded-lg shadow overflow-auto hidden lg:block'>
        <table className='w-full'>
          <thead className='bg-secondary text-primaryLight  h-12 '>
            <tr className=' text-left'>
              {Object.keys(columns).map((title, i) => (
                <th key={i} className='px-2 font-medium table-cell select-none'>
                  {columns[title]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-tertiary'>
            {dataFiltered
              .slice(dataRefsToDisplay[0], dataRefsToDisplay[1])
              .map((data, i) => (
                <tr
                  className='h-10 even:bg-secondary/75 text-primary text-sm'
                  key={i}
                >
                  {Object.keys(columns).map((title, i) => (
                    <td key={i} className='p-2'>
                      {data[title]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className='lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 h-full'>
        {dataFiltered
          .slice(dataRefsToDisplay[0], dataRefsToDisplay[1])
          .map((data, i) => (
            <ul
              key={i}
              className='h-fit p-2 bg-secondary/75 text-primary text-sm rounded-lg shadow'
            >
              {Object.keys(columns).map((title, i) => (
                <li key={i} className=''>
                  <span className='text-primaryLight'>
                    {columns[title] + " : "}
                  </span>
                  {data[title]}
                </li>
              ))}
            </ul>
          ))}
      </div>

      {/* FOOTER */}
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
      {/* END OF FOOTER */}
    </>
  );
};

export default DataTable;
