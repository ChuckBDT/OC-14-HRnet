import React, { useEffect } from "react";

import Logo from "../assets/logo.svg";

/**
 * Renders the Home component, which displays the landing page of the HRnet application.
 *
 * @return {JSX.Element} The Home component.
 */
function Home() {
  useEffect(() => {
    document.title = "HRnet | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='flex-1 mt-24 sm:mt-12 lg:ml-24'>
      <div className='bg-tertiary flex flex-col l lg:flex-row h-3/4 gap-y-8 lg:gap-y-0 lg:gap-x-16 justify-center items-center '>
        <div>
          <h2 className='text-3xl'>Welcome to</h2>
          <span className='font-copperplate text-7xl lg:text-8xl'>HRnet</span>
        </div>
        <img
          src={Logo}
          alt='HRnet Logo'
          className='sm:h-1/2 h-1/3 w-2/3 lg:w-1/4 max-w-md animate-logoSpin hidden lg:block'
          height='33,33%'
        />
      </div>
    </main>
  );
}

export default Home;
