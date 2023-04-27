import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className='bg-primary h-screen w-screen flex justify-center items-center flex-col'>
      <div className='flex justify-center items-center flex-col'>
        <img src={Logo} className='animate-logoNavSpin' width='350rem' alt='' />
        <span className='text-tertiary text-9xl absolute '>404</span>
      </div>
      <p className='text-tertiary font-copperplate font-bold text-2xl mt-8'>
        Wrong route !
      </p>
      <Link
        to={"/"}
        className='text-tertiary text-2xl mt-2 hover:text-primaryLight'
      >
        You should go back to the home page ...
      </Link>
    </main>
  );
};

export default ErrorPage;
