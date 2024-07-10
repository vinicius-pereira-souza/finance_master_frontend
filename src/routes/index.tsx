import { createBrowserRouter } from "react-router-dom";

// pages
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Transections from "../pages/transections";
import Profile from "../pages/profile";

// components
import LayoutPublic from "../components/layout";
import LayoutRoot from "../components/layoutRoot";

const privateRoutes = () => {
  let routes = {};

  if (localStorage.getItem("token")) {
    routes = {
      path: "/",
      element: <LayoutRoot />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "transections",
          element: <Transections />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    };
  } else {
    routes = {
      path: "/",
      element: <LayoutPublic />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    };
  }

  return routes;
};

const routes = createBrowserRouter([privateRoutes()]);

export default routes;
