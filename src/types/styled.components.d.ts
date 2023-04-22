import "styled-components";
import { themeCSS } from "style/attributes/theme";
import { colorsCSS } from "style/attributes/colors";

type ThemeType = typeof themeCSS;
type ColorsType = typeof colorsCSS;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    colors: ColorsType;
  }
}
