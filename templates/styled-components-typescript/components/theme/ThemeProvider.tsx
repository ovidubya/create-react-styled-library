import React, { ReactNode, Children } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";
import { theme as defaultTheme } from "./theme";

interface ThemeProviderProps {
  theme?: DefaultTheme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <StyledThemeProvider theme={theme ? theme : defaultTheme}>
      {children}
    </StyledThemeProvider>
  );
};
