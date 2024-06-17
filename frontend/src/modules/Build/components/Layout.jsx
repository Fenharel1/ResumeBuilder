import { NavLink, Outlet } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

export const Layout = () => {
  return (
    <div className="h-screen overflow-y-auto flex flex-col gap-y-0">
      <div className="flex justify-between items-center bg-primary text-white w-full text-4xl px-16 py-11 pb-16">
        <p className="font-bold">Resumo Resume Builder</p>
        <NavLink
          className="font-medium text-3xl flex gap-x-4 hover:underline "
          to="/"
        >
          <FaHouse></FaHouse>
          Home
        </NavLink>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
