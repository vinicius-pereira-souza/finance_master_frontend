import { createBrowserRouter } from "react-router-dom";

// pages
import Login from "../pages/login";
import Register from "../pages/register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
