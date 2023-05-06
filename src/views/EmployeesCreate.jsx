import React, { useEffect } from "react";
import FormSelect from "../components/ReactHookForm/FormSelect";
import { Controller, useForm } from "react-hook-form";
import useModal from "../utils/revolver-modal";
import DatePicker from "../components/ReactHookForm/DatePicker";
import useStore from "../store/store";

import { states } from "../data/states";
import { departments } from "../data/departments";

const styles = {
  field:
    "bg-secondary h-fit w-full rounded-xl py-2 px-3 shadow border focus-within:shadow-none",
  label: "text-sm text-primaryLight w-full block",
  input: "outline-none bg-transparent text-primary w-full",
  alert: "text-alertDark text-sm italic px-3",
};

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

  useEffect(() => {
    document.title = "HRnet | Create Employee";
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data) => {
    addEmployee(data);
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
            className={`${styles.field} ${
              errors.firstName ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={styles.label} htmlFor='firstName'>
              First Name
            </label>
            <input
              {...register("firstName", { required: true })}
              className={styles.input}
              type='text'
              id='firstName'
              maxLength={25}
              minLength={3}
            />
          </div>

          <div
            className={`${styles.field} ${
              errors.lastName ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={styles.label} htmlFor='lastName'>
              Last Name
            </label>
            <input
              {...register("lastName", { required: true })}
              className={styles.input}
              type='text'
              id='lastName'
              maxLength={25}
              minLength={3}
            />
          </div>
          <div
            className={`${styles.field} ${
              errors.birthDate ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={styles.label} htmlFor='birthDate'>
              Date of Birth
            </label>
            <Controller
              name='birthDate'
              control={control}
              defaultValue=''
              rules={{ required: true, valueAsDate: true }}
              render={({ field: { onChange, onBlur, value, name } }) => (
                <DatePicker
                  inputStyle={styles.input}
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
            className={`${styles.field} ${
              errors.startDate ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={styles.label} htmlFor='startDate'>
              Start Date
            </label>
            <Controller
              name='startDate'
              control={control}
              defaultValue=''
              rules={{ required: true, valueAsDate: true }}
              render={({ field: { onChange, onBlur, value, name } }) => (
                <DatePicker
                  inputStyle={styles.input}
                  placeholder='Select Start Date'
                  onChange={(selectedOption) => onChange(selectedOption)}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                />
              )}
            />
          </div>
          <div className={`${styles.field} border-transparent`}>
            <label className={styles.label} htmlFor='street'>
              Street
            </label>
            <input
              {...register("street")}
              className={styles.input}
              type='text'
              id='street'
              maxLength={40}
              minLength={3}
            />
          </div>
          <div className={`${styles.field} border-transparent`}>
            <label className={styles.label} htmlFor='city'>
              City
            </label>
            <input
              {...register("city")}
              className={styles.input}
              type='text'
              id='city'
              maxLength={30}
              minLength={3}
            />
          </div>
          <div className={`${styles.field} border-transparent`}>
            <label className={styles.label} htmlFor='state'>
              State
            </label>
            <Controller
              name='state'
              control={control}
              defaultValue=''
              render={({ field: { onChange, onBlur, value, name } }) => (
                <FormSelect
                  inputStyle={styles.input}
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
          <div className={`${styles.field} border-transparent`}>
            <label className={styles.label} htmlFor='zipCode'>
              Zip Code
            </label>
            <input
              {...register("zipCode")}
              className={styles.input}
              type='text'
              id='zipCode'
              maxLength={10}
              minLength={3}
            />
          </div>
          <div
            className={`${styles.field} ${
              errors.department ? "border-alertDark " : "border-transparent"
            }`}
          >
            <label className={styles.label} htmlFor='department'>
              Department
            </label>
            <Controller
              name='department'
              control={control}
              rules={{ required: true }}
              defaultValue=''
              render={({ field: { onChange, onBlur, value, name } }) => (
                <FormSelect
                  inputStyle={styles.input}
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
            <p className={styles.alert}>Please fill the required fields</p>
          ) : null}
          <button
            type='submit'
            className='bg-primary text-white h-16 w-56 m-6 mb-0 rounded-xl shadow-lg active:shadow-none'
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
