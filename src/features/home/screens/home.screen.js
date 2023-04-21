import React from "react";
import styled from "styled-components/native";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import MenuItem from "../components/menu-item/menu-item.component";
import ImgNoodle from "../../../../assets/fork-noodle.png";
import ImgTaco from "../../../../assets/fast-taco.png";
import ImgPizza from "../../../../assets/Premium-Vector-_-Flying-slice-of-pepperoni-pizza-with-dripping-cheese-flat.png";
import ImgSalad from "../../../../assets/health-things.png";

import { SafeArea } from "../../../utils/safe-area.component";
import { HeadingPrimary } from "../../../typography/heading-primary/heading-primary.component";
import { SearchBar } from "../../../components/searchbar/searchbar.component";
import { HomeScreen, Header, Search, MenuList } from "./home.styles";

// ------------------------------ imports ----------------------------- imports -------------------------------- imports ----------

const Home = () => {
  const MENU_DATA = [
    {
      imageUrl: ImgNoodle,
      item: "Noodle",
      price: "$18",
    },
    {
      imageUrl: ImgTaco,
      item: "Taco",
      price: "$10",
    },
    {
      imageUrl: ImgPizza,
      item: "Pizza",
      price: "$48",
    },
    {
      imageUrl: ImgSalad,
      item: "Salad",
      price: "$25",
    },
  ];

  return (
    <SafeArea>
      <HomeScreen>
        <Header>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="rgba(0, 0, 0, .3)" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="account-box" size={32} color="black" />
          </TouchableOpacity>
        </Header>
        <Search>
          <HeadingPrimary>What would</HeadingPrimary>
          <HeadingPrimary>
            you{" "}
            <Text style={{ color: "rgba(0, 0, 0, .2)" }}>like to order?</Text>
          </HeadingPrimary>
          <SearchBar />
        </Search>
        <MenuList
          keyExtractor={(item) => `${item.id}_${item.item}`}
          numColumns={2}
          contentContainerStyle={{
            alignItems: "center",
            alignSelf: "stretch",
          }}
          data={MENU_DATA}
          renderItem={({ item, index }) => (
            <MenuItem
              height={index % 2 == 0 ? 200 : 165}
              marginLeft={index % 2 !== 0 ? 14 : 0}
              imageUrl={item.imageUrl}
              item={item.item}
              price={item.price}
            />
          )}
        />
      </HomeScreen>
    </SafeArea>
  );
};

export default Home;
