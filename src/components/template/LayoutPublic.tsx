import { Outlet, Link } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div>
      <header className="p-4 lg:py-[25px] lg:px-5 ">
        <div className="container_center">
          <Link to="/" className="text-lg text-black">
            finance<span className="font-bold">Master</span>
          </Link>
        </div>
      </header>
      <main className="min-h-screen mt-10 lg:mt-12 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;
