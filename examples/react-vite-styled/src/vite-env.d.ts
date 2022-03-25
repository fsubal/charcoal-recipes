/// <reference types="vite/client" />

import { CSSProp, DefaultTheme } from "styled-components";
import { CharcoalTheme } from "@charcoal-ui/theme";

declare module "styled-components" {
  export interface DefaultTheme extends CharcoalTheme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp<DefaultTheme>;
  }
}
