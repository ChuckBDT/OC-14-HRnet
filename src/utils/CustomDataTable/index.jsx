import React, { useMemo, useState } from "react";

const CustomDataTable = ({ data }) => {
  const [displayedQt, setQt] = useState(10);
  const [filter, setFilter] = useState("");
  const [test, setTest] = useState([1, 10]);

  const dataFiltered = data.filter((data) =>
    JSON.stringify(data).toLowerCase().includes(filter.toLowerCase())
  );

  const indexArray = Math.floor(data.length / displayedQt);
  const arr = Array.from({ length: indexArray }, (_, index) => index + 1);
  console.log(arr);

  const getNumbers = (endNb) => {
    if (endNb === 1) {
      setTest([endNb, endNb * displayedQt]);
    } else {
      setTest([(endNb - 1) * displayedQt + 1, endNb * displayedQt]);
    }
  };

  return (
    <div className='w-[80%]'>
      <div className='w-full flex items-center justify-between'>
        <select onChange={(e) => setQt(e.target.value)} name='' id=''>
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
        </select>
        <input
          placeholder='Search ...'
          onChange={(e) => {
            setFilter(e.target.value);
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
            {dataFiltered.map((data, index) =>
              index < test[1] && index > test[0] ? (
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
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <div>
        {arr.map((nb) => (
          <button
            onClick={() => getNumbers(nb)}
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
