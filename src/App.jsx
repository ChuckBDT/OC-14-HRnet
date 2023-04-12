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
      <nav className='w-full h-24 bg-primary sticky bottom-0 z-50 '>
        <ul className='flex h-full justify-around items-center'>
          <NavLink to={"/"}>{homeIcon}</NavLink>
          <NavLink to={"/employees/list"}>{listIcon}</NavLink>
          <img src={Logo} alt='' className='h-16' />
          <NavLink to={"/employees/create"}>{userAddIcon}</NavLink>
          <NavLink to={"/settings"}>{settingsIcon}</NavLink>
        </ul>
      </nav>
    </>
  );
}

export default App;
