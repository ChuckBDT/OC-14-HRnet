import React from "react";
import CustomSelect from "../components/CustomSelect";
import useModal from "../utils/useModal";

import { states } from "../data/states";
import { departments } from "../data/departments";
import { useForm } from "react-hook-form";

const FIELD_STYLES = "bg-secondary h-fit rounded-xl py-2 px-3 border-2";
const LABEL_STYLES = "text-sm text-primaryLight w-full block";
const INPUT_STYLES = "outline-none bg-transparent text-primary";
const ALERT_STYLES = "text-alertDark text-sm italic px-3";

function EmployeesCreate() {
  const [setModalOne, triggerModalOne] = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className='bg-tertiary'>
      <h1 className='text-center py-8 text-2xl font-bold uppercase text-primary'>
        Create employee
      </h1>
      <div className='flex justify-center items-center my-2'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col w-[80%] gap-y-4'
        >
          <div
            className={`${FIELD_STYLES} ${
              errors.firstName ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={LABEL_STYLES} htmlFor='firstName'>
              First Name
            </label>
            <input
              {...register("firstName", { required: true })}
              className={INPUT_STYLES}
              type='text'
              id='firstName'
            />
          </div>

          <div
            className={`${FIELD_STYLES} ${
              errors.lastName ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={LABEL_STYLES} htmlFor='lastName'>
              Last Name
            </label>
            <input
              {...register("lastName", { required: true })}
              className={INPUT_STYLES}
              type='text'
              id='lastName'
            />
          </div>
          <div
            className={`${FIELD_STYLES} ${
              errors.birthDate ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={LABEL_STYLES} htmlFor='birthDate'>
              Date of Birth
            </label>
            <input
              {...register("birthDate", { required: true })}
              className={INPUT_STYLES}
              type='text'
              id='birthDate'
            />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='startDate'>
              Start Date
            </label>
            <input
              {...register("startDate")}
              className={INPUT_STYLES}
              type='text'
              id='startDate'
            />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='street'>
              Street
            </label>
            <input
              {...register("street")}
              className={INPUT_STYLES}
              type='text'
              id='street'
            />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES} htmlFor='city'>
              City
            </label>
            <input
              {...register("city")}
              className={INPUT_STYLES}
              type='text'
              id='city'
            />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES}>State</label>
            <CustomSelect
              form={{ ...register("state", { required: true }) }}
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
            <input
              {...register("zipCode")}
              className={INPUT_STYLES}
              type='text'
              id='zipCode'
            />
          </div>
          <div className={FIELD_STYLES}>
            <label className={LABEL_STYLES}>Department</label>
            <CustomSelect
              form={{ ...register("department", { required: true }) }}
              list={departments}
              placeholder='Select Department'
              inputStyle={INPUT_STYLES}
              liStyle='hover:bg-primaryLight hover:text-white text-primary'
            />
          </div>

          <button
            type='submit'
            // onClick={(e) => {
            //   e.preventDefault();
            //   triggerModalOne();
            // }}
            className='bg-primary text-white h-16 my-6 rounded-xl'
          >
            Save
          </button>
        </form>
      </div>
      {setModalOne(<p>Employee Created !</p>)}
    </main>
  );
}

export default EmployeesCreate;
