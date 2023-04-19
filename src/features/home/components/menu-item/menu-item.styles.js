import styled from "styled-components/native";

export const MenuItemContainer = styled.View`
  width: 48%;
`;

export const ItemButton = styled.TouchableOpacity`
  background-color: rgba(250, 250, 250, 1);
  border-radius: ${(props) => props.theme.sizes[1]};
  padding: ${(props) => props.theme.sizes[1]};
  flex-direction: row;
  justify-content: space-between;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  padding: ${(props) => props.theme.sizes[0]};
`;
