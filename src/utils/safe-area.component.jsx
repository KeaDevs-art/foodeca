import styled from "styled-components/native";
import { SafeAreaView, StatusBar, Platform } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
