import { Outlet, NavLink } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <header className=''>
        <nav className='w-full h-20 bg-primary fixed bottom-0 '>
          <ul className='flex h-full justify-around items-center'>
            <NavLink to={"/"}>HO</NavLink>
            <NavLink to={"/employees/list"}>EL</NavLink>
            <NavLink to={"/employees/create"}>CE</NavLink>
            <NavLink to={"/#"}>SE</NavLink>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
