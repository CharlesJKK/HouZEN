import React from 'react';
import HomeScreen from '../screens/home';
import PlacesScreen from '../screens/places';
import PlaceItem from '../components/placeItem';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Places" component={PlacesScreen} options={{unmountOnBlur: true}}/>
        <Stack.Screen name="PlaceItem" component={PlaceItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}