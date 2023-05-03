import React from "react";
import FormSelect from "../utils/FormSelect";
import { Controller, useForm } from "react-hook-form";
import useModal from "../utils/revolver-modal";
import DatePicker from "../utils/DatePicker";
import useStore from "../store/store";

import { states } from "../data/states";
import { departments } from "../data/departments";

const FIELD_STYLES =
  "bg-secondary h-fit w-full rounded-xl py-2 px-3 shadow border focus-within:shadow-none";
const LABEL_STYLES = "text-sm text-primaryLight w-full block";
const INPUT_STYLES = "outline-none bg-transparent text-primary w-full";
const ALERT_STYLES = "text-alertDark text-sm italic px-3";

/**
 * A form component for creating new employees, with various fields.
 * Uses react-hook-form for form validation and management,
 * and also includes custom select and date picker components.
 *
 * @component
 */
function EmployeesCreate() {
  const addEmployee = useStore((state) => state.addEmployee);

  const [setModalOne, triggerModalOne] = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    addEmployee(data);
    console.log(data);
    reset();
    triggerModalOne();
  };
  return (
    <main className='bg-tertiary mb-32 lg:mb-0 lg:pb-24 lg:ml-24'>
      <h1 className='text-center py-8 text-2xl font-bold text-primary'>
        Create an employee
      </h1>
      <div className='flex justify-center items-center my-2'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-center items-center w-[80%] max-w-xl gap-y-3'
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
              maxLength={25}
              minLength={3}
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
              maxLength={25}
              minLength={3}
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
            <Controller
              name='birthDate'
              control={control}
              defaultValue=''
              rules={{ required: true, valueAsDate: true }}
              render={({ field: { onChange, onBlur, value, name } }) => (
                <DatePicker
                  inputStyle={INPUT_STYLES}
                  placeholder='Select Birth Date'
                  onChange={(selectedOption) => onChange(selectedOption)}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                  major={true}
                />
              )}
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
            <Controller
              name='startDate'
              control={control}
              defaultValue=''
              rules={{ required: true, valueAsDate: true }}
              render={({ field: { onChange, onBlur, value, name } }) => (
                <DatePicker
                  inputStyle={INPUT_STYLES}
                  placeholder='Select Start Date'
                  onChange={(selectedOption) => onChange(selectedOption)}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                />
              )}
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
              maxLength={40}
              minLength={3}
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
              maxLength={30}
              minLength={3}
            />
          </div>
          <div className={`${FIELD_STYLES} border-transparent`}>
            <label className={LABEL_STYLES} htmlFor='state'>
              State
            </label>
            <Controller
              name='state'
              control={control}
              defaultValue=''
              render={({ field: { onChange, onBlur, value, name } }) => (
                <FormSelect
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
              maxLength={10}
              minLength={3}
            />
          </div>
          <div
            className={`${FIELD_STYLES} ${
              errors.department ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={LABEL_STYLES} htmlFor='department'>
              Department
            </label>
            <Controller
              name='department'
              control={control}
              rules={{ required: true }}
              defaultValue=''
              render={({ field: { onChange, onBlur, value, name } }) => (
                <FormSelect
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
            className='bg-primary text-white h-16 w-56 mt-6 rounded-xl shadow-lg active:shadow-none'
          >
            Save
          </button>
        </form>
      </div>
      {setModalOne(<p className='text-primary'>Employee Created !</p>)}
    </main>
  );
}

export default EmployeesCreate;
