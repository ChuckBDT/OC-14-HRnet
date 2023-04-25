import React from "react";

import Logo from "../assets/logo.svg";

function Home() {
  return (
    <main className='flex-1 lg:ml-24'>
      <div className='bg-tertiary flex flex-col lg:flex-row h-3/4 gap-y-8 lg:gap-y-0 lg:gap-x-16 justify-center items-center '>
        <div>
          <h2 className='text-3xl'>Welcome on</h2>
          <span className='font-copperplate text-7xl lg:text-8xl'>HRnet</span>
        </div>
        <img
          src={Logo}
          alt=''
          className='sm:h-1/2 h-1/3 w-2/3 lg:w-1/4 max-w-md animate-logoSpin'
        />
      </div>
    </main>
  );
}

export default Home;
