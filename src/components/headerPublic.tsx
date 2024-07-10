import { Link } from "react-router-dom";

const HeaderPublic = () => {
  return (
    <header>
      <div className="container_center py-[25px]">
        <Link to="/" className="text-lg text-black">
          finance<span className="font-bold">Master</span>
        </Link>
      </div>
    </header>
  );
};

export default HeaderPublic;
