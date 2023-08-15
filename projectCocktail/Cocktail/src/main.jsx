import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Cocktails from "./routes/Cocktails";
import Aperitifs from "./routes/Aperitifs";
import Desserts from "./routes/Desserts";
import Glaces from "./routes/Glaces";
import Ambiances from "./routes/Ambiance";
import Ateliers from "./routes/Ateliers";
import Apropos from "./routes/Apropos";
import Contact from "./routes/contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cocktails",
    element: <Cocktails />,
  },
  {
    path: "aperitifs",
    element: <Aperitifs />,
  },
  {
    path: "desserts",
    element: <Desserts />,
  },
  {
    path: "glaces",
    element: <Glaces />,
  },
  {
    path: "ambiances",
    element: <Ambiances />,
  },
  {
    path: "ateliers",
    element: <Ateliers />,
  },
  {
    path: "apropos",
    element: <Apropos />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);