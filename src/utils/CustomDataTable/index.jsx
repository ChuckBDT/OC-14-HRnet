import React, { useMemo, useState } from "react";

const CustomDataTable = ({ data }) => {
  // Filtering Datas
  const [filter, setFilter] = useState("");
  const dataFiltered = data.filter((data) =>
    JSON.stringify(data).toLowerCase().includes(filter.toLowerCase())
  );
  // Data filtering

  const [displayedQt, setQt] = useState(10);
  const [pageActive, setPageActive] = useState(1);

  const getNumbers = () => {
    if (pageActive === 1) {
      return [0, displayedQt];
    } else {
      return [(pageActive - 1) * displayedQt, pageActive * displayedQt];
    }
  };

  const dataRefsToDisplay = getNumbers();

  const listToDisplayArray = () => {
    let floor = Math.floor(data.length / displayedQt);
    const modulo = data.length % displayedQt;
    if (modulo !== 0) {
      floor += 1;
    }
    return Array.from({ length: floor }, (_, index) => index + 1);
  };

  console.log(dataFiltered, dataRefsToDisplay);

  return (
    <div className='w-[80%]'>
      <div className='w-full flex items-center justify-between'>
        <select
          onChange={(e) => {
            setQt(parseInt(e.target.value));
            setPageActive(1);
          }}
          name=''
          id=''
        >
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
        </select>
        <input
          placeholder='Search ...'
          onChange={(e) => {
            setFilter(e.target.value);
            setPageActive(1);
          }}
        ></input>
      </div>
      <div className=' rounded-lg shadow overflow-auto'>
        <table className='w-full'>
          <thead className='bg-secondary text-primaryLight  h-12 '>
            <tr className=' text-left'>
              <th className='pl-2 font-medium'>First Name</th>
              <th className='pl-2 font-medium'>Last Name</th>
              <th className='pl-2 font-medium'>Start Date</th>
              <th className='pl-2 font-medium'>Department</th>
              <th className='pl-2 font-medium'>Date of Birth</th>
              <th className='pl-2 font-medium'>Street</th>
              <th className='pl-2 font-medium'>City</th>
              <th className='pl-2 font-medium'>State</th>
              <th className='pl-2 font-medium'>Zip Code</th>
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
                  <td className='pl-2'>{data.firstName}</td>
                  <td className='pl-2'>{data.lastName}</td>
                  <td className='pl-2'>{data.startDate}</td>
                  <td className='pl-2'>{data.department}</td>
                  <td className='pl-2'>{data.birthDate}</td>
                  <td className='pl-2'>{data.street}</td>
                  <td className='pl-2'>{data.city}</td>
                  <td className='pl-2'>{data.state}</td>
                  <td className='pl-2'>{data.zipCode}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        {listToDisplayArray().map((nb, i) => (
          <button
            key={i}
            onClick={() => setPageActive(nb)}
            className='bg-secondary h-6 w-6 m-4'
          >
            {nb}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomDataTable;
