import React, { useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/HomeScreen";
import BibleScreen from "./screens/BibleScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import MenuScreen from "./screens/MenuScreen";
import { StyleSheet, View, Dimensions } from "react-native";

const Tab = createMaterialBottomTabNavigator();
const List = [
  {
    name: "Home",
    component: HomeScreen,
    icon: "home",
  },
  {
    name: "Bible",
    component: BibleScreen,
    icon: "book-cross",
  },
  {
    name: "Mark",
    component: BookmarkScreen,
    icon: "bookmark-outline",
  },
  {
    name: "Menu",
    component: MenuScreen,
    icon: "menu",
  },
];
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={styles.shadow}
        // labeled={false}
        shifting={true}
        activeColor="#1E5A85"
      >
        {List.map((item, index) => (
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{
              // tabBarLabel: item.name,
              tabBarIcon: ({ focused }) => (
                <View
                  key={index++}
                  style={{
                    backgroundColor: focused ? "#1E5A85" : "white",
                    elevation: focused ? 10 : 0,
                    top: focused ? -8 : -12,
                    ...styles.hover,
                  }}
                >
                  <Icon
                    name={item.icon}
                    color={focused ? "#F2F4F5" : "#1E5A85"}
                    size={26}
                  />
                </View>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#fff",
    borderRadius: 20,
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 10,
    padding: 10,
    shadowColor: "#1E5A85",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 7,
  },
  hover: {
    width: getWidth() - 30,
    height: getWidth() - 30,
    position: "absolute",
    alignItems: "center",
    borderRadius: 50,
    alignContent: "center",
    paddingTop: 10,
    shadowColor: "#1E5A85",
  },
});

function getWidth() {
  let width = Dimensions.get("window").width;
  width -= 40;
  return width / 4;
}
