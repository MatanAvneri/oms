import React from "react";
import styled from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material";
import { withTheme, StylesProvider } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./App.css";
import EmailInputs from "./components/EmailInputs";
import EmailPreview from "./components/EmailPreview";
import EmailStyles from "./components/EmailStyles";

const AppContainer = withTheme(styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  grid-gap: 5rem;
  background: ${(props) => props.theme.palette.background.default};
`);

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <AppContainer>
          <EmailPreview />
          <EmailInputs />
          <EmailStyles />
        </AppContainer>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
