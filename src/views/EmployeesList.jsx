import React from "react";
import useStore from "../store/store";

function EmployeesList() {
  const employees = useStore((state) => state.employees);
  console.log(employees);
  return (
    <main className='bg-tertiary'>
      <h1 className='text-center py-8 text-2xl font-bold uppercase text-primary'>
        Employee's List
      </h1>
      <button onClick={() => console.log(employees)}>FOR TEST PURPOSES</button>

      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee.firstName}</li>
        ))}
      </ul>
    </main>
  );
}

export default EmployeesList;
