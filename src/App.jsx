import { Outlet, NavLink } from "react-router-dom";
import Header from "./parts/Header";

import Logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
      <nav className='w-full h-24 bg-primary sticky bottom-0 '>
        <ul className='flex h-full justify-around items-center'>
          <NavLink to={"/"}>HO</NavLink>
          <NavLink to={"/employees/list"}>EL</NavLink>
          <img src={Logo} alt='' className='h-16' />
          <NavLink to={"/employees/create"}>CE</NavLink>
          <NavLink to={"/#"}>SE</NavLink>
        </ul>
      </nav>
    </>
  );
}

export default App;
