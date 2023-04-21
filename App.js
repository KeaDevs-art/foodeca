import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Navigation from "./src/infrastructure/navigation/index";
import { theme } from "./src/infrastructure/theme";
import { StartContextProvider } from "./src/context/start/start.context";
import { GetStarted } from "./src/features/get-started/get-started.component";

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
        <StartContextProvider>
          <GetStarted />
        </StartContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
