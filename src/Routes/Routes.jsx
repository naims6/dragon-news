import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import CategoryNews from "../Components/Home/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetailsLayout from "../Layouts/NewsDetailsLayout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/category/1" />,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/data/news.json"),
        hydrateFallbackElement: (
          <h1 className="text-green-600 text-4xl">Loading...</h1>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "newsdetails/:id",
    element: (
      <PrivateRoute>
        <NewsDetailsLayout />
      </PrivateRoute>
    ),
    loader: () => fetch("/data/news.json"),
  },
]);
