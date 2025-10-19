import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import CategoryNews from "../Components/Home/CategoryNews";

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
      },
    ],
  },
]);
