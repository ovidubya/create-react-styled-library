import React from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme as defaultTheme } from "./theme";

export const ThemeProvider = ({ theme, children }) => {
  return (
    <StyledThemeProvider theme={theme ? theme : defaultTheme}>
      {children}
    </StyledThemeProvider>
  );
};
