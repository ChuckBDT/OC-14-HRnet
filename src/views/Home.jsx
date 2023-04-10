import React from "react";
import Logo from "../assets/logo.png";

function Home() {
  return (
    <div className='bg-tertiary h-screen w-screen flex  items-center flex-col'>
      <h1 className='flex justify-center items-center h-40'>Wealth Health</h1>
      <img src={Logo} alt='' className='w-[70%]' />
    </div>
  );
}

export default Home;
