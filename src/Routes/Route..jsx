import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import BooksPage from "../Pages/BooksPage/BooksPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Component/BookDetail/BookDetails";

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
      },
      {
        path:'/bookDetails/:id',
        loader: async () => {
          const response = await fetch('/booksData.json');
          if (!response.ok) {
            throw new Response('Failed to load books', { status: response.status });
          }
          return response.json();
        },
        element: <BookDetails></BookDetails>
      }
    ]
  }
]);