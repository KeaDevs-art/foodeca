import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../../utils/safe-area.component";
import { HeadingPrimary } from "../../../../typography/heading-primary/heading-primary.component";
import { HeadingSecondary } from "../../../../typography/heading-secondary/heading-secondary.component";
import { Disabled } from "../../../../typography/text-disabled/text-disabled.component";
import { StartContext } from "../../../../context/start/start.context";

import { WelcomeContainer } from "./welcome.styles";

// --------------------------- imports ---------------------- imports --------------------------------- imports ----------------

const Welcome = () => {
  const { start, setStart } = useContext(StartContext);

  const handlePress = () => {
    setStart(!start);
  };

  return (
    <SafeArea>
      <WelcomeContainer>
        <HeadingSecondary>FOODECA</HeadingSecondary>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Disabled>Choose your preference</Disabled>
          <View style={{ marginBottom: 16 }} />
          <HeadingPrimary>What's your</HeadingPrimary>
          <HeadingPrimary>
            {" "}
            <Text style={{ color: "rgba(0, 0, 0, .2)" }}>favorite food?</Text>
          </HeadingPrimary>
          <TouchableOpacity
            onPress={handlePress}
            style={{
              backgroundColor: "rgba(0, 0, 0, .9)",
              paddingTop: 20,
              paddingBottom: 20,
              alignItems: "center",
              marginTop: 32,
              marginBottom: 12,
              borderRadius: 30,
              alignSelf: "stretch",
            }}
          >
            <Text
              style={{
                color: "rgba(245, 245, 245, 1)",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </WelcomeContainer>
    </SafeArea>
  );
};

export default Welcome;
