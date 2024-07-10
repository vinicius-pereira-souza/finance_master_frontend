import { createBrowserRouter } from "react-router-dom";

// pages
import Login from "../pages/login";
import Register from "../pages/register";

// components
import LayoutPublic from "../components/layoutPublic";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
