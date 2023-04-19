import { FlatList } from "react-native";
import styled from "styled-components/native";

export const HomeScreen = styled.View`
  flex: 1;
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

export const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MenuList = styled(FlatList)`
`;
