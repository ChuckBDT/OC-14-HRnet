import React from "react";
import CustomSelect from "../components/CustomSelect";

import { states } from "../data/states";
import { departments } from "../data/departments";

const FIELD_STYLES = "bg-secondary h-fit rounded-xl py-2 px-3";
const LABEL_STYLES = "text-sm text-primaryLight w-full block";
export const INPUT_STYLES = "outline-none bg-transparent text-primary";

function EmployeesCreate() {
  return (
    <main className='bg-tertiary w-screen'>
      <h1 className='text-center py-8 text-2xl font-bold uppercase text-primary'>
        Create employee
      </h1>
      <div className='flex justify-center items-center my-2'>
        <form className='flex flex-col w-[80%] gap-y-4'>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='firstName'>
              First Name
            </label>
            <input className={INPUT_STYLES} type='text' id='firstName' />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='lastName'>
              Last Name
            </label>
            <input className={INPUT_STYLES} type='text' id='lastName' />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='birthDate'>
              Date of Birth
            </label>
            <input className={INPUT_STYLES} type='text' id='birthDate' />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='startDate'>
              Start Date
            </label>
            <input className={INPUT_STYLES} type='text' id='startDate' />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='street'>
              Street
            </label>
            <input className={INPUT_STYLES} type='text' id='street' />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='city'>
              City
            </label>
            <input className={INPUT_STYLES} type='text' id='city' />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES}>State</label>
            <CustomSelect
              list={states}
              placeholder='Select State'
              inputStyle={INPUT_STYLES}
              liStyle='hover:bg-primaryLight hover:text-white text-primary'
            />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='zipCode'>
              Zip Code
            </label>
            <input className={INPUT_STYLES} type='text' id='zipCode' />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES}>Department</label>
            <CustomSelect
              list={departments}
              placeholder='Select Department'
              inputStyle={INPUT_STYLES}
              liStyle='hover:bg-primaryLight hover:text-white text-primary'
            />
          </div>
          <button
            type='submit'
            className='bg-primary text-white h-16 my-6 rounded-xl'
          >
            Save
          </button>
        </form>
      </div>
    </main>
  );
}

export default EmployeesCreate;
