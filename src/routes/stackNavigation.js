import React from 'react';
import HomeScreen from '../screens/home';
import PlacesScreen from '../screens/places';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Places" component={PlacesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}