import React from "react";
import { createRoot } from "react-dom/client";
import { router } from "routes";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { styledComponentsTheme } from "style";
import { GlobalStyle } from "style/global";

const app = document.getElementById("root")!;
const queryClient = new QueryClient();

createRoot(app).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={styledComponentsTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  </QueryClientProvider>
);
