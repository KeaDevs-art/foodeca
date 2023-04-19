import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Navigation from "./src/infrastructure/navigation/index";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

// ------------------------------ imports ---------------------------------- imports -------------------------- imports ------------

const App = () => {
  const [montserratLoaded] = useMontserrat({
    Montserrat_400Regular,
  });

  if (!montserratLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
