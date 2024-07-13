import { createBrowserRouter } from "react-router-dom";

// pages
import Login from "../app/Login";
import Register from "../app/Register";
import Home from "../app/Home";
import Transections from "../app/Transections";
import Profile from "../app/Profile";

// components
import LayoutPublic from "../components/template/LayoutPublic";
import LayoutPrivate from "../components/template/LayoutPrivate";

const privateRoutes = () => {
  let routes = {};

  if (localStorage.getItem("token")) {
    routes = {
      path: "/",
      element: <LayoutPrivate />,
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
