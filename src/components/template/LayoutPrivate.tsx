import { Outlet, NavLink, Link } from "react-router-dom";
import img from "../../assets/imagem-de-usuario.png";

const LayoutPrivate = () => {
  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-full h-[268px] bg-blue-980 z-[-10]"></div>
      <header className="border-b-[1px] border-b-blue-945 mb-9">
        <nav className="container_center py-4 flex items-center justify-between">
          <div className="flex items-center gap-[50px]">
            <Link to="/" className="text-lg text-white">
              finance<span className="font-bold">Master</span>
            </Link>
            <ul className="flex items-center">
              <li>
                <NavLink to="/" className={`py-[6px] px-3 text-gray-690`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transections"
                  className="py-[6px] px-3 text-gray-690"
                >
                  Transações
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="py-[6px] px-3 text-gray-690">
                  Perfil
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="flex flex-col gap-1 text-right">
              <span className="block text-white text-base leading-none">
                Vinicius
              </span>
              <p className="text-base  text-gray-690 text-[13px] leading-none">
                vinicius.pereira.souza@gmail.com
              </p>
            </div>
            <img className="w-9 h-9" src={img} alt="user image" />
          </div>
        </nav>
      </header>
      <div className="container_center">
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutPrivate;
