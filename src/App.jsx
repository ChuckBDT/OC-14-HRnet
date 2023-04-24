import { Outlet, NavLink } from "react-router-dom";

import Logo from "./assets/logo.svg";
import "./App.css";
import {
  userAddIcon,
  homeIcon,
  listIcon,
  settingsIcon,
} from "./assets/iconsBank";

function App() {
  return (
    <>
      <Outlet />
      <nav className='w-full lg:w-24 h-24 lg:h-full bg-primary fixed  bottom-0 lg:top-0 z-50 lg:z-0 '>
        <ul className='flex lg:flex-col h-full lg:w-full justify-around lg:justify-start lg:gap-y-8 lg:pt-6 items-center'>
          <NavLink to={"/"}>{homeIcon}</NavLink>
          <NavLink className='' to={"/employees/list"}>
            {listIcon}
          </NavLink>
          <img src={Logo} alt='' className='h-16 lg:order-first lg:mb-4' />
          <NavLink to={"/employees/create"}>{userAddIcon}</NavLink>
          <NavLink to={"/settings"}>{settingsIcon}</NavLink>
        </ul>
      </nav>
    </>
  );
}

export default App;
