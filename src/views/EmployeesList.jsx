import React from "react";
import useStore from "../store/store";
import CustomDataTable from "../utils/CustomDataTable";

function EmployeesList() {
  const data = useStore((state) => state.employees);

  // Fake data to test tables during development
  const fakeData = [];
  for (let i = 1; i < 80; i++) {
    fakeData.push({
      firstName: "John",
      lastName: "Test",
      street: "Elton John street 52",
      city: "New-York",
      zipCode: i,
      birthDate: "13/04/2005",
      startDate: "14/04/2023",
      state: "Alabama",
      department: "Marketing",
    });
  }
  // End of fake data to test tables during development

  return (
    <main className='bg-tertiary flex flex-col justify-center items-center mb-32 lg:ml-24'>
      <h1 className='text-center py-8 text-2xl font-bold text-primary'>
        Employee's List
      </h1>
      <CustomDataTable data={fakeData} />
    </main>
  );
}

export default EmployeesList;
