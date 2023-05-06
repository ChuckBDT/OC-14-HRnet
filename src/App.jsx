import { Outlet, NavLink } from "react-router-dom";

import Logo from "./assets/logo.svg";
import "./App.css";
import {
  userAddIcon,
  homeIcon,
  listIcon,
  settingsIcon,
} from "./assets/iconsBank";
import Header from "./parts/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <nav className='w-full lg:w-24 h-24 lg:h-full bg-primary fixed bottom-0 lg:top-0 z-50 lg:z-0 '>
        <ul className='flex lg:flex-col h-full lg:w-full justify-around lg:justify-start lg:gap-y-8 lg:pt-6 items-center'>
          <li>
            <NavLink to={"/"} aria-label='Access to Home Page'>
              {homeIcon}
            </NavLink>
          </li>
          <li>
            <NavLink
              className=''
              to={"/employees/list"}
              aria-label='Access to the list of employees'
            >
              {listIcon}
            </NavLink>
          </li>
          <li className='lg:order-first flex justify-center items-center lg:mb-4 w-16 h-16 select-none'>
            <img
              src={Logo}
              alt='HR Logo'
              className='animate-logoNavSpin'
              height='100%'
              width='100%'
            />
            <span className='absolute text-tertiary font-copperplate font-bold '>
              HR
            </span>
          </li>
          <li>
            <NavLink
              to={"/employees/create"}
              aria-label='Access to the user add form'
            >
              {userAddIcon}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/settings"} aria-label='Access to the settings'>
              {settingsIcon}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
