import { Outlet, Link } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <main>
      <header className="py-[25px] px-5">
        <div className="container_center">
          <Link to="/" className="text-lg text-black">
            finance<span className="font-bold">Master</span>
          </Link>
        </div>
      </header>
      <div className="min-h-screen mt-12 px-5">
        <div className="container_center"></div>
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutPublic;
