import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesScreen from "../screens/MoviesScreen";
import DetailScreen from "../screens/DetailScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import TVShowsScreen from "../screens/TVShowsScreen";
import { LogBox } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const TabStack = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
    }}
  >
    <Tab.Screen name="Movies" component={MoviesScreen} />
    <Tab.Screen name="Search Results" component={SearchResultsScreen} />
    <Tab.Screen name="TV Shows" component={TVShowsScreen} />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator();

const AppStack = () => {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabStack}
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#015069",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Details Page"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerBackTitle: "Back to List",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
