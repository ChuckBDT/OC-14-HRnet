import React, { useMemo, useState } from "react";
import CustomSelect from "../CustomSelect";

const CustomDataTable = ({ data }) => {
  const [displayedQt, setQt] = useState(10);
  const [filter, setFilter] = useState("");

  const dataToDisplay = useMemo(() => {
    return data;
  });

  const dataFiltered = dataToDisplay.filter((data) =>
    JSON.stringify(data).toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='w-[80%]'>
      <div className='w-full flex items-center justify-between'>
        <select onChange={(e) => setQt(e.target.value)} name='' id=''>
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
        </select>
        <input
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
              index < displayedQt ? (
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
    </div>
  );
};

export default CustomDataTable;
