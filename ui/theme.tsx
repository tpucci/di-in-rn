import { createContext } from "react";

export const theme = {
  primary: "#A8FE39",
  secondary: "#EDFF08",
  tertiary: "#FF5300",
  black: "#010101",
  white: "#FAFAFA",
};

export const ThemeContext = createContext(theme);
