import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../../features/home/screens/home.screen";

// ------------------------------ imports ---------------------------------- imports -------------------------- imports ------------

const Cart = () => {
  return (
    <View>
      <Text>Cart!</Text>
    </View>
  );
};

const Notifications = () => {
  return (
    <View>
      <Text>Notifications!</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-outline",
  Cart: "cart-outline",
  Notifications: "notifications-outline",
  Settings: "settings-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons style={{fontSize: 20}} name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#fefefe",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 20,
      left: 25,
      right: 25,
      backgroundColor: "rgba(0, 0, 0, 1)",
      borderRadius: 30,
      height: 62,
    },
  };
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
