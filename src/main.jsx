import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import RolesSelection from "./pages/RolesSelection";
import AssignRoles from "./pages/AssignRoles";
import GameStarted from "./pages/GameStarted";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "roles",
            element: <RolesSelection />
          },
          {
            path: "assign-roles",
            element: <AssignRoles />
          },
          {
            path: "game-started",
            element: <GameStarted />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
