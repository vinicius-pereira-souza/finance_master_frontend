import { createBrowserRouter } from "react-router-dom";

// pages
// import Login from "../pages/login";
// import Register from "../pages/register";

// components
import HeaderPublic from "../components/headerPublic";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HeaderPublic />,
  },
]);

export default routes;
