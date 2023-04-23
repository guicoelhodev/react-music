import React from "react";
import { Home } from "pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { Playground } from "pages/Playground";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/playground",
    element: <Playground />,
  },
]);
