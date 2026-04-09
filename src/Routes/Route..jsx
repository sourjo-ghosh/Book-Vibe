import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import BooksPage from "../Pages/BooksPage/BooksPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: '/books',
        element: <BooksPage></BooksPage>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);