import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../pages/Home/Home";
import CraftItems from "../pages/CraftItems/CraftItems";
import AddCraft from "../pages/AddCraft/AddCraft";
import CraftList from "../pages/CraftList/CraftList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import PublicRouter from "./PublicRouter/PublicRouter";

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
        loader: () => fetch("http://localhost:3000/all-data"),
        element: <CraftItems />,
      },
      {
        path: "/add-craft",
        element: (
          <PrivateRouter>
            <AddCraft />
          </PrivateRouter>
        ),
      },
      {
        path: "/craft-list",
        element: (
          <PrivateRouter>
            <CraftList />
          </PrivateRouter>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRouter>
            <Login />
          </PublicRouter>
        ),
      },
      {
        path: "register",
        element: (
          <PublicRouter>
            <Register />
          </PublicRouter>
        ),
      },
    ],
  },
]);

export default router;
