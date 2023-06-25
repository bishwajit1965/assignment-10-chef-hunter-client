import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import NotFound from "../pages/notFound/NotFound";
import LogIn from "../pages/login/LogIn";
import Register from "../pages/register/Register";
import LogInLayout from "../layout/LogInLayout";
import TermsConditions from "../pages/termsConditions/TermsConditions";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ChefDetail from "../pages/chefDetail/ChefDetail";
import AboutUs from "../pages/about/AboutUs";
import FavouriteRecipes from "../pages/favouriteRecipes/FavouriteRecipes";
import SingleDish from "../pages/singleDish/SingleDish";
import Recipes from "../pages/recipes/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://chef-hunter-server-five.vercel.app/chefs"),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <ChefDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-hunter-server-five.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/dishes",
        element: <Recipes />,
        loader: () =>
          fetch("https://chef-hunter-server-five.vercel.app/dishes"),
      },

      {
        path: "/recipes",
        element: (
          <PrivateRoute>
            <FavouriteRecipes />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://chef-hunter-server-five.vercel.app/recipes"),
      },
      {
        path: "/recipes/:id",
        element: <SingleDish />,
        loader: ({ params }) =>
          fetch(
            `https://chef-hunter-server-five.vercel.app/recipes/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <LogInLayout />,

    children: [
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
