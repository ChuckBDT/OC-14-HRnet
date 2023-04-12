import React from "react";

import Logo from "../assets/logo.svg";

function Home() {
  return (
    <main className='bg-primary h-screen '>
      <h1 className='text-center py-8 text-2xl font-bold uppercase text-tertiary'>
        HRnet
      </h1>
      <div className='flex h-2/3 justify-center items-center '>
        <img src={Logo} alt='' className='w-2/3 animate-logoSpin' />
      </div>
    </main>
  );
}

export default Home;
