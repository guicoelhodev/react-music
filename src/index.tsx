import { GlobalStyle } from "GlobalStyle";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { router } from "routes";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "store";
import { ThemeProvider } from "styled-components";
import { styledComponentsTheme } from "style";

const app = document.getElementById("root")!;
const queryClient = new QueryClient();

createRoot(app).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={styledComponentsTheme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>
);
