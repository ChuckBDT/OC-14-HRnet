import React from "react";
import useStore from "../store/store";
import CustomDataTable from "../utils/CustomDataTable";

function EmployeesList() {
  const data = useStore((state) => state.employees);

  return (
    <main className='bg-tertiary flex flex-col justify-center items-center mb-32'>
      <h1 className='text-center py-8 text-2xl font-bold font-copperplate uppercase text-primary'>
        Employee's List
      </h1>
      <CustomDataTable data={data} />
    </main>
  );
}

export default EmployeesList;
