import React from "react";
import useStore from "../store/store";
import DataTable from "../utils/DataTable";
import { mockedData } from "../data/mockedData";

function EmployeesList() {
  const data = useStore((state) => state.employees);

  // Here you define the ordre of the columns you want in the table
  // and also the names of them
  const columns = {
    firstName: "First Name",
    lastName: "Last Name",
    startDate: "Start Date",
    department: "Department",
    birthDate: "Date of Birth",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "Zip Code",
  };

  return (
    <main className='bg-tertiary flex flex-col justify-center items-center lg:pb-24 mb-32 lg:mb-0 lg:ml-24'>
      <h1 className='text-center py-8 text-2xl font-bold text-primary'>
        Employee's List
      </h1>
      <div className='w-[80%] text-primary'>
        <DataTable data={mockedData} columns={columns} />
      </div>
    </main>
  );
}

export default EmployeesList;
