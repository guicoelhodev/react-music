import { GlobalStyle } from "GlobalStyle";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { router } from "routes";
import { RouterProvider } from "react-router-dom";
import store from "store";

const app = document.getElementById("root")!;

createRoot(app).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <GlobalStyle />
  </Provider>
);
