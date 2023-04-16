import React from "react";
import CustomSelect from "../components/CustomSelect";
import useModal from "../utils/useModal";

import { states } from "../data/states";
import { departments } from "../data/departments";
import { Controller, useForm } from "react-hook-form";

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
    control,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    triggerModalOne();
  };
  return (
    <main className='bg-tertiary'>
      <h1 className='text-center py-8 text-2xl font-bold uppercase text-primary'>
        Create employee
      </h1>
      <div className='flex justify-center items-center my-2'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col w-[80%] gap-y-3'
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
          <div
            className={`${FIELD_STYLES} ${
              errors.startDate ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={LABEL_STYLES} htmlFor='startDate'>
              Start Date
            </label>
            <input
              {...register("startDate", { required: true, valueAsDate: true })}
              className={INPUT_STYLES}
              type='text'
              id='startDate'
            />
          </div>
          <div className={`${FIELD_STYLES} border-transparent`}>
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
          <div className={`${FIELD_STYLES} border-transparent`}>
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
          <div className={`${FIELD_STYLES} border-transparent`}>
            <label className={LABEL_STYLES}>State</label>
            <Controller
              name='state'
              control={control}
              defaultValue=''
              render={({ field: { onChange, onBlur, value, name } }) => (
                <CustomSelect
                  inputStyle={INPUT_STYLES}
                  placeholder='Select State'
                  options={states}
                  onChange={(selectedOption) => onChange(selectedOption)}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                />
              )}
            />
          </div>
          <div className={`${FIELD_STYLES} border-transparent`}>
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
          <div
            className={`${FIELD_STYLES} ${
              errors.department ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={LABEL_STYLES}>Department</label>
            <Controller
              name='department'
              control={control}
              rules={{ required: true }}
              defaultValue=''
              render={({ field: { onChange, onBlur, value, name } }) => (
                <CustomSelect
                  inputStyle={INPUT_STYLES}
                  placeholder='Select Department'
                  options={departments}
                  onChange={(selectedOption) => onChange(selectedOption)}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                />
              )}
            />
          </div>
          {Object.values(errors).length !== 0 ? (
            <p className={ALERT_STYLES}>Please fill the required fields</p>
          ) : null}
          <button
            type='submit'
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
