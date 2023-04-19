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
import { HomeScreen, Header, Search, Menu, MenuList } from "./home.styles";

// ------------------------------ imports ----------------------------- imports -------------------------------- imports ----------

const Home = () => {
  const MENU_DATA = [
    {
      height: "40%",
      imageUrl: ImgNoodle,
      item: "Noodle",
      price: "$18",
    },
    {
      height: "40%",
      imageUrl: ImgTaco,
      item: "Taco",
      price: "$10",
    },
    {
      height: "40%",
      imageUrl: ImgPizza,
      item: "Pizza",
      price: "$48",
    },
    {
      height: "40%",
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
        <Menu>
          <MenuItem
            height="64%"
            imageUrl={ImgNoodle}
            item="Sushi"
            price="$18"
          />
          <MenuItem height="64%" imageUrl={ImgTaco} item="Taco" price="$10" />
          {/* <MenuItem height="60%" imageUrl={ImgPizza} item="Pizza" price="$48" />
          <MenuItem height="60%" imageUrl={ImgSalad} item="Veggy" price="$25" /> */}
        </Menu>
      </HomeScreen>
    </SafeArea>
  );
};

export default Home;

{
  /* {menuItems.map(({ height, imageUrl, item, price }) => (
          <MenuItem
            key={item}
            height={height}
            imageUrl={imageUrl}
            item={item}
            price={price}
          />
        ))}

        <Menu>
          <MenuItem height="60%" imageUrl={ImgNoodle} item="Sushi" price="$18" />
          <MenuItem height="60%" imageUrl={ImgTaco} item="Taco" price="$10" />
        </Menu>

        <MenuList
          data={MENU_DATA}
          renderItem={({ menuItem }) => {
            console.log(menuItem);

            return (
              <MenuItem
              height={menuItem.height}
              imageUrl={menuItem.imageUrl}
              item={menuItem.item}
              price={menuItem.price}
            />
            )
          }}
        />
        
        <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />*/
}
