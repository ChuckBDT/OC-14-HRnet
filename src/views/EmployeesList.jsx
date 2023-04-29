import React from "react";
import useStore from "../store/store";
import DataTable from "../utils/DataTable";
import { mockedData } from "../data/mockedData";

function EmployeesList() {
  const data = useStore((state) => state.employees);

  return (
    <main className='bg-tertiary flex flex-col justify-center items-center mb-32 lg:ml-24'>
      <h1 className='text-center py-8 text-2xl font-bold text-primary'>
        Employee's List
      </h1>
      <DataTable data={mockedData} />
    </main>
  );
}

export default EmployeesList;
