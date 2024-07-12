import { Outlet, Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

// components
import Navlink from "./NavLink";
import UserAvatar from "./UserAvatar";

const LayoutPrivate = () => {
  const [openNavbar, setOpenNavBar] = useState<boolean>(true);

  const toggleOpenNavbar = () => {
    setOpenNavBar(!openNavbar);
  };

  return (
    <main>
      <div className="absolute top-0 left-0 w-full h-268 bg-blue-980 -z-10"></div>
      <header className="relative p-4 sm:py-[14px] sm:px-0 border-b border-b-blue-945">
        <div className="flex items-center justify-between mx-auto sm:max-w-tablet lg:max-w-desktop ">
          <Link to="/" className="text-lg text-white">
            finance<span className="font-bold">Master</span>
          </Link>
          <nav
            className={`sm:visible ${
              openNavbar ? "invisible opacity-0" : "visible opacity-[1]"
            }  transition-all absolute sm:relative top-[61px] mx-auto sm:top-0 left-0 flex-col sm:flex-row  sm:flex-1 flex sm:flex items-center justify-between w-full sm:w-auto bg-blue-980 sm:bg-none h-navbar_mobile sm:h-auto sm:opacity-100 sm:visible`}
          >
            <ul className="sm:flex items-center sm:ml-[50px] w-full sm:w-auto">
              <Navlink to="/" text="Home" />
              <Navlink to="/transections" text="Transações" />
              <Navlink to="/profile" text="Perfil" />
            </ul>
            <UserAvatar styles="text-left sm:text-right sm:ml-auto ms:flex-1 gap-[10px] flex-row-reverse sm:flex-row w-full sm:w-auto p-4 sm:px-0" />
          </nav>
          <button
            onClick={toggleOpenNavbar}
            className="block sm:hidden text-2xl text-white"
          >
            <LuMenu />
          </button>
        </div>
      </header>
      <div className="px-4 sm:max-w-tablet lg:max-w-desktop mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutPrivate;
