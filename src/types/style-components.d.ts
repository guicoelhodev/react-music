import { themeColors, themeCSS } from "style/theme";
import "styled-components";

type ThemeType = typeof themeCSS;
type ColorsType = typeof themeColors;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    colors: ColorsType;
  }
}
