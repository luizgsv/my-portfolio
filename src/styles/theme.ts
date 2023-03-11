// theme.ts
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    subTitle: string;
    purple: string;
    details: string;
    subDetails: string;
    white: string;
    gray: string;
    background: string;
  }
}

export const darkTheme: DefaultTheme = {
  title: "#FFFFF1",
  subTitle: "#E1E1E6",

  purple: "#7957FF",

  details: "#202024",
  subDetails: "#29292E",

  white: "#FFFFFF",
  gray: "#585858",

  background: "#121214",
};
