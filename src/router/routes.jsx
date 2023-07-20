import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Feed from "../pages/feed/feed";
import SearchResult from "../pages/search-Result/search-result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Feed /> },
      {
        path: "/searchResult/:searchQuery",
        element: <SearchResult />,
      },
    ],
  },
]);
