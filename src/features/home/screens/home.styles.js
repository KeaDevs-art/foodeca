import { FlatList } from "react-native";
import styled from "styled-components/native";
import MasonryList from "@react-native-seoul/masonry-list";

export const HomeScreen = styled.View`
  padding: ${(props) => props.theme.space[4]};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Search = styled.View`
`;

export const MenuList = styled(FlatList)``;
/*
export const MenuList = styled(FlatList).attrs({
  contentContainerStyle: {},
})``;
*/
