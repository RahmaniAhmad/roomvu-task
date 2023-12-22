"use client";

import { useSelector } from "react-redux";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { darkTheme, lightTheme } from "@/styles/themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
  .link{
    color: ${(props) => props.theme.linkColor};
  }
  .first-link{
    color: ${(props) => props.theme.firstLinkColor};
  }
`;

export function ThemeProvider({ children }: ThemeProviderProps) {
  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />

        {children}
      </>
    </StyledThemeProvider>
  );
}
