import React from "react";
import { Text } from "react-native";

import {
  MenuItemContainer,
  ItemButton,
  BackgroundImage,
} from "./menu-item.styles";

// ------------------------------- imports ------------------------ imports --------------------------------- imports ------------

const MenuItem = ({ height, imageUrl, item, price }) => {
  return (
    <MenuItemContainer style={{ height: height }}>
      <BackgroundImage source={imageUrl} imageStyle={{ borderRadius: 20 }}>
        <ItemButton>
          <Text style={{ color: "rgba(0, 0, 0, .6)" }}>{item}</Text>
          <Text style={{ fontSize: 16 }}>{price}</Text>
        </ItemButton>
      </BackgroundImage>
    </MenuItemContainer>
  );
};

export default MenuItem;
