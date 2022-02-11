import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MoviesScreen from '../screens/MoviesScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import TVShowsScreen from '../screens/TVShowsScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator()

const AppStack = () => (
  <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 }
    }}>
      <Tab.Screen
        name='Movies'
        component={MoviesScreen}
      />
      <Tab.Screen
        name='Search Results'
        component={SearchResultsScreen}
        // options={({ route }) => ({
        //   title: route.params.label
        // })}
      />
      <Tab.Screen
        name='TV Shows'
        component={TVShowsScreen}
        // options={({ route }) => ({
        //   title: route.params.label,
        //   headerBackTitle: 'Back to Show'
        // })}
      />
    </Tab.Navigator>
  </NavigationContainer>
)

export default AppStack
