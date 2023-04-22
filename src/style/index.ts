import { DefaultTheme } from "styled-components";
import { themeCSS } from "./attributes/theme";
import { colorsCSS } from "./attributes/colors";

export const styledComponentsTheme: DefaultTheme = {
  ...themeCSS,
  colors: colorsCSS,
};
