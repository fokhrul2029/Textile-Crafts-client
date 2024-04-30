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
import Details from "../pages/Details/Details";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://backend-md-fokhrul-islams-projects.vercel.app/categories-data"),
        element: <Home />,
      },
      {
        path: "/:id",
        loader: ({ params }) =>
          fetch(`https://backend-md-fokhrul-islams-projects.vercel.app/categories-data/${params.id}`),
        element: (
          <PrivateRouter>
            <CategoryDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://backend-md-fokhrul-islams-projects.vercel.app/all-data/${params.id}`),
        element: (
          <PrivateRouter>
            <Details />
          </PrivateRouter>
        ),
      },
      {
        path: "/craft-items",
        loader: () => fetch("https://backend-md-fokhrul-islams-projects.vercel.app/all-data"),
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
        loader: () => fetch("https://backend-md-fokhrul-islams-projects.vercel.app/all-data"),
        element: (
          <PrivateRouter>
            <CraftList />
          </PrivateRouter>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://backend-md-fokhrul-islams-projects.vercel.app/all-data/${params.id}`),
        element: <Update />,
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
