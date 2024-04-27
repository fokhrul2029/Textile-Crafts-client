import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../pages/Home/Home";
import CraftItems from "../pages/CraftItems/CraftItems";
import AddCraft from "../pages/AddCraft/AddCraft";
import CraftList from "../pages/CraftList/CraftList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/craft-items",
        element: <CraftItems />,
      },
      {
        path: "/add-craft",
        element: <AddCraft />,
      },
      {
        path: "/craft-list",
        element: <CraftList />,
      },
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

export default router;
