import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./views/Home";
import EmployeesList from "./views/EmployeesList";
import EmployeesCreate from "./views/EmployeesCreate";
import Settings from "./views/Settings";
import ErrorPage from "./views/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employees/list",
        element: <EmployeesList />,
      },
      {
        path: "/employees/create",
        element: <EmployeesCreate />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
