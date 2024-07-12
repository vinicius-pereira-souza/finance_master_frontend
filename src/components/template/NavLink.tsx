import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  text: string;
};

const Navlink = ({ to, text }: Props) => {
  return (
    <li className="text-center">
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? "font-bold text-white transition-all py-3 sm:py-1 px-3 hover:bg-purple-810 bg-purple-550 sm:rounded-md w-full sm:w-auto border-b border-b-blue-945 sm:border-none block "
            : "py-3 sm:py-1 px-3 transition-all hover:text-white text-gray-690 border-b border-b-blue-945 sm:border-none block";
        }}
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default Navlink;
