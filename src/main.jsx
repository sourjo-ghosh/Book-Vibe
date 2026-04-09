import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Route..jsx";
import Context from "./Context/Context.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </Context>
  </StrictMode>,
);
