import * as React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyle } from "../src/GlobalStyle";
import { styledComponentsTheme } from "../src/style/index";
import { ThemeProvider } from "styled-components";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={styledComponentsTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
