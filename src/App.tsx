import React from "react";
import {
  ThemeProvider,
  createTheme,
  PaletteMode,
  IconButton,
  useTheme,
  styled,
} from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import "./App.css";
import EmailInputs from "./components/EmailInputs";
import EmailPreview from "./components/EmailPreview";
import EmailStyles from "./components/EmailStyles";

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const AppContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  grid-gap: 5rem;
  background: ${(props) => props.theme.palette.background.default};
`;

const App: React.FC = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <StyledEngineProvider injectFirst>
      <AppContainer>
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>

        <EmailPreview />
        <EmailInputs />
        <EmailStyles />
      </AppContainer>
    </StyledEngineProvider>
  );
};

const ToggleColorMode: React.VFC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<PaletteMode>("light");

  React.useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
