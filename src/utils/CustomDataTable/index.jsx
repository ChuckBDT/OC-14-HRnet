import React, { useMemo, useState } from "react";

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
  const pagination = () => {
    let floor = Math.floor(dataFiltered.length / displayedQt);
    const modulo = dataFiltered.length % displayedQt;
    if (modulo !== 0) {
      floor += 1;
    }
    return Array.from({ length: floor }, (_, index) => index + 1);
  };

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
              <th className='pl-2 font-medium table-cell sm:hidden'>Name</th>
              <th className='pl-2 font-medium hidden sm:table-cell'>
                First Name
              </th>
              <th className='pl-2 font-medium hidden sm:table-cell'>
                Last Name
              </th>
              <th className='pl-2 font-medium hidden sm:table-cell'>
                Start Date
              </th>
              <th className='pl-2 font-medium '>Department</th>
              <th className='pl-2 font-medium hidden sm:table-cell'>
                Date of Birth
              </th>
              <th className='pl-2 font-medium hidden sm:table-cell'>Street</th>
              <th className='pl-2 font-medium hidden sm:table-cell'>City</th>
              <th className='pl-2 font-medium hidden sm:table-cell'>State</th>
              <th className='pl-2 font-medium hidden sm:table-cell'>
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
                  <td className='pl-2 py-2 text-lg inline-block sm:hidden'>
                    <input type='checkbox' className='peer mr-2 hidden' />
                    <svg
                      stroke='currentColor'
                      className='cursor-pointer'
                      onClick={(e) => {
                        if (e.target.previousSibling.checked) {
                          e.target.previousSibling.checked = false;
                        } else {
                          e.target.previousSibling.checked = true;
                        }
                      }}
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 1024 1024'
                      height='1.2em'
                      width='1.2em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
                    </svg>
                    {data.firstName} {data.lastName}
                    <ul className='text-sm hidden peer-checked:block'>
                      <li>Start date : {data.startDate}</li>

                      <li>Date of birth : {data.dateOfBirth}</li>
                      <li>Street : {data.street}</li>
                      <li>City : {data.city}</li>
                      <li>State : {data.state}</li>
                      <li>Zip code : {data.zipCode}</li>
                    </ul>
                  </td>
                  <td className='pl-2 hidden sm:table-cell'>
                    {data.firstName}
                  </td>
                  <td className='pl-2 hidden sm:table-cell'>{data.lastName}</td>
                  <td className='pl-2 hidden sm:table-cell'>
                    {data.startDate}
                  </td>
                  <td className='pl-2 '>{data.department}</td>
                  <td className='pl-2 hidden sm:table-cell'>
                    {data.birthDate}
                  </td>
                  <td className='pl-2 hidden sm:table-cell'>{data.street}</td>
                  <td className='pl-2 hidden sm:table-cell'>{data.city}</td>
                  <td className='pl-2 hidden sm:table-cell'>{data.state}</td>
                  <td className='pl-2 hidden sm:table-cell'>{data.zipCode}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        {pagination().map((nb, i) => (
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
