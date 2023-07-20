import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Feed from "../pages/feed/feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Feed /> }],
  },
]);
